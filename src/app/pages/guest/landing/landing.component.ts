import { Component, ElementRef, OnDestroy, afterNextRender, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { SpiderComponent } from '@wawjs/ngx-bos';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../company/company.data';

/**
 * Public marketing landing page: `/`. No account required — reachable by
 * anyone, including unauthenticated visitors. Links out to sign-in (owners)
 * and to a live demo event (anyone).
 */
@Component({
	selector: 'app-landing',
	imports: [ButtonModule, CardModule, RouterLink, SpiderComponent, TranslateDirective],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnDestroy {
	private readonly _router = inject(Router);
	private readonly _elementRef: ElementRef<HTMLElement> = inject(ElementRef);

	private _scrollContainer: HTMLElement | Window = window;
	private readonly _onScroll = (): void => this._queueRevealUpdate();
	private readonly _onResize = (): void => this._queueRevealUpdate();
	private _revealEntries: { el: HTMLElement; delay: number }[] = [];
	private _revealFrame: number | null = null;

	readonly company = companyProfile;
	readonly year = new Date().getFullYear();

	readonly heroTitleOpacity = signal(0);
	readonly heroTitleOffset = signal(60);

	constructor() {
		afterNextRender(() => {
			this._scrollContainer = this._findScrollContainer(this._elementRef.nativeElement) ?? window;
			this._scrollContainer.addEventListener('scroll', this._onScroll, { passive: true });
			window.addEventListener('resize', this._onResize, { passive: true });

			this._revealEntries = [];
			this._elementRef.nativeElement.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
				this._revealEntries.push({ el, delay: 0 });
			});
			this._elementRef.nativeElement.querySelectorAll<HTMLElement>('.reveal-stagger').forEach((group) => {
				Array.from(group.children).forEach((child, index) => {
					this._revealEntries.push({ el: child as HTMLElement, delay: index * 40 });
				});
			});

			requestAnimationFrame(() => requestAnimationFrame(() => this._updateAll()));
		});
	}

	ngOnDestroy(): void {
		this._scrollContainer.removeEventListener('scroll', this._onScroll);
		window.removeEventListener('resize', this._onResize);
		if (this._revealFrame !== null) {
			cancelAnimationFrame(this._revealFrame);
		}
	}

	openDemoEvent(): void {
		this._router.navigate(['/event', 'test-1', 'manage'], { fragment: 'questions' });
	}

	openDemoEventAsAttendee(): void {
		this._router.navigate(['/event', 'test-1']);
	}

	private _updateHeroOffset(): void {
		const scrollY =
			this._scrollContainer === window ? window.scrollY : (this._scrollContainer as HTMLElement).scrollTop;
		const fadeDistance = window.innerHeight * 0.6;
		this.heroTitleOpacity.set(Math.max(0, 1 - scrollY / fadeDistance));
		this.heroTitleOffset.set(-scrollY * 0.4);
	}

	/** Coalesces scroll/resize bursts into one measurement + paint per frame. */
	private _queueRevealUpdate(): void {
		this._updateHeroOffset();
		if (this._revealFrame !== null) {
			return;
		}
		this._revealFrame = requestAnimationFrame(() => {
			this._revealFrame = null;
			this._updateReveals();
		});
	}

	private _updateAll(): void {
		this._updateHeroOffset();
		this._updateReveals();
	}

	/**
	 * Moves every `.reveal`/`.reveal-stagger` element continuously as it
	 * scrolls through the lower half of the viewport, the same fade+rise
	 * treatment the hero title gets from `heroTitleOpacity`/`heroTitleOffset`
	 * — rather than a one-shot "appear once and stay" trigger.
	 */
	private _updateReveals(): void {
		const viewportHeight = window.innerHeight;
		const start = viewportHeight * 0.92;
		const end = viewportHeight * 0.5;

		for (const { el, delay } of this._revealEntries) {
			const top = el.getBoundingClientRect().top - delay * 0.6;
			const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
			el.style.opacity = String(progress);
			el.style.transform = `translateY(${(1 - progress) * 28}px)`;
		}
	}

	private _findScrollContainer(el: HTMLElement | null): HTMLElement | null {
		let node = el?.parentElement ?? null;
		while (node) {
			const { overflowY } = getComputedStyle(node);
			if (overflowY === 'auto' || overflowY === 'scroll') return node;
			node = node.parentElement;
		}
		return null;
	}
}
