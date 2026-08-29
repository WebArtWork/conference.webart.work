import { Injectable } from '@angular/core';
import { SEED_EVENTS } from '../../../data/conference/seed';
import { LocalStoreService } from '../local-store';
import { Event } from './event.interface';

@Injectable({ providedIn: 'root' })
export class EventService extends LocalStoreService<Event> {
	constructor() {
		super('conference:events', SEED_EVENTS);
	}

	/** Resolves an event by its public slug (`1234-5678`). */
	bySlug(slug: string): Event | undefined {
		return this.all().find((event) => event.slug === slug);
	}

	byOwner(ownerId: string): Event[] {
		return this.all().filter((event) => event.owner === ownerId);
	}
}
