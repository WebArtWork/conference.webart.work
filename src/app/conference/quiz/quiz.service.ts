import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { HttpService } from '@wawjs/ngx-http';
import { Observable } from 'rxjs';
import { DeviceIdService } from '../device-id.service';
import { Quiz, QuizResult } from './quiz.interface';

@Injectable({ providedIn: 'root' })
export class QuizService extends CrudService<Quiz> {
	private readonly _httpService = inject(HttpService);
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super({ name: 'quiz' });
	}

	byEvent(eventId: string): Observable<Quiz[]> {
		return this.get({ query: `eventId=${eventId}` });
	}

	/**
	 * Visitor write-only action: submits an answer while the quiz is active.
	 * Correctness/results are never returned to the visitor from this call.
	 */
	answer(quiz: Quiz, optionIndex: number): Observable<unknown> {
		return this._httpService.post('/api/quiz/answer', {
			quizId: quiz._id,
			optionIndex,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	/** Owner-only: submitted answers, % correct, distribution. */
	results(quiz: Quiz): Observable<QuizResult[]> {
		return this._httpService.get(
			`/api/quiz/${quiz._id}/results`,
		) as Observable<QuizResult[]>;
	}
}
