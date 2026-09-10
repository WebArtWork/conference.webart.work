import { Injectable, inject } from '@angular/core';
import { CrudOptions, CrudService } from '@wawjs/ngx-crud';
import { HttpService } from '@wawjs/ngx-http';
import { CONFERENCE_DOMAIN, withDomain } from '../conference-domain';
import { DeviceIdService } from '../device-id.service';
import { Question } from './question.interface';

/**
 * Audience questions, backed by the real backend so the Q&A wall is shared
 * across every visitor and syncs across the owner's devices. Anyone (owner
 * or anonymous visitor) may post or like a question; only the owner may
 * delete one.
 */
@Injectable({ providedIn: 'root' })
export class QuestionService extends CrudService<Question> {
	private readonly _deviceIdService = inject(DeviceIdService);
	private readonly _http = inject(HttpService);

	constructor() {
		super({ name: 'companyconferencequestion' });
	}

	protected override beforeCreate(doc: Question, options: CrudOptions<Question>) {
		return super.beforeCreate({ ...doc, domain: CONFERENCE_DOMAIN } as Question, options);
	}

	/** Loads (or reloads) the public question wall for one event/lecture. */
	loadEvent(eventId: string): void {
		this.get({ query: withDomain(`eventId=${encodeURIComponent(eventId)}`) }).subscribe();
	}

	/** Public questions for an event, ordered by like count descending. */
	byEvent(eventId: string): Question[] {
		return this.documents()
			.filter((question) => question.eventId === eventId)
			.sort((a, b) => b.likes - a.likes);
	}

	ask(eventId: string, text: string, authorName: string): void {
		this.create({
			_id: '',
			eventId,
			text,
			authorName,
			likes: 0,
			likedBy: [],
			createdAt: new Date().toISOString(),
		});
	}

	/** Upvotes a question. The server enforces one like per device and does the increment atomically. */
	like(question: Question): void {
		const deviceId = this._deviceIdService.deviceId;
		if (question.likedBy.includes(deviceId)) {
			return;
		}

		this.addDoc({ ...question, likes: question.likes + 1, likedBy: [...question.likedBy, deviceId] });
		this._http
			.post('/api/companyconferencequestion/like', { _id: question._id, deviceId, domain: CONFERENCE_DOMAIN })
			.subscribe();
	}

	/** Owner-only moderation: removes a question from the public page. */
	removeQuestion(question: Question): void {
		this.delete(question).subscribe();
	}
}
