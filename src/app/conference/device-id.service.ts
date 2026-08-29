import { Injectable, signal } from '@angular/core';

const DEVICE_ID_KEY = 'conference-device-id';
const VISITOR_NAME_KEY = 'conference-visitor-name';

/**
 * Anonymous visitor identity for the Conference domain: a random per-device
 * id (drives all like/react/answer dedupe — never the name, since two
 * visitors can share a name) plus an optional display name captured the
 * first time a visitor interacts, both persisted in `localStorage`.
 */
@Injectable({ providedIn: 'root' })
export class DeviceIdService {
	readonly deviceId = this._resolveDeviceId();
	readonly visitorName = signal(this._readVisitorName());

	setVisitorName(name: string): void {
		const trimmed = name.trim();
		this.visitorName.set(trimmed);

		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(VISITOR_NAME_KEY, trimmed);
		}
	}

	private _resolveDeviceId(): string {
		if (typeof localStorage === 'undefined') {
			return this._createId();
		}

		const stored = localStorage.getItem(DEVICE_ID_KEY);

		if (stored) {
			return stored;
		}

		const created = this._createId();

		localStorage.setItem(DEVICE_ID_KEY, created);

		return created;
	}

	private _readVisitorName(): string {
		if (typeof localStorage === 'undefined') {
			return '';
		}

		return localStorage.getItem(VISITOR_NAME_KEY) ?? '';
	}

	private _createId(): string {
		return typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
			? crypto.randomUUID()
			: `${Date.now()}-${Math.random().toString(16).slice(2)}`;
	}
}
