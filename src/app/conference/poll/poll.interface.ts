import { StoredEntity } from '../local-store';

/** Owner-created poll: question + options, no correct answer. */
export interface Poll extends StoredEntity {
	eventId: string;
	question: string;
	options: string[];
	active: boolean;
}

/**
 * A single visitor answer. Owner-only, never exposed to visitors.
 * Backed by the shared `companyconferenceanswer` resource, also used by
 * quizzes — `kind` tells them apart and only the matching id field is set.
 */
export interface PollAnswer extends StoredEntity {
	kind: 'poll' | 'quiz';
	pollId?: string;
	quizId?: string;
	optionIndex: number;
	deviceId: string;
}

/** Owner-only aggregate result for one poll option. */
export interface PollResult {
	optionIndex: number;
	votes: number;
}
