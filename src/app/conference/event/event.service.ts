import { Injectable, inject } from '@angular/core';
import { CrudOptions, CrudService } from '@wawjs/ngx-crud';
import { CONFERENCE_DOMAIN, withDomain } from '../conference-domain';
import { generateLocalId } from '../local-store';
import { Event } from './event.interface';

@Injectable({ providedIn: 'root' })
class EventCrud extends CrudService<Event> {
	constructor() {
		super({ name: 'companyconferenceevent' });
	}

	protected override beforeCreate(doc: Event, options: CrudOptions<Event>) {
		return super.beforeCreate({ ...doc, domain: CONFERENCE_DOMAIN } as Event, options);
	}
}

/**
 * Events, backed by the real backend so an owner's event setup and its
 * public join link work from any device. `owner` is authoritative
 * server-side (set from the session on create, checked on every
 * update/delete) — the client never needs to prove it.
 */
@Injectable({ providedIn: 'root' })
export class EventService {
	private readonly _crud = inject(EventCrud);

	readonly items = this._crud.documents;

	constructor() {
		this._crud.get({ query: withDomain() }).subscribe();
	}

	all(): Event[] {
		return this._crud.documents();
	}

	byId(id: string): Event | undefined {
		return this.all().find((event) => event._id === id);
	}

	/** Resolves an event by its public slug (`1234-5678`). */
	bySlug(slug: string): Event | undefined {
		return this.all().find((event) => event.slug === slug);
	}

	byOwner(ownerId: string): Event[] {
		return this.all().filter((event) => event.owner === ownerId);
	}

	create(entity: Omit<Event, '_id'> & Partial<Pick<Event, '_id'>>): Event {
		const created: Event = { ...entity, _id: entity._id || generateLocalId() } as Event;
		this._crud.create(created).subscribe();
		return created;
	}

	update(id: string, patch: Partial<Event>): Event | undefined {
		const current = this.byId(id);
		if (!current) {
			return undefined;
		}

		const updated = { ...current, ...patch };
		this._crud.update(updated).subscribe();
		return updated;
	}

	remove(id: string): void {
		const current = this.byId(id);
		if (current) {
			this._crud.delete(current).subscribe();
		}
	}
}
