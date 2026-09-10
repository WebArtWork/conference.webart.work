import { environment } from '@env';

/**
 * This app calls the backend cross-origin (`environment.url`, e.g.
 * `it.webart.work`, is a different host than this site). The server can't
 * tell companies apart by `Host` there, so every request has to say who it
 * is explicitly via `domain` — in the body for writes, in the query string
 * for reads (see `it.webart.work/server/company/api.js`'s
 * `resolveConferenceCompany`).
 */
export const CONFERENCE_DOMAIN = environment.contact.slug;

/** Appends the `domain` param to a `CrudService.get()` query string. */
export function withDomain(query = ''): string {
	const domainParam = `domain=${encodeURIComponent(CONFERENCE_DOMAIN)}`;
	return query ? `${query}&${domainParam}` : domainParam;
}
