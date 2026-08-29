import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { HttpService } from '@wawjs/ngx-http';
import { Observable } from 'rxjs';
import { DeviceIdService } from '../device-id.service';
import { Chapter, ChapterReactionSummary } from './chapter.interface';

@Injectable({ providedIn: 'root' })
export class ChapterService extends CrudService<Chapter> {
	private readonly _httpService = inject(HttpService);
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super({ name: 'chapter' });
	}

	byEvent(eventId: string): Observable<Chapter[]> {
		return this.get({ query: `eventId=${eventId}` });
	}

	/**
	 * Owner-only: marks a chapter as the currently active one.
	 * Assumption: the backend deactivates any other active chapter for the
	 * same event when this update is received; no explicit "deactivate all" call is made here.
	 */
	activate(chapter: Chapter): Observable<Chapter> {
		return this.update({ ...chapter, isActive: true });
	}

	/**
	 * Visitor write-only action: submits a reaction/rating for a chapter.
	 * No aggregate is requested or returned here — visitors never see totals.
	 * Custom (non-CRUD) action via `HttpService`, per `@wawjs/ngx-crud` guidance.
	 */
	react(chapterId: string, value: number): Observable<unknown> {
		return this._httpService.post('/api/chapter/react', {
			chapterId,
			value,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	/** Owner-only read of private reaction analytics for one chapter. */
	reactionSummary(chapterId: string): Observable<ChapterReactionSummary> {
		return this._httpService.get(
			`/api/chapter/${chapterId}/reactions`,
		) as Observable<ChapterReactionSummary>;
	}
}
