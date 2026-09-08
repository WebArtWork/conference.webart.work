import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateDirective } from '@wawjs/ngx-translate';
import { NEW_EVENT, generateEventSlug } from '../../../conference/event/event.const';
import { Event, EventState } from '../../../conference/event/event.interface';
import { EventService } from '../../../conference/event/event.service';

/** `/events` — the authenticated owner's own events, grouped by state. */
@Component({
	selector: 'app-events',
	imports: [ButtonModule, CardModule, TagModule, TranslateDirective],
	templateUrl: './events.component.html',
	styleUrl: './events.component.scss',
})
export class EventsComponent {
	private readonly _router = inject(Router);
	private readonly _userService = inject(UserService);
	private readonly _eventService = inject(EventService);

	readonly events = computed(() => {
		const ownerId = this._userService.user()?._id;
		return ownerId ? this._eventService.byOwner(ownerId) : [];
	});

	readonly draftEvents = computed(() => this._byState('draft'));
	readonly liveEvents = computed(() => this._byState('live'));
	readonly endedEvents = computed(() => this._byState('ended'));

	createEvent(): void {
		const owner = this._userService.user();
		const eventDoc = this._eventService.create({
			...NEW_EVENT,
			slug: generateEventSlug(),
			owner: owner?._id ?? '',
			speaker: owner?.name ?? '',
			createdAt: new Date().toISOString(),
		});
		this._router.navigate(['/event', eventDoc.slug, 'manage']);
	}

	openManage(slug: string): void {
		this._router.navigate(['/event', slug, 'manage']);
	}

	deleteEvent(event: Event): void {
		if (!confirm(`Видалити подію "${event.title || 'Untitled event'}"?`)) {
			return;
		}
		this._eventService.remove(event._id);
	}

	private _byState(state: EventState) {
		return this.events().filter((event) => event.state === state);
	}
}
