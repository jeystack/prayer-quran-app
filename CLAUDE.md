# CLAUDE.md

Prayer & Qur'an PWA: prayer times (Adhan.js), a daily prayer checklist (localStorage) and an offline Qur'an reader (114 Surahs, Arabic + English). Live at https://jeystack.github.io/prayer-quran-app/

This is a **learning project**. The goal is that Jeremy understands every line, not that features ship fast. Status and the build plan live in `learning/`, not here.

## Rule: Jeremy writes the code

- Do not write app code (`app/`) for Jeremy to paste. Explain concepts, give hints, break problems into smaller steps, review code he wrote, and help trace bugs and error messages.
- When he is stuck, point to where to look. He makes the edit.
- You may edit docs and metadata directly: this file, `README.md`, and everything in `learning/`.
- Jeremy makes his own commits. Suggest how to group changes and what to write in the message, but do not run `git commit` or `git push` unless he asks.

## Stack and locked decisions

- Vanilla HTML, CSS and JavaScript (ES modules). No frameworks, no build step, no package manager, no backend.
- Adhan.js is a local copy in `app/js/adhan.esm.js`. Do not switch to a CDN or npm: offline support depends on it.
- All Qur'an data is local JSON under `app/data/`. No external API for the Qur'an.
- Mobile-first. One light theme, no dark mode.
- Only `app/` is published. `learning/`, `docs/` and this file are not deployed.

## Run and test

- Serve `app/` over HTTP (VS Code Live Server). Opening `index.html` as a file does not work reliably: `main.js` is an ES module and the service worker needs `http://localhost` or HTTPS.
- Testing is by hand in the browser. There is no test suite.
- There is no build or lint command.

## Release step (easy to forget)

`sw.js` serves cache-first. After changing any pre-cached file, bump `CACHE_NAME` in `app/sw.js` (`prayer-quran-v4` to `v5`). Otherwise installed apps keep the old version. If you add a new file the app needs offline, also add it to the `cache.addAll([...])` list.

Pushing to `main` deploys `app/` through `.github/workflows/deploy.yml`. Work on a branch and merge into `main` when it is ready.

## Pitfalls

- **Stale service worker while developing.** DevTools can serve an old cached copy of the site, so fixes look like they do nothing. Check Application > Service Workers (tick "Update on reload" or unregister) before debugging the code.
- **Bismillah is `verse_0`.** In `surah_*.json` and `en_translation_*.json` the Bismillah is an extra `verse_0` key, present on every Surah except 1 and 9. The numbered verses run `verse_1` to `verse_N`. The render loop must handle `verse_0` separately.
- **Line endings.** `.gitattributes` forces LF. Do not add CRLF conversions.

## Code conventions

- `app/js/main.js` has four blocks in this order, each under a `// ===== Title =====` comment: prayer times, daily checklist, Qur'an reader, service worker. Keep new code inside the matching block. Use named functions and leave no `console.log` behind.
- In `index.html`, `data-prayer="fajr"` etc. must match the property names on Adhan's `PrayerTimes` object, because `main.js` reads them directly.
- HTML: semantic tags (header, main, section, button for clickable rows). Class names are kebab-case (`prayer-item`, `next-prayer`).
- CSS: plain CSS with custom properties in `:root` and a shared `.card` class. Look: Inter, `#f5f5f0` background, `#2d6a4f` green, white cards with 10px radius and a light shadow.
- Arabic text uses the Amiri font. Fonts are self-hosted in `app/fonts/`, so do not add Google Fonts requests.

## Where things stand

- Sections 1 to 9 of the plan are done and the app is live. A v1 tidy-up was merged to `main` on 4 Oct 2026.
- **Open work:** Section 5 addendum, tasks 5.6 to 5.8. Prayer times still use hardcoded coordinates for Haltern am See in `main.js`. The tasks replace them with `navigator.geolocation`, add reverse geocoding for the city name, and add an explicit error state (no silent fallback) if location is denied.
- At the start of a lesson, read `learning/plan.md` for the current task and `learning/knowledge-graph.md` for what is already understood.
- After finishing a task, update `learning/file-map.md` and `learning/knowledge-graph.md`, and the "Open work" line above.

## Repository layout (non-obvious parts only)

- `app/data/surah.json` is the Surah index. `app/data/surah/` and `app/data/translation/en/` hold one file per Surah (`surah_N.json`, `en_translation_N.json`).
- `learning/` is Jeremy's metadata, not runtime code.