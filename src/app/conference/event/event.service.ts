import { Injectable } from '@angular/core';
import { CrudService } from '@wawjs/ngx-crud';
import { Observable } from 'rxjs';
import { Event } from './event.interface';

@Injectable({ providedIn: 'root' })
export class EventService extends CrudService<Event> {
	constructor() {
		super({ name: 'event' });
	}

	/**
	 * Resolves an event by its public slug (`1234-5678`).
	 * Assumption: the API's `fetch` endpoint accepts `{ slug }` as a lookup query,
	 * mirroring how `fetch(query)` is used elsewhere for single-document reads.
	 */
	bySlug(slug: string): Observable<Event> {
		return this.fetch({ slug });
	}
}
