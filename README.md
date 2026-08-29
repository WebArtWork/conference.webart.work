# Conference (Angular 22)

Conference is a live companion for conferences, talks, workshops, webinars,
streams, and presentations. It helps speakers understand their audience in
real time while giving visitors a simple way to follow the talk, ask
questions, participate in polls and quizzes, and react to individual
chapters — all from a single link, with no account required.

Alongside the app template under `src/`, this workspace carries three
supporting Angular apps under `projects/` — internal tooling and demos, not
part of the deployed product:

- **`projects/uikit`** — a full ngx-prime component reference and a live theme
  configurator ("Design Lab") for tuning the app template's design tokens
- **`projects/showcase`** — a fuller example site built entirely from
  ngx-prime components, showing what a real app assembled from the same
  component set looks like end to end
- **`projects/translator`** — a small tool for browsing and editing the app
  template's `src/i18n/*.json` translation files

## Core Concepts

- **Event** — the main container. Each event has a unique public slug
  (`1234-5678`) that lets visitors join without an account, plus an owner,
  info (title/description), chapters, questions, polls/quizzes, and a state.
- **Chapters** — sections/topics of the talk (Introduction, Demo, Q&A, …).
  The owner controls which chapter is active. Visitors can react to/rate the
  active chapter, but ratings and reaction totals are **private** — only the
  owner ever sees them.
- **Questions** — visitor-submitted, public to everyone in the event, sorted
  by like count. Visitors can only upvote (once per device), never
  downvote. The owner can delete any question.
- **Polls** — owner-created question + options with an active/inactive
  state. Visitors vote while active; results are owner-only.
- **Quizzes** — like polls, but with a correct answer. The owner sees
  submitted answers, percent correct, and the answer distribution; visitors
  never see quiz results.
- **Event State** — `draft` (owner prepares, no visitor interaction) →
  `live` (visitors can react, ask/like questions, answer polls/quizzes) →
  `ended` (new interactions locked, event and its results stay viewable).

## Public Event Page (`event/:slug`)

The only page a visitor needs. It shows the current and previous chapters,
lets visitors react to the active chapter (input only — no aggregate is ever
shown to them), lists public questions with a create/upvote flow, and
surfaces any currently active poll or quiz for participation. No
authentication is required; visitors are identified only by a random
per-device id stored in `localStorage`, used solely to prevent duplicate
likes/reactions/answers.

## Owner Manage Page (`event/:slug/manage`)

Authenticated-only (reuses the existing `@wawjs/ngx-bos` `authenticatedGuard`
pattern). Lets the owner edit event info, change event state, create/reorder
chapters and pick the active one, view private chapter reaction summaries,
moderate (delete) audience questions, and create/manage polls and quizzes
including their owner-only results. It behaves as a live dashboard —
`@wawjs/ngx-socket` drives best-effort real-time refresh, backed by a
guaranteed interval-polling fallback via the existing CRUD `get` calls.

## Permissions

**Visitor (no account):**

- Open an event by slug, view chapters, react/rate the active chapter
- Create questions, upvote questions (once per device)
- Answer active polls/quizzes (once per device)
- Cannot see chapter feedback totals, poll results, or quiz results
- Cannot edit, manage, or delete anything

**Owner (authenticated):**

- Full control over event info, state, chapters, questions, polls, quizzes
- Sees all private audience analytics (chapter reactions, poll/quiz results)

## Prerequisites

- Node `^22.22.3`, `^24.15.0`, or `>=26.0.0` with npm 8+ (Angular CLI 22 is
  provided locally via devDependencies)

## Getting Started

```sh
npm install   # install dependencies
npm start     # serve on http://localhost:4200 with proxy.conf.json
```

Environments live in `src/environments/`:

- `environment.ts` for local development (extends `environment.prod.ts`)
- `environment.prod.ts` for production builds (API URL, meta tags, languages,
  defaults)

## Scripts

