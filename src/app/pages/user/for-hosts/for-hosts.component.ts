import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-hosts',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-hosts.component.html',
	styleUrl: './for-hosts.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForHostsPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);
	readonly faq = [
		{
			question: 'How many events can I create?',
			answer: 'There\'s no limit on the number of events — create as many as your audience needs.',
		},
		{
			question: 'Can I moderate questions before they\'re published?',
			answer: 'Yes, you can review attendees\' questions and publish only the ones you consider appropriate.',
		},
		{
			question: 'Are poll results saved after the event ends?',
			answer: 'Yes, all poll and quiz results are saved and remain available for analysis after the event.',
		},
	];
}
