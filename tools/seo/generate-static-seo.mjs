import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');
const outputDirs = [path.join(rootDir, 'dist/app/browser')];

// The Conference app has one genuinely public/indexable page — the "/" marketing landing page — plus
// "/sign". Everything past sign-in requires a real session and must stay out of search results. CNAME
// holds the real domain; it falls back to example.com if CNAME doesn't exist (e.g. a bare checkout).
const siteUrl = `https://${await readDomain()}`;

await Promise.all(
	outputDirs.map(async (outputDir) => {
		await mkdir(outputDir, { recursive: true });
		await writeFile(path.join(outputDir, 'sitemap.xml'), buildSitemap(siteUrl));
		await writeFile(path.join(outputDir, 'robots.txt'), buildRobots(siteUrl));
	}),
);

function buildSitemap(siteUrl) {
	const lastmod = new Date().toISOString().slice(0, 10);

	const urls = ['/', '/sign'];

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(url) => `	<url>
		<loc>${escapeXml(siteUrl)}${url}</loc>
		<lastmod>${lastmod}</lastmod>
	</url>`,
	)
	.join('\n')}
</urlset>
`;
}

function buildRobots(siteUrl) {
	return `User-agent: *
Allow: /$
Allow: /sign$
Disallow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

async function readDomain() {
	try {
		return trimTrailingSlash((await readFile(path.join(rootDir, 'CNAME'), 'utf8')).trim());
	} catch {
		return 'example.com';
	}
}

function trimTrailingSlash(value) {
	return value.endsWith('/') ? value.slice(0, -1) : value;
}

function escapeXml(value) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}
