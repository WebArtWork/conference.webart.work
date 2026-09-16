import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'conference-demo-answers';

interface DemoAnswerState {
	pollOptionByPollId: Record<string, number>;
	quizOptionByQuizId: Record<string, number>;
}

const EMPTY_STATE: DemoAnswerState = { pollOptionByPollId: {}, quizOptionByQuizId: {} };

/**
 * Client-only "have I answered this?" tracking for the showcase event's
 * polls/quizzes. Kept separate from `PollAnswerService`/`QuizAnswerService`
 * (the real backend) because those dedupe by this browser's persistent
 * device id against whatever poll/quiz ids were ever answered — when the
 * demo's fixed poll/quiz ids get new question text (as they did here), a
 * visitor who answered the old content would see the new one pre-marked as
 * answered. Local, per-browser state avoids that entirely.
 */
@Injectable({ providedIn: 'root' })
export class DemoAnswerStore {
	private readonly _state = signal<DemoAnswerState>(this._read());

	hasAnsweredPoll(pollId: string): boolean {
		return pollId in this._state().pollOptionByPollId;
	}

	answerPoll(pollId: string, optionIndex: number): void {
		this._update((state) => ({
			...state,
			pollOptionByPollId: { ...state.pollOptionByPollId, [pollId]: optionIndex },
		}));
	}

	hasAnsweredQuiz(quizId: string): boolean {
		return quizId in this._state().quizOptionByQuizId;
	}

	answerQuiz(quizId: string, optionIndex: number): void {
		this._update((state) => ({
			...state,
			quizOptionByQuizId: { ...state.quizOptionByQuizId, [quizId]: optionIndex },
		}));
	}

	private _update(mutate: (state: DemoAnswerState) => DemoAnswerState): void {
		const next = mutate(this._state());
		this._state.set(next);
		this._write(next);
	}

	private _read(): DemoAnswerState {
		if (typeof localStorage === 'undefined') {
			return EMPTY_STATE;
		}

		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? (JSON.parse(raw) as DemoAnswerState) : EMPTY_STATE;
		} catch {
			return EMPTY_STATE;
		}
	}

	private _write(state: DemoAnswerState): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		}
	}
}
