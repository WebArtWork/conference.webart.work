import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { ConferenceService } from '../../../conference/conference.service';
import { NEW_EVENT, generateEventSlug } from '../../../conference/event/event.const';
import { EventService } from '../../../conference/event/event.service';
import { NEW_LECTURE } from '../../../conference/lecture/lecture.const';
import { Lecture } from '../../../conference/lecture/lecture.interface';
import { LectureService } from '../../../conference/lecture/lecture.service';
import { LectureEditCardComponent } from './lecture-edit-card.component';

/** `/lectures-manage` — organizer CRUD over the shared lecture catalogue. */
@Component({
	selector: 'app-lectures-manage',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonModule, CardModule, LectureEditCardComponent, TranslateDirective],
	templateUrl: './lectures-manage.component.html',
	styleUrl: './lectures-manage.component.scss',
})
export class LecturesManageComponent {
	readonly translateService = inject(TranslateService);
	private readonly _lectureService = inject(LectureService);
	private readonly _conferenceService = inject(ConferenceService);
	private readonly _eventService = inject(EventService);
	private readonly _userService = inject(UserService);
	private readonly _messageService = inject(MessageService);
	private readonly _router = inject(Router);

	readonly lectures = this._lectureService.items;
	readonly expandedId = signal<string | null>(null);

	/** A not-yet-persisted lecture being composed; only added to the store on save. */
	readonly draftLecture = signal<Lecture | null>(null);

	isExpanded(lecture: Lecture): boolean {
		return this.expandedId() === lecture._id;
	}

	toggleExpanded(lecture: Lecture): void {
		this.expandedId.set(this.isExpanded(lecture) ? null : lecture._id);
	}

	addLecture(): void {
		this.draftLecture.set({ ...NEW_LECTURE, conferenceId: this._conferenceService.items()[0]?._id ?? '' });
	}

	cancelDraft(): void {
		this.draftLecture.set(null);
	}

	onDraftCreated(): void {
		this.draftLecture.set(null);
	}

	deleteLecture(lecture: Lecture): void {
		const message = this.translateService.interpolate(this.translateService.translate('Delete lecture "{{title}}"?')(), {
			title: lecture.title || this.translateService.translate('Untitled')(),
		});
		if (!confirm(message)) {
			return;
		}
		this._lectureService.remove(lecture._id);
		if (this.expandedId() === lecture._id) {
			this.expandedId.set(null);
		}
	}

	async createEventForLecture(lecture: Lecture): Promise<void> {
		const owner = this._userService.user();
		const eventDoc = this._eventService.create({
			...NEW_EVENT,
			slug: generateEventSlug(),
			owner: owner?._id ?? '',
			title: lecture.title,
			speaker: owner?.name || lecture.speaker || '',
			description: lecture.description ?? '',
			lectureId: lecture._id,
			createdAt: new Date().toISOString(),
		});

		// The backend can silently refuse the write (e.g. an expired session)
		// without ever surfacing an error, so confirm it actually landed before
		// sending the organizer to a "manage" page for an event that doesn't
		// really exist — otherwise it just vanishes again on the next refresh.
		const persisted = await this._eventService.confirmPersisted(eventDoc._id);
		if (!persisted) {
			this._eventService.remove(eventDoc._id);
			this._messageService.add({
				severity: 'error',
				detail: this.translateService.translate('Something went wrong')(),
			});
			return;
		}

		this._router.navigate(['/event', eventDoc.slug, 'manage']);
	}
}
