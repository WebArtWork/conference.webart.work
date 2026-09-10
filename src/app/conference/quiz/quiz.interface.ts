import { StoredEntity } from '../local-store';
import { PollAnswer } from '../poll/poll.interface';

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

/** A single visitor answer. Same shared shape as `PollAnswer` (`kind: 'quiz'`). */
export type QuizAnswer = PollAnswer;

/** Owner-only aggregate result for one quiz option. */
export interface QuizResult {
	optionIndex: number;
	votes: number;
	isCorrect: boolean;
}
