import { CrudDocument } from '@wawjs/ngx-crud';

export type EventState = 'draft' | 'live' | 'ended';

/** The main container of the app: an owner-managed conference/talk/event. */
export interface Event extends CrudDocument<Event> {
	slug: string;
	owner: string;
	title: string;
	description: string;
	state: EventState;
	createdAt?: string;
	updatedAt?: string;
}
