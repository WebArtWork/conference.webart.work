import { CrudDocument } from '@wawjs/ngx-crud';

/** Owner-created quiz: like a poll, but with a correct answer. */
export interface Quiz extends CrudDocument<Quiz> {
	eventId: string;
	question: string;
	options: string[];
	correctOptionIndex: number;
	active: boolean;
}

/** Owner-only aggregate result for one quiz option. */
export interface QuizResult {
	optionIndex: number;
	votes: number;
	isCorrect: boolean;
}
