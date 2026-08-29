import { CrudDocument } from '@wawjs/ngx-crud';

/** A section/topic of the talk (e.g. Introduction, Demo, Q&A). */
export interface Chapter extends CrudDocument<Chapter> {
	eventId: string;
	title: string;
	order: number;
	isActive: boolean;
}

/**
 * A single visitor reaction/rating for a chapter.
 * Private analytics: owner-only, never exposed on the visitor-facing event page.
 */
export interface ChapterReaction extends CrudDocument<ChapterReaction> {
	chapterId: string;
	value: number;
	deviceId: string;
	createdAt?: string;
}

/** Owner-only aggregate, returned by the reactions endpoint instead of raw reactions. */
export interface ChapterReactionSummary {
	chapterId: string;
	count: number;
	average: number;
}
