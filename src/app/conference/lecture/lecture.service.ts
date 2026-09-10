import { Injectable, inject } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { EventService } from '../event/event.service';
import { generateLocalId } from '../local-store';
import { Lecture } from './lecture.interface';

@Injectable({ providedIn: 'root' })
class LectureCrud extends CrudService<Lecture> {
	constructor() {
		super({ name: 'companyconferencelecture' });
	}
}

/**
 * Lectures, backed by the real backend so the shared catalogue and every
 * `/lect#<id>` link work for any visitor on any device, not just the
 * browser that created them.
 */
@Injectable({ providedIn: 'root' })
export class LectureService {
	private readonly _crud = inject(LectureCrud);
	private readonly _eventService = inject(EventService);

	readonly items = this._crud.documents;

	constructor() {
		this._crud.get({}).subscribe();
	}

	all(): Lecture[] {
		return this._crud.documents();
	}

	byId(id: string): Lecture | undefined {
		return this.all().find((lecture) => lecture._id === id);
	}

	create(entity: Omit<Lecture, '_id'> & Partial<Pick<Lecture, '_id'>>): Lecture {
		const _id = entity._id || (entity.conferenceId ? this._nextPrettyId(entity.conferenceId) : generateLocalId());
		const created: Lecture = { ...entity, _id } as Lecture;
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
		for (const event of this._eventService.all()) {
			if (event.lectureId === id) {
				this._eventService.update(event._id, { lectureId: '' });
			}
		}
	}

	/** `<conferenceId>-<n>`, e.g. `conf-kpnu-2026-2027-1` — readable links instead of a random id. */
	private _nextPrettyId(conferenceId: string): string {
		const prefix = `${conferenceId}-`;
		const usedIndexes = this.all()
			.filter((item) => item._id.startsWith(prefix))
			.map((item) => Number(item._id.slice(prefix.length)))
			.filter((n) => Number.isInteger(n) && n > 0);
		const next = usedIndexes.length ? Math.max(...usedIndexes) + 1 : 1;
		return `${prefix}${next}`;
	}
}
