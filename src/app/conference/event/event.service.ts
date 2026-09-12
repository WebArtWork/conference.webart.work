import { Injectable, inject } from '@angular/core';
import { CrudOptions, CrudService } from '@wawjs/ngx-crud';
import { firstValueFrom } from 'rxjs';
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

	/**
	 * Confirms an event actually made it to the backend. `create()` echoes the
	 * local doc straight back (and the CRUD layer treats a rejected write the
	 * same as a successful one), so a caller that navigates away right after
	 * `create()` can't tell a real save from one the server silently refused
	 * (e.g. an expired session). This re-runs the exact same domain-scoped
	 * list request a page refresh does (see the constructor above) and checks
	 * whether the new id is actually in it — the most faithful possible
	 * "would this survive a refresh?" check.
	 */
	async confirmPersisted(id: string): Promise<boolean> {
		const docs = await firstValueFrom(this._crud.get({ query: withDomain() }));
		return docs.some((doc) => doc._id === id);
	}

	/**
	 * Like `create()`, but waits for the write and reports whether it actually
	 * landed — plus, if the backend rejected it, what it said (HTTP status and
	 * body), so a failure shows more than a generic "something went wrong".
	 */
	async createAndVerify(
		entity: Omit<Event, '_id'> & Partial<Pick<Event, '_id'>>,
	): Promise<{ event: Event; persisted: boolean; error: string | null }> {
		const created: Event = { ...entity, _id: entity._id || generateLocalId() } as Event;
		let error: string | null = null;

		try {
			await firstValueFrom(this._crud.create(created));
		} catch (err) {
			error = this._describeError(err);
		}

		const persisted = await this.confirmPersisted(created._id);
		return { event: created, persisted, error };
	}

	private _describeError(err: unknown): string {
		if (err && typeof err === 'object') {
			const httpErr = err as { status?: number; error?: unknown; message?: string };
			const detail = typeof httpErr.error === 'string' ? httpErr.error : httpErr.message;
			if (httpErr.status !== undefined) {
				return `HTTP ${httpErr.status}${detail ? `: ${detail}` : ''}`;
			}
		}
		return String(err);
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
