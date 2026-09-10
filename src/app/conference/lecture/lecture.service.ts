import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Lecture } from './lecture.interface';

/** Backend-backed document store for the `lecture` collection. */
@Injectable({ providedIn: 'root' })
class LectureCrudService extends CrudService<Lecture> {
	constructor() {
		super({ name: 'lecture' });
	}
}

const LEGACY_STORAGE_KEY = 'conference:lectures';
const MIGRATION_FLAG_KEY = 'conference:lectures:migrated-to-backend';

/**
 * Lectures used to live only in `localStorage`, so each browser/device had
 * its own copy. This now persists them to the backend (via `CrudService`)
 * while keeping the same synchronous-looking API the rest of the app relies
 * on (`items`, `all()`, `byId()`, `create()`, `update()`, `remove()`).
 */
@Injectable({ providedIn: 'root' })
export class LectureService {
	private readonly _crud = inject(LectureCrudService);

	readonly items = this._crud.documents;

	constructor() {
		this._crud.get().subscribe(() => this._migrateLegacyLocalData());
	}

	all(): Lecture[] {
		return this._crud.documents();
	}

	byId(id: string): Lecture | undefined {
		return this._crud.documents().find((item) => item._id === id);
	}

	create(entity: Omit<Lecture, '_id'> & Partial<Pick<Lecture, '_id'>>): Lecture {
		const created = { ...entity, _id: entity._id || this._createId() } as Lecture;
		this._crud.create(created).subscribe();
		return created;
	}

	update(id: string, patch: Partial<Lecture>): Lecture | undefined {
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

	/** One-time import of lectures created before the backend existed, so they aren't lost. */
	private _migrateLegacyLocalData(): void {
		if (typeof localStorage === 'undefined' || localStorage.getItem(MIGRATION_FLAG_KEY)) {
			return;
		}

		try {
			const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
			const legacyItems: Lecture[] = raw ? JSON.parse(raw) : [];
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
