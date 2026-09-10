import { Injectable, inject } from '@angular/core';
import { CrudOptions, CrudService } from '@wawjs/ngx-crud';
import { CONFERENCE_DOMAIN, withDomain } from './conference-domain';
import { Conference } from './conference.interface';
import { generateLocalId } from './local-store';

@Injectable({ providedIn: 'root' })
class ConferenceCrud extends CrudService<Conference> {
	constructor() {
		super({ name: 'companyconference' });
	}

	protected override beforeCreate(doc: Conference, options: CrudOptions<Conference>) {
		return super.beforeCreate({ ...doc, domain: CONFERENCE_DOMAIN } as Conference, options);
	}
}

/**
 * Conferences, backed by the real backend so the catalogue is shared across
 * every visitor and every one of the owner's devices. Keeps the exact same
 * public shape the old `localStorage`-backed store had, so nothing else in
 * the app had to change.
 */
@Injectable({ providedIn: 'root' })
export class ConferenceService {
	private readonly _crud = inject(ConferenceCrud);

	readonly items = this._crud.documents;

	constructor() {
		this._crud.get({ query: withDomain() }).subscribe();
	}

	all(): Conference[] {
		return this._crud.documents();
	}

	byId(id: string): Conference | undefined {
		return this.all().find((conference) => conference._id === id);
	}

	create(entity: Omit<Conference, '_id'> & Partial<Pick<Conference, '_id'>>): Conference {
		const created: Conference = { ...entity, _id: entity._id || generateLocalId() } as Conference;
		this._crud.create(created).subscribe();
		return created;
	}

	update(id: string, patch: Partial<Conference>): Conference | undefined {
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
