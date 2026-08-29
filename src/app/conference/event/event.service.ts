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
	 * Confirmed against `@wawjs/ngx-crud`'s `CrudService.fetch(query)`: it issues a single-document
	 * read against `/api/{name}` with `query` as the lookup params, so `{ slug }` is the correct shape.
	 */
	bySlug(slug: string): Observable<Event> {
		return this.fetch({ slug });
	}
}
