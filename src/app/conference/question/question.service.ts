import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { HttpService } from '@wawjs/ngx-http';
import { Observable } from 'rxjs';
import { DeviceIdService } from '../device-id.service';
import { Question } from './question.interface';

@Injectable({ providedIn: 'root' })
export class QuestionService extends CrudService<Question> {
	private readonly _httpApi = inject(HttpService);
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super({ name: 'question' });
	}

	/** Public questions for an event, ordered by like count descending. */
	byEvent(eventId: string): Observable<Question[]> {
		return this.get({ query: `eventId=${eventId}&sort=-likes` });
	}

	/**
	 * Upvotes a question. Only one like per device is allowed; the backend is
	 * expected to dedupe using the device id (visitors have no accounts).
	 * Custom (non-CRUD) action via `HttpService`.
	 */
	like(question: Question): Observable<unknown> {
		return this._httpApi.post('/api/question/like', {
			questionId: question._id,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	/** Owner-only moderation: removes a question from the public page. */
	remove(question: Question): Observable<Question> {
		return this.delete(question);
	}
}
