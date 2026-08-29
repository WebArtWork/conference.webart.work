import {
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
import { NEW_USER, User, UserService } from '@wawjs/ngx-bos';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { FieldErrorComponent } from '../../../../shared/field-error/field-error.component';
import { clientSchema } from './client.schema';

@Component({
	selector: 'app-client',
	imports: [
		FormField,
		ButtonModule,
		InputTextModule,
		TextareaModule,
		FieldErrorComponent,
		TranslateDirective,
	],
	templateUrl: './client.component.html',
	styleUrl: './client.component.scss',
})
export class ClientComponent {
	private readonly _userService = inject(UserService);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	readonly clientModel = signal<User>(NEW_USER);

	readonly clientForm = form(this.clientModel, clientSchema);
	readonly isSubmitDisabled = computed(() => this.clientForm().invalid());
	wFormSubmit() {
		submit(this.clientForm, async (field) => {
			this._userService.create(field().value()).subscribe(() => {
				this._messageService.add({
					severity: 'success',
					detail: this.translateService.translate('Клієнта створено')(),
				});
			});

			this.clientModel.set(NEW_USER);

			return null;
		});
	}
}
