import { Injectable, inject } from '@angular/core';
import { SEED_POLL_ANSWERS, SEED_POLLS } from '../../../data/conference/seed';
import { LocalStoreService } from '../local-store';
import { DeviceIdService } from '../device-id.service';
import { Poll, PollAnswer, PollResult } from './poll.interface';

@Injectable({ providedIn: 'root' })
export class PollService extends LocalStoreService<Poll> {
	protected readonly storageKey = 'conference:polls';
	protected readonly seed = SEED_POLLS;

	byEvent(eventId: string): Poll[] {
		return this.all().filter((poll) => poll.eventId === eventId);
	}
}

@Injectable({ providedIn: 'root' })
export class PollAnswerService extends LocalStoreService<PollAnswer> {
	protected readonly storageKey = 'conference:poll-answers';
	protected readonly seed = SEED_POLL_ANSWERS;

	private readonly _deviceIdService = inject(DeviceIdService);

	/** Visitor write-only action: submits an answer while the poll is active. One per device. */
	answer(poll: Poll, optionIndex: number): void {
		const deviceId = this._deviceIdService.deviceId;
		if (this.all().some((entry) => entry.pollId === poll._id && entry.deviceId === deviceId)) {
			return;
		}

		this.create({ pollId: poll._id, optionIndex, deviceId });
	}

	hasAnswered(poll: Poll): boolean {
		const deviceId = this._deviceIdService.deviceId;
		return this.all().some((entry) => entry.pollId === poll._id && entry.deviceId === deviceId);
	}

	/** Owner-only: aggregate results, never sent to visitors. */
	results(poll: Poll): PollResult[] {
		return poll.options.map((_option, optionIndex) => ({
			optionIndex,
			votes: this.all().filter(
				(entry) => entry.pollId === poll._id && entry.optionIndex === optionIndex,
			).length,
		}));
	}
}
