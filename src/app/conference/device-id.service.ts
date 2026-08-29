import { Injectable } from '@angular/core';

const STORAGE_KEY = 'conference-device-id';

/**
 * Generates and persists a random per-device identifier in `localStorage` so
 * anonymous visitors (no accounts) can be deduped for likes/reactions/answers
 * without any authentication.
 */
@Injectable({ providedIn: 'root' })
export class DeviceIdService {
	readonly deviceId = this._resolveDeviceId();

	private _resolveDeviceId(): string {
		if (typeof localStorage === 'undefined') {
			return this._createId();
		}

		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			return stored;
		}

		const created = this._createId();

		localStorage.setItem(STORAGE_KEY, created);

		return created;
	}

	private _createId(): string {
		return typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
			? crypto.randomUUID()
			: `${Date.now()}-${Math.random().toString(16).slice(2)}`;
	}
}
