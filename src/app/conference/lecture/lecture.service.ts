import { Injectable, inject } from '@angular/core';
import { CrudOptions, CrudService } from '@wawjs/ngx-crud';
import { slugify } from '../../shared/slugify';
import { ConferenceService } from '../conference.service';
import { CONFERENCE_DOMAIN, withDomain } from '../conference-domain';
import { EventService } from '../event/event.service';
import { generateLocalId } from '../local-store';
import { Lecture } from './lecture.interface';

@Injectable({ providedIn: 'root' })
class LectureCrud extends CrudService<Lecture> {
	constructor() {
		super({ name: 'companyconferencelecture' });
	}

	protected override beforeCreate(doc: Lecture, options: CrudOptions<Lecture>) {
		return super.beforeCreate({ ...doc, domain: CONFERENCE_DOMAIN } as Lecture, options);
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
	private readonly _conferenceService = inject(ConferenceService);

	readonly items = this._crud.documents;

	constructor() {
		this._crud.get({ query: withDomain() }).subscribe();
	}

	all(): Lecture[] {
		return this._crud.documents();
	}

	byId(id: string): Lecture | undefined {
		return this.all().find((lecture) => lecture._id === id);
	}

	/**
	 * Resolves a `/lect#<fragment>` link: tries the raw `_id` first (old links
	 * keep working), then treats the fragment as `conf-<conference-slug>-<n>`
	 * and looks up the nth lecture of the matching conference by display
	 * order — so a pretty link works even for lectures whose stored `_id`
	 * isn't slug-shaped yet.
	 */
	byPublicId(fragment: string): Lecture | undefined {
		if (!fragment) {
			return undefined;
		}

		const direct = this.byId(fragment);
		if (direct) {
			return direct;
		}

		for (const conference of this._conferenceService.all()) {
			const prefix = `conf-${slugify(conference.title)}-`;
			if (!fragment.startsWith(prefix)) {
				continue;
			}

			const position = Number(fragment.slice(prefix.length));
			if (!Number.isInteger(position) || position < 1) {
				continue;
			}

			const siblings = this.all().filter((lecture) => lecture.conferenceId === conference._id);
			const match = siblings[position - 1];
			if (match) {
				return match;
			}
		}

		return undefined;
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

	/** `conf-<conference-slug>-<n>`, e.g. `conf-kpnu-2026-2027-1` — readable links instead of a random id. */
	private _nextPrettyId(conferenceId: string): string {
		const conference = this._conferenceService.byId(conferenceId);
		const slug = conference ? slugify(conference.title) : '';
		if (!slug) {
			return generateLocalId();
		}

		const siblings = this.all().filter((item) => item.conferenceId === conferenceId);
		const prefix = `conf-${slug}-`;
		const usedIndexes = siblings
			.map((item) => item._id)
			.filter((id) => id.startsWith(prefix))
			.map((id) => Number(id.slice(prefix.length)))
			.filter((n) => Number.isInteger(n) && n > 0);
		const next = usedIndexes.length ? Math.max(...usedIndexes) + 1 : siblings.length + 1;
		return `${prefix}${next}`;
	}
}
