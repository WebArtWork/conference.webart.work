import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Conference } from './conference.interface';

/** Backend-backed document store for the `conference` collection. */
@Injectable({ providedIn: 'root' })
class ConferenceCrudService extends CrudService<Conference> {
	constructor() {
		super({ name: 'conference' });
	}
}

const LEGACY_STORAGE_KEY = 'conference:conferences';
const MIGRATION_FLAG_KEY = 'conference:conferences:migrated-to-backend';

/**
 * Conferences used to live only in `localStorage`, so each browser/device had
 * its own copy. This now persists them to the backend (via `CrudService`)
 * while keeping the same synchronous-looking API the rest of the app relies
 * on (`items`, `all()`, `byId()`, `create()`, `update()`, `remove()`).
 */
@Injectable({ providedIn: 'root' })
export class ConferenceService {
	private readonly _crud = inject(ConferenceCrudService);

	readonly items = this._crud.documents;

	constructor() {
		this._crud.get().subscribe(() => this._migrateLegacyLocalData());
	}

	all(): Conference[] {
		return this._crud.documents();
	}

	byId(id: string): Conference | undefined {
		return this._crud.documents().find((item) => item._id === id);
	}

	create(entity: Omit<Conference, '_id'> & Partial<Pick<Conference, '_id'>>): Conference {
		const created = { ...entity, _id: entity._id || this._createId() } as Conference;
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
		if (!current) {
			return;
		}
		this._crud.delete(current).subscribe();
	}

	/** One-time import of conferences created before the backend existed, so they aren't lost. */
	private _migrateLegacyLocalData(): void {
		if (typeof localStorage === 'undefined' || localStorage.getItem(MIGRATION_FLAG_KEY)) {
			return;
		}

		try {
			const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
			const legacyItems: Conference[] = raw ? JSON.parse(raw) : [];
			const existingIds = new Set(this._crud.documents().map((item) => item._id));

			for (const item of legacyItems) {
				if (!existingIds.has(item._id)) {
					this._crud.create(item).subscribe();
				}
			}
		} catch {
			// legacy data is best-effort; nothing to recover if it's malformed
		}

		localStorage.setItem(MIGRATION_FLAG_KEY, '1');
	}

	private _createId(): string {
		return typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
			? crypto.randomUUID()
			: `${Date.now()}-${Math.random().toString(16).slice(2)}`;
	}
}
