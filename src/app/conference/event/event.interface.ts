import { StoredEntity } from '../local-store';

export type EventState = 'draft' | 'live' | 'ended';

/** The main container of the app: an owner-managed conference/talk/event. */
export interface Event extends StoredEntity {
	slug: string;
	owner: string;
	title: string;
	speaker: string;
	description: string;
	state: EventState;
	createdAt?: string;
}
