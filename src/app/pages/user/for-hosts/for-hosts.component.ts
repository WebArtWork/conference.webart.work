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
			question: 'Скільки подій я можу створити?',
			answer: 'Кількість подій не обмежена — створюйте стільки подій, скільки потрібно для вашої аудиторії.',
		},
		{
			question: 'Чи можна модерувати запитання перед публікацією?',
			answer: 'Так, ви можете переглядати запитання учасників і публікувати лише ті, що вважаєте доречними.',
		},
		{
			question: 'Чи зберігаються результати опитувань після завершення події?',
			answer: 'Так, усі результати опитувань і квізів зберігаються і залишаються доступними для аналізу після події.',
		},
	];
}
