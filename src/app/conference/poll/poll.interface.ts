import { CrudDocument } from '@wawjs/ngx-crud';

/** Owner-created poll: question + options, no correct answer. */
export interface Poll extends CrudDocument<Poll> {
	eventId: string;
	question: string;
	options: string[];
	active: boolean;
}

/** Owner-only aggregate result for one poll option. */
export interface PollResult {
	optionIndex: number;
	votes: number;
}
