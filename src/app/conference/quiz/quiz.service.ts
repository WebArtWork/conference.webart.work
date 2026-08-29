import { Injectable, inject } from '@angular/core';
import { SEED_QUIZ_ANSWERS, SEED_QUIZZES } from '../../../data/conference/seed';
import { LocalStoreService } from '../local-store';
import { DeviceIdService } from '../device-id.service';
import { Quiz, QuizAnswer, QuizResult } from './quiz.interface';

@Injectable({ providedIn: 'root' })
export class QuizService extends LocalStoreService<Quiz> {
	protected readonly storageKey = 'conference:quizzes';
	protected readonly seed = SEED_QUIZZES;

	byEvent(eventId: string): Quiz[] {
		return this.all().filter((quiz) => quiz.eventId === eventId);
	}
}

@Injectable({ providedIn: 'root' })
export class QuizAnswerService extends LocalStoreService<QuizAnswer> {
	protected readonly storageKey = 'conference:quiz-answers';
	protected readonly seed = SEED_QUIZ_ANSWERS;

	private readonly _deviceIdService = inject(DeviceIdService);

	/** Visitor write-only action. Correctness is never returned from this call. */
	answer(quiz: Quiz, optionIndex: number): void {
		const deviceId = this._deviceIdService.deviceId;
		if (this.all().some((entry) => entry.quizId === quiz._id && entry.deviceId === deviceId)) {
			return;
		}

		this.create({ quizId: quiz._id, optionIndex, deviceId });
	}

	hasAnswered(quiz: Quiz): boolean {
		const deviceId = this._deviceIdService.deviceId;
		return this.all().some((entry) => entry.quizId === quiz._id && entry.deviceId === deviceId);
	}

	/** Owner-only: submitted answers, % correct, distribution. */
	results(quiz: Quiz): QuizResult[] {
		return quiz.options.map((_option, optionIndex) => ({
			optionIndex,
			votes: this.all().filter(
				(entry) => entry.quizId === quiz._id && entry.optionIndex === optionIndex,
			).length,
			isCorrect: optionIndex === quiz.correctOptionIndex,
		}));
	}
}
