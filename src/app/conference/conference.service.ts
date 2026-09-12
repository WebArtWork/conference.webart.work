import { Injectable, inject } from '@angular/core';
import { CrudOptions, CrudService } from '@wawjs/ngx-crud';
import { slugify } from '../shared/slugify';
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

	/** Readable id for public links, e.g. `conf-kpnu-2026-2027` -> `kpnu-2026-2027`; falls back to the title for older/legacy ids. */
	slugFor(conference: Conference): string {
		const { _id } = conference;
		return _id.startsWith('conf-') ? _id.slice('conf-'.length) : slugify(conference.title);
	}

	/**
	 * Resolves a `/conf#<fragment>` link back to a conference: tries the raw
	 * `_id` first (old links keep working), then the `conf-<slug>` form, then
	 * falls back to matching the title slug directly — so pre-existing
	 * conferences whose `_id` isn't slug-shaped still resolve a pretty link.
	 */
	byPublicId(fragment: string): Conference | undefined {
		if (!fragment) {
			return undefined;
		}

		return (
			this.byId(fragment) ??
			this.byId(`conf-${fragment}`) ??
			this.all().find((conference) => slugify(conference.title) === fragment)
		);
	}

	create(entity: Omit<Conference, '_id'> & Partial<Pick<Conference, '_id'>>): Conference {
		const created: Conference = { ...entity, _id: entity._id || this._generateId(entity.title) } as Conference;
		this._crud.create(created).subscribe();
		return created;
	}

	private _generateId(title: string): string {
		const slug = slugify(title);
		if (!slug) {
			return generateLocalId();
		}

		const existingIds = new Set(this.all().map((conference) => conference._id));
		const base = `conf-${slug}`;
		let candidate = base;
		let suffix = 2;
		while (existingIds.has(candidate)) {
			candidate = `${base}-${suffix++}`;
		}

		return candidate;
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
