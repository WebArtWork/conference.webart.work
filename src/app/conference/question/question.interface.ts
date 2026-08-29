import { CrudDocument } from '@wawjs/ngx-crud';

/** A visitor-submitted audience question. Public to everyone in the event. */
export interface Question extends CrudDocument<Question> {
	eventId: string;
	text: string;
	likes: number;
	createdAt?: string;
}
