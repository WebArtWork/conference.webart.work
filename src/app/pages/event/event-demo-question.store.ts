import { Injectable, signal } from '@angular/core';
import { Question } from '../../conference/question/question.interface';
import { DEMO_EVENT_ID, DEMO_QUESTIONS } from './event-demo.data';

const STORAGE_KEY = 'conference-demo-questions';

/**
 * Client-only Q&A wall for the showcase event (slug `test-1`). Both the
 * public page and the owner's manage page read/write through this single
 * signal instead of `QuestionService` — a real backend write keyed by the
 * demo's fake event id could be silently rejected server-side, which would
 * leave the two pages out of sync. Persisted to `localStorage` so a question
 * asked on one tab is still there after a reload, matching how the rest of
 * this demo event's fixtures behave.
 */
@Injectable({ providedIn: 'root' })
export class DemoQuestionStore {
	readonly questions = signal<Question[]>(this._read());

	ask(text: string, authorName: string): void {
		const question: Question = {
			_id: `demo-question-${Date.now()}`,
			eventId: DEMO_EVENT_ID,
			text,
			authorName,
			likes: 0,
			likedBy: [],
			createdAt: new Date().toISOString(),
		};
		this._update((list) => [question, ...list]);
	}

	like(question: Question, deviceId: string): void {
		if (question.likedBy.includes(deviceId)) {
			return;
		}

		this._update((list) =>
			list.map((item) =>
				item._id === question._id
					? { ...item, likes: item.likes + 1, likedBy: [...item.likedBy, deviceId] }
					: item,
			),
		);
	}

	remove(question: Question): void {
		this._update((list) => list.filter((item) => item._id !== question._id));
	}

	private _update(mutate: (list: Question[]) => Question[]): void {
		const next = mutate(this.questions());
		this.questions.set(next);
		this._write(next);
	}

	private _read(): Question[] {
		if (typeof localStorage === 'undefined') {
			return DEMO_QUESTIONS;
		}

		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? (JSON.parse(raw) as Question[]) : DEMO_QUESTIONS;
		} catch {
			return DEMO_QUESTIONS;
		}
	}

	private _write(list: Question[]): void {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
		}
	}
}
