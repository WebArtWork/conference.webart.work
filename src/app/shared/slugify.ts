const CYRILLIC_TO_LATIN: Record<string, string> = {
	а: 'a',
	б: 'b',
	в: 'v',
	г: 'h',
	ґ: 'g',
	д: 'd',
	е: 'e',
	є: 'ie',
	ж: 'zh',
	з: 'z',
	и: 'y',
	і: 'i',
	ї: 'i',
	й: 'i',
	к: 'k',
	л: 'l',
	м: 'm',
	н: 'n',
	о: 'o',
	п: 'p',
	р: 'r',
	с: 's',
	т: 't',
	у: 'u',
	ф: 'f',
	х: 'kh',
	ц: 'ts',
	ч: 'ch',
	ш: 'sh',
	щ: 'shch',
	ь: '',
	ю: 'iu',
	я: 'ia',
	ё: 'e',
	ъ: '',
	ы: 'y',
	э: 'e',
};

/** Turns a title (Cyrillic or Latin) into a readable URL-safe slug, e.g. `КПНУ 2026-2027` -> `kpnu-2026-2027`. */
export function slugify(text: string): string {
	const transliterated = text
		.toLowerCase()
		.split('')
		.map((char) => CYRILLIC_TO_LATIN[char] ?? char)
		.join('');

	return transliterated
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}
