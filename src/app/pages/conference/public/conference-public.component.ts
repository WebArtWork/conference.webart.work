import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MetaService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ConferenceService } from '../../../conference/conference.service';
import { DeviceIdService } from '../../../conference/device-id.service';
import { EventService } from '../../../conference/event/event.service';
import { Lecture } from '../../../conference/lecture/lecture.interface';
import { LectureService } from '../../../conference/lecture/lecture.service';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';

/**
 * Public conference page: `conf#:conferenceId`. Shared via QR code so
 * attendees can browse the lecture programme without an account. The id
 * lives in the URL fragment (not a query param), so it's read from
 * `ActivatedRoute.fragment` rather than an `input()`.
 */
@Component({
	selector: 'app-conference-public',
	imports: [ButtonModule, CardModule, DialogModule, InputTextModule, TagModule, FormsModule, TranslateDirective],
	templateUrl: './conference-public.component.html',
	styleUrl: './conference-public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferencePublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _conferenceService = inject(ConferenceService);
	private readonly _lectureService = inject(LectureService);
	private readonly _eventService = inject(EventService);
	private readonly _questionService = inject(QuestionService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);
	readonly deviceIdService = inject(DeviceIdService);

	readonly id = toSignal(this._route.fragment, { initialValue: null });

	readonly conference = computed(() => this._conferenceService.byId(this.id() ?? '') ?? null);
	readonly lectures = computed(() =>
		this._lectureService.all().filter((lecture) => lecture.conferenceId === this.id()),
	);

	readonly expandedLectureId = signal<string | null>(null);

	readonly newQuestionText = signal('');
	readonly showNamePrompt = signal(false);
	readonly nameDraft = signal('');
	private _pendingInteraction: (() => void) | null = null;

	constructor() {
		effect(() => {
			const conference = this.conference();
			if (!conference) {
				return;
			}

			this._metaService.applyMeta({ title: conference.title });
		});

		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
		});
	}

	toggleLecture(lectureId: string): void {
		this.expandedLectureId.update((current) => (current === lectureId ? null : lectureId));
	}

	questions(lecture: Lecture): Question[] {
		return this._questionService.byEvent(lecture._id);
	}

	submitQuestion(lecture: Lecture): void {
		this._withVisitorName(() => {
			const text = this.newQuestionText().trim();
			if (!text) {
				return;
			}

			this._questionService.ask(lecture._id, text, this.deviceIdService.visitorName() || 'Anonymous');
			this.newQuestionText.set('');
		});
	}

	likeQuestion(question: Question): void {
		this._withVisitorName(() => this._questionService.like(question));
	}

	confirmName(): void {
		this.deviceIdService.setVisitorName(this.nameDraft().trim());
		this.showNamePrompt.set(false);

		const pending = this._pendingInteraction;
		this._pendingInteraction = null;
		pending?.();
	}

	/** Prompts for a visitor display name once, on first interaction, then runs the action. */
	private _withVisitorName(action: () => void): void {
		if (this.deviceIdService.visitorName()) {
			action();
			return;
		}

		this._pendingInteraction = action;
		this.showNamePrompt.set(true);
	}

	/** Speaker and schedule actually set on the linked event — not the lecture's own placeholder fields. */
	scheduleInfo(lecture: Lecture): { speaker: string; time: string } {
		const event = this._eventService.all().find((item) => item.lectureId === lecture._id);
		if (!event || (!event.date && !event.startTime)) {
			return { speaker: '', time: '' };
		}
		const time = `${event.date} ${event.startTime}${event.endTime ? ' – ' + event.endTime : ''}`.trim();
		return { speaker: event.speaker, time };
	}
}
