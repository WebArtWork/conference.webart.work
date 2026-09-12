import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ConferenceService } from '../../../conference/conference.service';
import { EventService } from '../../../conference/event/event.service';
import { Lecture } from '../../../conference/lecture/lecture.interface';
import { LectureService } from '../../../conference/lecture/lecture.service';
import { slugify } from '../../../shared/slugify';

/**
 * Public conference page: `conf#:conferenceId`. Shared via QR code so
 * attendees can browse the lecture programme without an account. The id
 * lives in the URL fragment (not a query param), so it's read from
 * `ActivatedRoute.fragment` rather than an `input()`.
 */
@Component({
	selector: 'app-conference-public',
	imports: [CardModule, TagModule, RouterLink, TranslateDirective],
	templateUrl: './conference-public.component.html',
	styleUrl: './conference-public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferencePublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _conferenceService = inject(ConferenceService);
	private readonly _lectureService = inject(LectureService);
	private readonly _eventService = inject(EventService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);

	readonly id = toSignal(this._route.fragment, { initialValue: null });

	readonly conference = computed(() => this._conferenceService.byPublicId(this.id() ?? '') ?? null);
	readonly lectures = computed(() => {
		const conference = this.conference();
		return conference ? this._lectureService.all().filter((lecture) => lecture.conferenceId === conference._id) : [];
	});

	constructor() {
		effect(() => {
			const conference = this.conference();
			if (!conference) {
				return;
			}

			this._metaService.applyMeta({ title: conference.title });
		});
	}

	/** `conf-<conference-slug>-<n>`, matching `LectureService.byPublicId`, so links stay readable even for lectures whose stored `_id` isn't slug-shaped. */
	lectureFragment(index: number): string {
		const conference = this.conference();
		return conference ? `conf-${slugify(conference.title)}-${index + 1}` : '';
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
