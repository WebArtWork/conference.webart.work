import { signal } from '@angular/core';

/** Minimal shape every static-store entity needs. */
export interface StoredEntity {
	_id: string;
}

/**
 * Generic client-only store: seeded from static fixture data, held in a
 * signal, mutated in memory, and persisted to `localStorage` so edits survive
 * a reload. There is no backend for the Conference domain — every entity
 * service (`EventService`, `ChapterService`, ...) extends this instead of
 * `@wawjs/ngx-crud`'s `CrudService`.
 */
export abstract class LocalStoreService<T extends StoredEntity> {
	protected abstract readonly storageKey: string;
	protected abstract readonly seed: readonly T[];

	private _items = signal<T[] | null>(null);

	readonly items = () => {
		if (this._items() === null) {
			this._items.set(this._load());
		}
		return this._items() as T[];
	};

	all(): T[] {
		return this.items();
	}

	byId(id: string): T | undefined {
		return this.items().find((item) => item._id === id);
	}

	create(entity: Omit<T, '_id'> & Partial<Pick<T, '_id'>>): T {
		const created = { ...entity, _id: entity._id || this._createId() } as T;
		this._save([...this.items(), created]);
		return created;
	}

	update(id: string, patch: Partial<T>): T | undefined {
		let updated: T | undefined;
		this._save(
			this.items().map((item) => {
				if (item._id !== id) {
					return item;
				}
				updated = { ...item, ...patch };
				return updated;
			}),
		);
		return updated;
	}

	remove(id: string): void {
		this._save(this.items().filter((item) => item._id !== id));
	}

	private _load(): T[] {
		if (typeof localStorage === 'undefined') {
			return [...this.seed];
		}

		try {
			const raw = localStorage.getItem(this.storageKey);
			return raw ? (JSON.parse(raw) as T[]) : [...this.seed];
		} catch {
			return [...this.seed];
		}
	}

	private _save(items: T[]): void {
		this._items.set(items);

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(this.storageKey, JSON.stringify(items));
		}
	}

	private _createId(): string {
		return typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
			? crypto.randomUUID()
			: `${Date.now()}-${Math.random().toString(16).slice(2)}`;
	}
}
