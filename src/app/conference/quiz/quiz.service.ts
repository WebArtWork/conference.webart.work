import { Injectable, inject } from '@angular/core';
import { CrudService, CrudOptions } from '@wawjs/ngx-crud';
import { CONFERENCE_DOMAIN, withDomain } from '../conference-domain';
import { DeviceIdService } from '../device-id.service';
import { PollAnswerService } from '../poll/poll.service';
import { Quiz, QuizAnswer, QuizResult } from './quiz.interface';

/** Owner-managed quizzes, backed by the real backend so they sync across devices. */
@Injectable({ providedIn: 'root' })
export class QuizService extends CrudService<Quiz> {
	constructor() {
		super({ name: 'companyconferencequiz' });
	}

	protected override beforeCreate(doc: Quiz, options: CrudOptions<Quiz>) {
		return super.beforeCreate({ ...doc, domain: CONFERENCE_DOMAIN } as Quiz, options);
	}

	/** Loads (or reloads) every quiz for one event — owner sees all, visitors only the active ones. */
	loadEvent(eventId: string): void {
		this.get({ query: withDomain(`eventId=${encodeURIComponent(eventId)}`) }).subscribe();
	}

	byEvent(eventId: string): Quiz[] {
		return this.documents().filter((quiz) => quiz.eventId === eventId);
	}

	byId(id: string): Quiz | undefined {
		return this.documents().find((quiz) => quiz._id === id);
	}
}

/**
 * Quiz answers share the exact same backend resource (and the same
 * `PollAnswerService` CrudService instance) as poll answers — only `kind`
 * differs. This wraps that shared instance with the quiz-flavored API the
 * rest of the app expects.
 */
@Injectable({ providedIn: 'root' })
export class QuizAnswerService {
	private readonly _answers = inject(PollAnswerService);
	private readonly _deviceIdService = inject(DeviceIdService);

	all(): QuizAnswer[] {
		return this._answers.documents().filter((entry) => entry.kind === 'quiz');
	}

	/** Owner-only: loads every answer for this company, to tally results. */
	loadAll(): void {
		this._answers.loadAll();
	}

	/** Visitor write-only action. Correctness is never returned from this call. */
	answer(quiz: Quiz, optionIndex: number): void {
		if (this.hasAnswered(quiz)) {
			return;
		}

		this._answers.create({
			_id: '',
			kind: 'quiz',
			quizId: quiz._id,
			optionIndex,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	hasAnswered(quiz: Quiz): boolean {
		const deviceId = this._deviceIdService.deviceId;
		return this.all().some((entry) => entry.quizId === quiz._id && entry.deviceId === deviceId);
	}

	/** Owner-only: submitted answers, % correct, distribution. */
	results(quiz: Quiz): QuizResult[] {
		return quiz.options.map((_option, optionIndex) => ({
			optionIndex,
			votes: this.all().filter((entry) => entry.quizId === quiz._id && entry.optionIndex === optionIndex).length,
			isCorrect: optionIndex === quiz.correctOptionIndex,
		}));
	}
}
