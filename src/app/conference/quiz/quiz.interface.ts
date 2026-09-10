import { StoredEntity } from '../local-store';

/** Owner-created quiz: question + options with a marked correct answer. */
export interface Quiz extends StoredEntity {
	eventId: string;
	question: string;
	options: string[];
	correctOptionIndex: number;
	/** Whether visitors see if their pick was correct right after answering. */
	revealAnswer: boolean;
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
