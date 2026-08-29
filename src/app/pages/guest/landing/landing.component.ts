import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../company/company.data';

/**
 * Public marketing landing page: `/`. No account required — reachable by
 * anyone, including unauthenticated visitors. Links out to sign-in (owners)
 * and to a live demo event (anyone).
 */
@Component({
	selector: 'app-landing',
	imports: [ButtonModule, CardModule, RouterLink, TranslateDirective],
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
})
export class LandingComponent {
	private readonly _router = inject(Router);

	readonly company = companyProfile;

	openDemoEvent(): void {
		this._router.navigate(['/event', '1042-8837']);
	}
}
