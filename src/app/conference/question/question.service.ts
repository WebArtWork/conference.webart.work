import { Injectable, inject } from '@angular/core';
import { SEED_QUESTIONS } from '../../../data/conference/seed';
import { LocalStoreService } from '../local-store';
import { DeviceIdService } from '../device-id.service';
import { Question } from './question.interface';

@Injectable({ providedIn: 'root' })
export class QuestionService extends LocalStoreService<Question> {
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super('conference:questions', SEED_QUESTIONS);
	}

	/** Public questions for an event, ordered by like count descending. */
	byEvent(eventId: string): Question[] {
		return this.all()
			.filter((question) => question.eventId === eventId)
			.sort((a, b) => b.likes - a.likes);
	}

	ask(eventId: string, text: string, authorName: string): Question {
		return this.create({
			eventId,
			text,
			authorName,
			likes: 0,
			likedBy: [],
			createdAt: new Date().toISOString(),
		});
	}

	/** Upvotes a question. Only one like per device id is allowed. */
	like(question: Question): void {
		const deviceId = this._deviceIdService.deviceId;
		if (question.likedBy.includes(deviceId)) {
			return;
		}

		this.update(question._id, {
			likes: question.likes + 1,
			likedBy: [...question.likedBy, deviceId],
		});
	}

	/** Owner-only moderation: removes a question from the public page. */
	removeQuestion(question: Question): void {
		this.remove(question._id);
	}
}
