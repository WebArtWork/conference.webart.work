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
			question: 'Чи потрібна реєстрація, щоб долучитися до події?',
			answer: 'Для більшості подій достатньо посилання від організатора — реєстрація потрібна лише якщо цього вимагає конкретна подія.',
		},
		{
			question: 'Чи бачать спікери мої запитання одразу?',
			answer: 'Так, запитання з\'являються у списку миттєво, а організатор або спікер може відповісти або підняти його наживо.',
		},
		{
			question: 'Чи залишаються результати опитувань доступними після події?',
			answer: 'Так, результати опитувань і квізів зберігаються і залишаються доступними для перегляду після завершення події.',
		},
	];
}
