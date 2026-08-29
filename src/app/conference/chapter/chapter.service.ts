import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { HttpService } from '@wawjs/ngx-http';
import { Observable } from 'rxjs';
import { DeviceIdService } from '../device-id.service';
import { Chapter, ChapterReactionSummary } from './chapter.interface';

@Injectable({ providedIn: 'root' })
export class ChapterService extends CrudService<Chapter> {
	private readonly _httpApi = inject(HttpService);
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super({ name: 'chapter' });
	}

	byEvent(eventId: string): Observable<Chapter[]> {
		return this.get({ query: `eventId=${eventId}` });
	}

	/**
	 * Owner-only: marks a chapter as the currently active one.
	 * `@wawjs/ngx-crud` has no server-side "deactivate siblings" guarantee mechanism, so this
	 * also flips any other locally-known active chapter for the same event to inactive via the
	 * `documents` signal, purely so the UI never shows two "active" chapters at once while the
	 * request is in flight. The server remains the source of truth: it is expected to deactivate
	 * every other chapter for `chapter.eventId` when it receives this update, and the next `get()`
	 * refresh reconciles local state with whatever the server actually persisted.
	 */
	activate(chapter: Chapter): Observable<Chapter> {
		for (const sibling of this.documents()) {
			if (sibling._id !== chapter._id && sibling.eventId === chapter.eventId && sibling.isActive) {
				this.getSignal(sibling).update((doc) => ({ ...doc, isActive: false }));
			}
		}

		return this.update({ ...chapter, isActive: true });
	}

	/**
	 * Visitor write-only action: submits a reaction/rating for a chapter.
	 * No aggregate is requested or returned here — visitors never see totals.
	 * Custom (non-CRUD) action via `HttpService`, following the `/api/{name}/{action}` convention
	 * already used by this app (see `sign.component.ts`'s `/api/user/login`, `/api/user/status`, etc.).
	 */
	react(chapterId: string, value: number): Observable<unknown> {
		return this._httpApi.post('/api/chapter/react', {
			chapterId,
			value,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	/** Owner-only read of private reaction analytics for one chapter. */
	reactionSummary(chapterId: string): Observable<ChapterReactionSummary> {
		return this._httpApi.get(
			`/api/chapter/${chapterId}/reactions`,
		) as Observable<ChapterReactionSummary>;
	}
}
