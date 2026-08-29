import { StoredEntity } from '../local-store';

/** Owner-created quiz: like a poll, but with a correct answer. */
export interface Quiz extends StoredEntity {
	eventId: string;
	question: string;
	options: string[];
	correctOptionIndex: number;
	active: boolean;
}

/** A single visitor answer. Owner-only, never exposed to visitors. */
export interface QuizAnswer extends StoredEntity {
	quizId: string;
	optionIndex: number;
	deviceId: string;
}

/** Owner-only aggregate result for one quiz option. */
export interface QuizResult {
	optionIndex: number;
	votes: number;
	isCorrect: boolean;
}
