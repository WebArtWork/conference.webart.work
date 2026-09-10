import { Injectable, inject } from '@angular/core';
import { SEED_LECTURES } from '../../../data/conference/seed';
import { EventService } from '../event/event.service';
import { LocalStoreService } from '../local-store';
import { Lecture } from './lecture.interface';

const MIGRATION_FLAG_KEY = 'conference:lectures:pretty-ids-migrated';
const HYBRID_RESTORE_FLAG_KEY = 'conference:lectures:hybrid-restore-migrated';
/** Title of lecture -1 in the placeholder seed that briefly overwrote real conf-kpnu-2026-2027 data client-side. */
const CORRUPTED_SEED_MARKER_TITLE = 'Штучний інтелект у продуктовій розробці';

@Injectable({ providedIn: 'root' })
export class LectureService extends LocalStoreService<Lecture> {
	private readonly _eventService = inject(EventService);

	constructor() {
		super('conference:lectures', SEED_LECTURES);
		this._migrateToPrettyIds();
		this._restoreHybridLecturesIfCorrupted();
	}

	/**
	 * One-time repair for browsers that already ran the broken auto-reseed
	 * logic and got their real conf-kpnu-2026-2027 lectures replaced by the
	 * 3-item placeholder seed. Only touches storage that matches that known
	 * placeholder signature, so it never overwrites genuine user data.
	 */
	private _restoreHybridLecturesIfCorrupted(): void {
		if (typeof localStorage === 'undefined' || localStorage.getItem(HYBRID_RESTORE_FLAG_KEY)) {
			return;
		}

		localStorage.setItem(HYBRID_RESTORE_FLAG_KEY, '1');

		const isCorrupted = this.items().some(
			(lecture) => lecture._id === 'conf-kpnu-2026-2027-1' && lecture.title === CORRUPTED_SEED_MARKER_TITLE,
		);
		if (!isCorrupted) {
			return;
		}

		for (const lecture of SEED_LECTURES) {
			if (this.byId(lecture._id)) {
				this.update(lecture._id, lecture);
			} else {
				this.create(lecture);
			}
		}
	}

	/** `<conferenceId>-<n>`, e.g. `conf-kpnu-2026-2027-1` — readable links instead of a random UUID. */
	protected override generateId(entity: Omit<Lecture, '_id'> & Partial<Pick<Lecture, '_id'>>): string {
		return entity.conferenceId ? this._nextPrettyId(entity.conferenceId) : super.generateId(entity);
	}

	private _nextPrettyId(conferenceId: string): string {
		const prefix = `${conferenceId}-`;
		const usedIndexes = this.items()
			.filter((item) => item._id.startsWith(prefix))
			.map((item) => Number(item._id.slice(prefix.length)))
			.filter((n) => Number.isInteger(n) && n > 0);
		const next = usedIndexes.length ? Math.max(...usedIndexes) + 1 : 1;
		return `${prefix}${next}`;
	}

	/** One-time cleanup: lectures created before pretty ids existed get a `<conferenceId>-<n>` id; any event built around one follows along. */
	private _migrateToPrettyIds(): void {
		if (typeof localStorage === 'undefined' || localStorage.getItem(MIGRATION_FLAG_KEY)) {
			return;
		}

		const toMigrate = this.items().filter(
			(lecture) => lecture.conferenceId && !lecture._id.startsWith(`${lecture.conferenceId}-`),
		);

		for (const lecture of toMigrate) {
			const oldId = lecture._id;
			const newId = this._nextPrettyId(lecture.conferenceId as string);
			this.update(oldId, { _id: newId });

			for (const event of this._eventService.all()) {
				if (event.lectureId === oldId) {
					this._eventService.update(event._id, { lectureId: newId });
				}
			}
		}

		localStorage.setItem(MIGRATION_FLAG_KEY, '1');
	}
}
