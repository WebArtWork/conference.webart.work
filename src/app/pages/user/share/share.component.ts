import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { TranslateService } from '@wawjs/ngx-translate';
import { QrCodeComponent } from '../../../shared/qr-code/qr-code.component';
import { companyProfile } from '../../../company/company.data';
import { ConferenceService } from '../../../conference/conference.service';

export type ShareKind = 'app' | 'profile' | 'conference';

@Component({
	selector: 'app-share',
	imports: [ButtonModule, QrCodeComponent, RouterLink],
	templateUrl: './share.component.html',
	styleUrl: './share.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharePageComponent {
	private readonly _messageService = inject(MessageService);
	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _conferenceService = inject(ConferenceService);
	private readonly _isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	readonly translateService = inject(TranslateService);

	/**
	 * The events/lectures domain has no backend — every event only exists in the
	 * `localStorage` of the browser/origin that created it. Building the link from
	 * the current origin (instead of the canonical production URL) means it always
	 * points somewhere that actually has this event, whether that's a local dev
	 * server or production.
	 */
	private readonly _origin = this._isBrowser ? window.location.origin : companyProfile.siteUrl;

	readonly kind = toSignal(
		this._activatedRoute.data.pipe(map((data) => (data['shareKind'] as ShareKind) ?? 'app')),
		{
			initialValue: (this._activatedRoute.snapshot.data['shareKind'] as ShareKind) ?? 'app',
		},
	);

	/** `:conferenceId` is declared on the parent route (`/conferences/:conferenceId/share`), not this one. */
	readonly conferenceId = toSignal(
		(this._activatedRoute.parent?.paramMap ?? this._activatedRoute.paramMap).pipe(
			map((params) => params.get('conferenceId')),
		),
		{ initialValue: null },
	);

	/** Falls back to the first conference when this share page isn't scoped to one (e.g. the sidebar's generic entry). */
	private readonly _defaultConferenceId = computed(() => this._conferenceService.items()[0]?._id ?? '');
	private readonly _resolvedConferenceId = computed(() => this.conferenceId() ?? this._defaultConferenceId());

	readonly conference = computed(() => this._conferenceService.byId(this._resolvedConferenceId()));

	readonly shareUrl = computed(() => {
		if (this.kind() === 'profile') {
			return `${this._origin}/profile`;
		}

		return `${this._origin}/conf#${this._resolvedConferenceId()}`;
	});

	readonly title = computed(() => {
		if (this.kind() === 'profile') {
			return this.translateService.translate('Share profile')();
		}

		return this.translateService.translate('Share conference')();
	});

	readonly description = computed(() => {
		if (this.kind() === 'profile') {
			return this.translateService.translate('Let people scan this code to open my Conference profile.')();
		}

		const title = this.conference()?.title;
		return title
			? this.translateService.interpolate(
					this.translateService.translate('Scan the code to view the schedule for «{{title}}».')(),
					{ title },
				)
			: this.translateService.translate('Scan the code to view the conference schedule.')();
	});

	copyLink(): void {
		navigator.clipboard
			?.writeText(this.shareUrl())
			.then(() => {
				this._messageService.add({
					severity: 'success',
					detail: this.translateService.translate('Link copied')(),
				});
			})
			.catch(() => {
				this._messageService.add({
					severity: 'error',
					detail: this.translateService.translate('Failed to copy the link')(),
				});
			});
	}
}
