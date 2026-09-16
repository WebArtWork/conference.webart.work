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
	private readonly _elementRef = inject(ElementRef<HTMLElement>);

	private _scrollContainer: HTMLElement | Window = window;
	private readonly _onScroll = (): void => this._updateHeroOffset();
	private _revealObserver?: IntersectionObserver;

	readonly company = companyProfile;
	readonly year = new Date().getFullYear();

	readonly heroTitleOpacity = signal(0);
	readonly heroTitleOffset = signal(60);

	constructor() {
		afterNextRender(() => {
			this._scrollContainer = this._findScrollContainer(this._elementRef.nativeElement) ?? window;
			this._scrollContainer.addEventListener('scroll', this._onScroll, { passive: true });
			requestAnimationFrame(() => requestAnimationFrame(() => this._updateHeroOffset()));

			this._revealObserver = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (!entry.isIntersecting) continue;
						entry.target.classList.add('is-visible');
						this._revealObserver?.unobserve(entry.target);
					}
				},
				{ threshold: 0.15 },
			);
			this._elementRef.nativeElement
				.querySelectorAll('.reveal, .reveal-stagger')
				.forEach((el: Element) => this._revealObserver?.observe(el));
		});
	}

	ngOnDestroy(): void {
		this._scrollContainer.removeEventListener('scroll', this._onScroll);
		this._revealObserver?.disconnect();
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
