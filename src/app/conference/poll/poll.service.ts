import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { DeviceIdService } from '../device-id.service';
import { Poll, PollAnswer, PollResult } from './poll.interface';

/** Owner-managed polls, backed by the real backend so they sync across devices. */
@Injectable({ providedIn: 'root' })
export class PollService extends CrudService<Poll> {
	constructor() {
		super({ name: 'companyconferencepoll' });
	}

	/** Loads (or reloads) every poll for one event — owner sees all, visitors only the active ones. */
	loadEvent(eventId: string): void {
		this.get({ query: `eventId=${encodeURIComponent(eventId)}` }).subscribe();
	}

	byEvent(eventId: string): Poll[] {
		return this.documents().filter((poll) => poll.eventId === eventId);
	}

	byId(id: string): Poll | undefined {
		return this.documents().find((poll) => poll._id === id);
	}
}

/**
 * Visitor answers, backed by the shared `companyconferenceanswer` resource
 * (also used by quizzes, distinguished by `kind`). Visitors submit
 * anonymously; the server dedupes per device and never lets a visitor list
 * other people's answers — only the owner can fetch the full set to tally
 * results.
 */
@Injectable({ providedIn: 'root' })
export class PollAnswerService extends CrudService<PollAnswer> {
	private readonly _deviceIdService = inject(DeviceIdService);

	constructor() {
		super({ name: 'companyconferenceanswer' });
	}

	/** Owner-only: loads every answer for this company, to tally results. */
	loadAll(): void {
		this.get({}).subscribe();
	}

	all(): PollAnswer[] {
		return this.documents().filter((entry) => entry.kind === 'poll');
	}

	/** Visitor write-only action: submits an answer while the poll is active. One per device. */
	answer(poll: Poll, optionIndex: number): void {
		if (this.hasAnswered(poll)) {
			return;
		}

		this.create({
			_id: '',
			kind: 'poll',
			pollId: poll._id,
			optionIndex,
			deviceId: this._deviceIdService.deviceId,
		});
	}

	hasAnswered(poll: Poll): boolean {
		const deviceId = this._deviceIdService.deviceId;
		return this.documents().some((entry) => entry.kind === 'poll' && entry.pollId === poll._id && entry.deviceId === deviceId);
	}

	/** Owner-only: aggregate results, never sent to visitors. */
	results(poll: Poll): PollResult[] {
		return poll.options.map((_option, optionIndex) => ({
			optionIndex,
			votes: this.documents().filter(
				(entry) => entry.kind === 'poll' && entry.pollId === poll._id && entry.optionIndex === optionIndex,
			).length,
		}));
	}
}
