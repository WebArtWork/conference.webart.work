import { StoredEntity } from '../local-store';

/** A section/topic of the talk (e.g. Introduction, Demo, Q&A). */
export interface Chapter extends StoredEntity {
	eventId: string;
	title: string;
	order: number;
	isActive: boolean;
}

/**
 * A single visitor reaction/rating for a chapter.
 * Private analytics: owner-only, never exposed on the visitor-facing event page.
 */
export interface ChapterReaction extends StoredEntity {
	chapterId: string;
	value: number;
	deviceId: string;
	createdAt?: string;
}

/** Owner-only aggregate, derived from raw reactions instead of exposing them directly. */
export interface ChapterReactionSummary {
	chapterId: string;
	count: number;
	average: number;
}