- `npm start` — dev server with proxying to the configured API URL
  (`proxy.conf.json`)
- `npm run build` — production app build to `dist/`, plus static
  `sitemap.xml`/`robots.txt` generation
- `npm run start:uikit` / `npm run build:uikit` — serve/build `projects/uikit`
- `npm run start:showcase` / `npm run build:showcase` — serve/build
  `projects/showcase`
- `npm run start:translator` / `npm run build:translator` — serve/build
  `projects/translator`

Each of `uikit`, `showcase`, and `translator` is also directly reachable via
the Angular CLI itself if you'd rather not go through the npm script
aliases, e.g. `ng serve uikit` or `ng build translator`.

## Project Structure (key paths)

- `src/app/app.config.ts` — root providers (zoneless change detection,
  `ngxBosProvide`, WAW services, TinyMCE, router with component input
  binding for route params)
- `src/app/app.routes.ts` — route map, including the public `event/:slug`
  route and the authenticated `event/:slug/manage` route
- `src/app/app.formcomponents.ts` — project-specific dynamic form components
- `src/app/conference/` — the Conference domain: `Event`, `Chapter`,
  `Question`, `Poll`, `Quiz` interfaces/consts/CRUD services (each split as
  `.interface.ts` / `.const.ts` / `.service.ts`, following the
  `src/app/company/` convention), plus `device-id.service.ts` for the
  anonymous per-device identifier
- `src/app/pages/event/public/` — the visitor-facing event page
- `src/app/pages/event/manage/` — the owner dashboard
- `src/app/layouts/` — layout shells for guest/user routes
- `src/app/pages/` — routed pages per role (e.g. `guest/sign`,
  `user/profile`, `event`)
- `src/environments/` — API / meta / language configuration
- `src/i18n/en.json` / `src/i18n/ua.json` — interface translations (served
  at `/i18n`), read by `@wawjs/ngx-translate`. Each file is an array of
  strings, one per language, positionally aligned — `en.json[i]` is both the
  English source text and the lookup key used everywhere in `src/app` (e.g.
  `translateService.translate('Settings')`), and `ua.json[i]` is its
  translation. `projects/translator` is the tool for browsing/editing these.
- `projects/uikit/` — ngx-prime component reference plus a live theme
  configurator. See [projects/uikit/ROADMAP.md](projects/uikit/ROADMAP.md).
- `projects/showcase/` — a fuller example app built from real ngx-prime
  components with concrete demo data.
- `projects/translator/` — browses `src/i18n/en.json`/`ua.json` in a table
  and downloads an updated JSON per language for you to drop back over the
  real file — no backend, so it can't write those files directly.
- `projects/ROADMAP.md` / `projects/uikit/ROADMAP.md` — status and design
  notes for the three supporting apps above.

## Development Notes

- Components are standalone and signals-first; favor `computed` / `signal` /
  `effect`. Angular 22 uses OnPush by default, so do not set
  `changeDetection` explicitly.
- WAW services power guards, CRUD helpers, store/http/socket access, and
  meta tags. Update `environment.image`/`company.json` when changing
  branding.
- Dynamic form templates must be registered through
  `src/app/app.formcomponents.ts` so schemas can reference them by name; the
  Conference domain's plain signal-forms (event/chapter/poll/quiz editing)
  don't use that system and aren't registered there.
- Reusable package APIs are imported from `@wawjs/ngx-bos`, `@wawjs/ngx-crud`,
  `@wawjs/ngx-http`, `@wawjs/ngx-socket`, etc., never from package-internal
  source paths.

## Component Structure

Keep component classes consistent in this order:

1. Injections (via `inject()`)
2. Inputs / outputs / view queries
3. Variables (readonly/public first, then private)
4. Constructor (only when needed)
5. Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.)
6. Functions (public, then private)

Private variables and functions start with an underscore (`_`).

## Contributing

1. Create a feature branch.
2. Keep changes aligned with the standalone + signals pattern.
3. Open a pull request for review.
