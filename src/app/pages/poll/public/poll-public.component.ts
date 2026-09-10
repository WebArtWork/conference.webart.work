import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MetaService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DialogModule } from '@wawjs/ngx-prime/dialog';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { withDomain } from '../../../conference/conference-domain';
import { DeviceIdService } from '../../../conference/device-id.service';
import { PollAnswerService, PollService } from '../../../conference/poll/poll.service';

/**
 * Public poll-taking page: `poll/:pollId?ids=<comma-separated poll ids>`.
 * Reached from a lecture's single "Take poll" button so a visitor answers
 * every active poll of that lecture, one question at a time, in a focused
 * flow instead of inline on the lecture page. `lecture` query param carries
 * the way back. `ids` (falling back to the path `:pollId` alone) drives the
 * question sequence; already-answered polls in it are skipped.
 */
@Component({
	selector: 'app-poll-public',
	imports: [
		ButtonModule,
		CardModule,
		DialogModule,
		InputTextModule,
		RadioButtonModule,
		FormsModule,
		RouterLink,
		TranslateDirective,
	],
	templateUrl: './poll-public.component.html',
	styleUrl: './poll-public.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PollPublicComponent {
	readonly translateService = inject(TranslateService);
	private readonly _pollService = inject(PollService);
	readonly pollAnswerService = inject(PollAnswerService);
	private readonly _metaService = inject(MetaService);
	private readonly _route = inject(ActivatedRoute);
	readonly deviceIdService = inject(DeviceIdService);

	readonly lectureId = this._route.snapshot.queryParamMap.get('lecture');

	private readonly _pollIds = this._resolvePollIds();
	readonly currentIndex = signal(0);
	readonly total = this._pollIds.length;

	readonly poll = computed(() => {
		const id = this._pollIds[this.currentIndex()];
		return id ? (this._pollService.byId(id) ?? null) : null;
	});
	readonly finished = computed(() => this.currentIndex() >= this._pollIds.length);
	readonly position = computed(() => this.currentIndex() + 1);

	readonly selectedOption = signal<number | null>(null);
	readonly showNamePrompt = signal(false);
	readonly nameDraft = signal('');
	private _pendingInteraction: (() => void) | null = null;

	constructor() {
		// Fallback load: the lecture page already preloads active polls before
		// linking here, but a visitor can also land on this URL directly.
		this._pollService.get({ query: withDomain() }).subscribe();

		effect(() => {
			const pollDoc = this.poll();
			this._metaService.applyMeta({ title: pollDoc ? pollDoc.question : this.translateService.translate('Poll')() });
		});

		// Skips polls already answered (from an earlier visit or a prior step
		// in this sequence) as soon as the data is known — handles both the
		// initial async load and each subsequent submit.
		effect(() => {
			const pollDoc = this.poll();
			if (pollDoc && this.pollAnswerService.hasAnswered(pollDoc)) {
				this.currentIndex.update((index) => index + 1);
			}
		});

		effect(() => {
			this.nameDraft.set(this.deviceIdService.visitorName());
		});
	}

	submitAnswer(): void {
		this._withVisitorName(() => {
			const pollDoc = this.poll();
			const optionIndex = this.selectedOption();
			if (!pollDoc || optionIndex === null) {
				return;
			}

			this.pollAnswerService.answer(pollDoc, optionIndex);
			this.selectedOption.set(null);
			this.currentIndex.update((index) => index + 1);
		});
	}

	confirmName(): void {
		this.deviceIdService.setVisitorName(this.nameDraft().trim());
		this.showNamePrompt.set(false);

		const pending = this._pendingInteraction;
		this._pendingInteraction = null;
		pending?.();
	}

	private _withVisitorName(action: () => void): void {
		if (this.deviceIdService.visitorName()) {
			action();
			return;
		}

		this._pendingInteraction = action;
		this.showNamePrompt.set(true);
	}

	private _resolvePollIds(): string[] {
		const raw = this._route.snapshot.queryParamMap.get('ids');
		if (raw) {
			return raw
				.split(',')
				.map((id) => id.trim())
				.filter((id) => id.length > 0);
		}

		const pathId = this._route.snapshot.paramMap.get('pollId');
		return pathId ? [pathId] : [];
	}
}
