import { Injectable, inject } from '@angular/core';
import { SEED_CHAPTER_REACTIONS, SEED_CHAPTERS } from '../../../data/conference/seed';
import { LocalStoreService } from '../local-store';
import { DeviceIdService } from '../device-id.service';
import { Chapter, ChapterReaction, ChapterReactionSummary } from './chapter.interface';

@Injectable({ providedIn: 'root' })
export class ChapterService extends LocalStoreService<Chapter> {
	protected readonly storageKey = 'conference:chapters';
	protected readonly seed = SEED_CHAPTERS;

	byEvent(eventId: string): Chapter[] {
		return this.all()
			.filter((chapter) => chapter.eventId === eventId)
			.sort((a, b) => a.order - b.order);
	}

	/** Owner-only: marks a chapter as the currently active one, deactivating any sibling. */
	activate(chapter: Chapter): void {
		for (const sibling of this.all()) {
			if (sibling._id !== chapter._id && sibling.eventId === chapter.eventId && sibling.isActive) {
				this.update(sibling._id, { isActive: false });
			}
		}

		this.update(chapter._id, { isActive: true });
	}
}

@Injectable({ providedIn: 'root' })
export class ChapterReactionService extends LocalStoreService<ChapterReaction> {
	protected readonly storageKey = 'conference:chapter-reactions';
	protected readonly seed = SEED_CHAPTER_REACTIONS;

	private readonly _deviceIdService = inject(DeviceIdService);

	/** Visitor write-only action: submits a reaction/rating for a chapter. */
	react(chapterId: string, value: number): void {
		this.create({
			chapterId,
			value,
			deviceId: this._deviceIdService.deviceId,
			createdAt: new Date().toISOString(),
		});
	}

	/** Owner-only aggregate read; visitors never see totals. */
	summary(chapterId: string): ChapterReactionSummary {
		const reactions = this.all().filter((reaction) => reaction.chapterId === chapterId);
		const count = reactions.length;
		const average = count
			? reactions.reduce((sum, reaction) => sum + reaction.value, 0) / count
			: 0;

		return { chapterId, count, average };
	}
}
