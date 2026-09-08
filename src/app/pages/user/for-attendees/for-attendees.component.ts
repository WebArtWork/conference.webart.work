import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-attendees',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-attendees.component.html',
	styleUrl: './for-attendees.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForAttendeesPageComponent {
	readonly translateService = inject(TranslateService);
	readonly showForm = signal(false);
	readonly faq = [
		{
			question: 'Do I need to register to join an event?',
			answer:
				'For most events, a link from the organizer is enough — registration is only needed if a specific event requires it.',
		},
		{
			question: 'Do speakers see my questions right away?',
			answer:
				'Yes, questions appear in the list instantly, and the organizer or speaker can answer or raise it live.',
		},
		{
			question: 'Do poll results stay available after the event?',
			answer: 'Yes, poll and quiz results are saved and remain available to view after the event ends.',
		},
	];
}
