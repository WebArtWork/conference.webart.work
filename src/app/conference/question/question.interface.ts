import { StoredEntity } from '../local-store';

/** A visitor-submitted audience question. Public to everyone in the event. */
export interface Question extends StoredEntity {
	eventId: string;
	text: string;
	authorName: string;
	likes: number;
	likedBy: string[];
	createdAt?: string;
}
