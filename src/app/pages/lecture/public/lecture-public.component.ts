import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
import { LectureService } from '../../../conference/lecture/lecture.service';
import { PollAnswerService, PollService } from '../../../conference/poll/poll.service';
import { Question } from '../../../conference/question/question.interface';
import { QuestionService } from '../../../conference/question/question.service';
import { QuizAnswerService, QuizService } from '../../../conference/quiz/quiz.service';
import { slugify } from '../../../shared/slugify';

/**
 * Public lecture page: `lect#:lectureId`. Mirrors the conference programme's
 * `conf#:conferenceId` pattern — the id lives in the URL fragment (not a
 * path param), so it's read from `ActivatedRoute.fragment` rather than an
 * `input()`. Reached from the conference programme — one lecture per page
 * instead of an inline accordion, so the URL is shareable on its own.
 */
@Component({
	selector: 'app-lecture-public',
	imports: [
		ButtonModule,
		CardModule,
		DialogModule,
		InputTextModule,
		TagModule,
		FormsModule,
		RouterLink,
		TranslateDirective,
	],
	templateUrl: './lecture-public.component.html',
	styleUrl: './lecture-public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LecturePublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _conferenceService = inject(ConferenceService);
	private readonly _lectureService = inject(LectureService);
	private readonly _eventService = inject(EventService);
	private readonly _questionService = inject(QuestionService);
	private readonly _pollService = inject(PollService);
	readonly pollAnswerService = inject(PollAnswerService);
	private readonly _quizService = inject(QuizService);
	readonly quizAnswerService = inject(QuizAnswerService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);
	private readonly _router = inject(Router);
	private readonly _location = inject(Location);
	readonly deviceIdService = inject(DeviceIdService);

	readonly lectureId = toSignal(this._route.fragment, { initialValue: null });

	readonly lecture = computed(() => this._lectureService.byPublicId(this.lectureId() ?? '') ?? null);
	readonly conference = computed(() => {
		const conferenceId = this.lecture()?.conferenceId;
		return conferenceId ? (this._conferenceService.byId(conferenceId) ?? null) : null;
	});

	readonly schedule = computed(() => {
		const lecture = this.lecture();
		if (!lecture) {
			return { speaker: '', time: '' };
		}

		const event = this._eventService.all().find((item) => item.lectureId === lecture._id);
		if (!event || (!event.date && !event.startTime)) {
			return { speaker: '', time: '' };
		}

		const time = `${event.date} ${event.startTime}${event.endTime ? ' – ' + event.endTime : ''}`.trim();
		return { speaker: event.speaker, time };
	});

	readonly questions = computed(() => {
		const lecture = this.lecture();
		return lecture ? this._questionService.byEvent(lecture._id) : [];
	});

	/** The event this lecture is scheduled as, if any — polls are keyed by event id, not lecture id. */
	readonly event = computed(() => {
		const lecture = this.lecture();
		return lecture ? (this._eventService.all().find((item) => item.lectureId === lecture._id) ?? null) : null;
	});
	readonly activePolls = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._pollService.byEvent(eventDoc._id).filter((poll) => poll.active) : [];
	});
	readonly allPollsAnswered = computed(() => this.activePolls().every((poll) => this.pollAnswerService.hasAnswered(poll)));
	readonly activeQuizzes = computed(() => {
		const eventDoc = this.event();
		return eventDoc ? this._quizService.byEvent(eventDoc._id).filter((quiz) => quiz.active) : [];
	});
	readonly allQuizzesAnswered = computed(() => this.activeQuizzes().every((quiz) => this.quizAnswerService.hasAnswered(quiz)));

	readonly newQuestionText = signal('');
	readonly showNamePrompt = signal(false);
	readonly nameDraft = signal('');
	private _pendingInteraction: (() => void) | null = null;

	constructor() {
		effect(() => {
			const lecture = this.lecture();
			if (!lecture) {
				return;
			}

			this._metaService.applyMeta({ title: lecture.title, description: lecture.description || undefined });
			this._questionService.loadEvent(lecture._id);
		});

		effect(() => {
			const lecture = this.lecture();
			const conference = this.conference();
			if (!lecture || !conference) {
				return;
			}

			// Old links (raw lecture id) still resolve, but the address bar is
			// normalized to the readable conf-<slug>-<n> form once it's found.
			const siblings = this._lectureService.all().filter((item) => item.conferenceId === conference._id);
			const position = siblings.indexOf(lecture) + 1;
			if (position < 1) {
				return;
			}

			const canonical = `conf-${slugify(conference.title)}-${position}`;
			if (this.lectureId() !== canonical) {
				this._location.replaceState(`/lect#${canonical}`);
			}
		});

		effect(() => {
			const eventDoc = this.event();
			if (!eventDoc) {
				return;
			}

			this._pollService.loadEvent(eventDoc._id);
			this._quizService.loadEvent(eventDoc._id);
		});

		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
		});
	}

	submitQuestion(): void {
		this._withVisitorName(() => {
			const text = this.newQuestionText().trim();
			const lecture = this.lecture();
			if (!text || !lecture) {
				return;
			}

			this._questionService.ask(lecture._id, text, this.deviceIdService.visitorName() || 'Anonymous');
			this.newQuestionText.set('');
		});
	}

	likeQuestion(question: Question): void {
		this._withVisitorName(() => this._questionService.like(question));
	}

	goToPolls(): void {
		const ids = this.activePolls()
			.filter((poll) => !this.pollAnswerService.hasAnswered(poll))
			.map((poll) => poll._id);
		if (!ids.length) {
			return;
		}

		this._router.navigate(['/poll', ids[0]], { queryParams: { lecture: this.lectureId(), ids: ids.join(',') } });
	}

	goToQuizzes(): void {
		const ids = this.activeQuizzes()
			.filter((quiz) => !this.quizAnswerService.hasAnswered(quiz))
			.map((quiz) => quiz._id);
		if (!ids.length) {
			return;
		}

		this._router.navigate(['/quiz', ids[0]], { queryParams: { lecture: this.lectureId(), ids: ids.join(',') } });
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
}
