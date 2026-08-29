import { StoredEntity } from '../local-store';

/** Owner-created poll: question + options, no correct answer. */
export interface Poll extends StoredEntity {
	eventId: string;
	question: string;
	options: string[];
	active: boolean;
}

/** A single visitor answer. Owner-only, never exposed to visitors. */
export interface PollAnswer extends StoredEntity {
	pollId: string;
	optionIndex: number;
	deviceId: string;
}

/** Owner-only aggregate result for one poll option. */
export interface PollResult {
	optionIndex: number;
	votes: number;
}
