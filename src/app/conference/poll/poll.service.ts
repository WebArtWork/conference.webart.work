import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { HttpService } from '@wawjs/ngx-http';
import { Observable } from 'rxjs';
import { DeviceIdService } from '../device-id.service';
import { Poll, PollResult } from './poll.interface';

@Injectable({ providedIn: 'root' })
export class PollService extends CrudService<Poll> {
	private readonly _httpApi = inject(HttpService);
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super({ name: 'poll' });
	}

	byEvent(eventId: string): Observable<Poll[]> {
		return this.get({ query: `eventId=${eventId}` });
	}

	/**
	 * Visitor write-only action: submits an answer while the poll is active.
	 * The backend is expected to dedupe by device id (one answer per device).
	 */
	answer(poll: Poll, optionIndex: number): Observable<unknown> {
		return this._httpApi.post('/api/poll/answer', {
			pollId: poll._id,
			optionIndex,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	/** Owner-only: aggregate results, never sent to visitors. */
	results(poll: Poll): Observable<PollResult[]> {
		return this._httpApi.get(
			`/api/poll/${poll._id}/results`,
		) as Observable<PollResult[]>;
	}
}
