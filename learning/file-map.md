# File Map

Every file and folder in this project: what it is, why it's here, and whether I actually understand it.
Nothing in this repo should be a mystery box to me.

**Statuses:**
- `known`: I can explain it in my own words. I know what it does and why it's here.
- `parked`: honest one-liner for now. I'll dig in later.
- `generated`: made by AI or a tool. I didn't write it by hand, and I still have to read it until I understand it.

---

## Root: `/`

| Path | What it is | Status | Notes |
|---|---|---|---|
| `app/` | The actual app (HTML, CSS, JS, data). | known | All the real code lives here. This is the folder that gets deployed. |
| `learning/` | Everything about learning this project: plans, what I know, this map. | known | I know every file in here and what it's for. |
| `docs/` | Screenshots. | known | Holds `first-look.png`. |
| `README.md` | The front page of the repo on GitHub. | known | What the app is, the live link, what I learned. |
| `CLAUDE.md` | Instructions and project status for Claude Code. | generated | Claude keeps it up to date after each lesson. Ignored by git. |
| `.gitignore` | Tells git which files to leave out. | known | Ignores `CLAUDE.md`, `graphify-out` and `*.code-workspace`. |
| `graphify-out/` | Output folder from a tool. | parked | Ignored by git. Not part of the app. |

## `learning/`

| Path | What it is | Status | Notes |
|---|---|---|---|
| `learning/project.md` | The project spec: who I am, what I'm building, MVP, parking lot. | known | I helped write it and I know every section. |
| `learning/plan.md` | My build plan: locked decisions, 9 sections, what I want to learn. | known | I went through every decision and picked the tools. |
| `learning/knowledge-graph.md` | Map of what I know: every concept, its status, the evidence. | generated | AI made the first version. It gets updated with my progress after each lesson. |
| `learning/file-map.md` | This file. | generated | AI made the first version. I should update it whenever files change. |

## `app/`

On 4 Oct 2026 I did the v1 tidy-up (branch `v1-tidy-up`). The notes below say what changed in each file.

| Path | What it is | Status | Notes |
|---|---|---|---|
| `app/index.html` | The main HTML page, the entry point of the app. | known | I wrote this: header, main, three sections, footer. Prayer times, checklist with 5 checkboxes and labels, Qur'an reader with an empty `<ul>` that JavaScript fills from JSON. The script tag is `type="module"` so `import` works. The manifest is linked in the `<head>`. **Tidy-up (4 Oct 2026):** added meta description, theme-color, favicon and apple-touch-icon; a Sunrise row; `data-prayer` on each prayer row; the `card` class on every card; `id="surah-list"` on the `<ul>`. |
| `app/css/` | Folder for CSS files. | known | Made in Task 1.1. |
| `app/css/styles.css` | The stylesheet: how the app looks. | known | I wrote this: body, header, three card types, hover lift, focus-visible on checkboxes, transitions, the `pulse-green` animation for the next prayer, the phone media query, `.hidden`, the verse and Bismillah styles, the back button. **Tidy-up (4 Oct 2026):** rewritten. New: `@font-face` rules loading fonts from `app/fonts/` (no more Google Fonts `@import`), CSS custom properties in `:root` (`var(--green)`), one shared `.card` class for my three card blocks, the Surah row layout (`.surah-item`, `.surah-number`, `.surah-names`, `.surah-meta`, `.surah-title-ar`), `.sunrise-item`, and a `prefers-reduced-motion` rule. |
| `app/js/` | Folder for JavaScript files. | known | Made in Task 1.1. |
| `app/js/main.js` | All the app logic. | known | I wrote this over Sections 4 to 8: checkbox listeners and the prayer count, Adhan.js prayer times and the next-prayer highlight, the Surah list built from JSON with `createElement`, the detail view with `Promise.all()` and `innerHTML`, the back button, localStorage save, restore and daily reset, the service worker registration, and the Bismillah (`verse_0`) fix. **Tidy-up (4 Oct 2026):** restructured into four blocks with named functions. New: `formatTime()` with options for `toLocaleTimeString`, looking up times with `prayerTimes[name]` and `dataset.prayer` (no more if/else chain), tomorrow's Fajr after Isha, `getTodayString()` using the local date with `padStart`, `refresh()` on a `setInterval` and on `visibilitychange`, `fetchJson()` checking `response.ok` and `.catch()` for errors, `replaceChildren`, Surah rows as `<button>`s, and saving and restoring the scroll position. |
| `app/js/adhan.esm.js` | A local copy of the Adhan.js library. | generated | Other people's code. I added it in Task 8.6 so prayer times work offline. I use it, I don't need to read it. |
| `app/sw.js` | The service worker: a background JS file that caches the app and serves it offline. | known | I wrote this in Task 8.4. Three events: install (pre-caches the app shell), fetch (cache-first, and caches `data/` files the first time they're opened), activate (deletes old caches). **Tidy-up (4 Oct 2026):** `CACHE_NAME` is now `prayer-quran-v4`, the fonts and the SVG icon are in the pre-cache list, and a `data/` response is only cached when `networkResponse.ok` is true. Remember: bump `CACHE_NAME` whenever a pre-cached file changes, or installed apps keep the old version. |
| `app/manifest.json` | The PWA manifest: tells the browser this is an installable app. | known | I wrote this in Task 8.3: name, short_name, icons, theme_color (`#2d6a4f`), background_color (`#f5f5f0`), display standalone, start_url. **Tidy-up (4 Oct 2026):** added `id`, `scope`, `description` and a third icon with `"purpose": "maskable"`. |
| `app/fonts/` | The font files, stored in the project. | generated | Added in the tidy-up. `inter-latin.woff2`, `amiri-arabic.woff2`, `amiri-latin.woff2`, downloaded from Google Fonts, plus `OFL-Inter.txt` and `OFL-Amiri.txt` (the licenses, which have to ship with the fonts). Because they're local and pre-cached, Arabic shows in Amiri even offline. |
| `app/images/` | App icons. | known | My folder. Holds the SVG sources and the PNGs the manifest needs. |
| `app/images/app-icon.svg` | The icon design: a white crescent on a green rounded square. | known | My design, the source for the PNGs. Also used as the favicon. |
| `app/images/app-icon-192x192.png` | App icon at 192×192. | known | Made from the SVG with `qlmanage -t -s 192`. Used for the home screen icon. |
| `app/images/app-icon-512x512.png` | App icon at 512×512. | known | Made from the SVG with `qlmanage -t -s 512`. Used for splash screens and sharp displays. |
| `app/images/app-icon-maskable.svg` | Source for the maskable icon. | generated | Added in the tidy-up. Same crescent, but the green fills the whole square and the moon sits in the middle, so Android can crop it to any shape. |
| `app/images/app-icon-maskable-512x512.png` | The maskable icon at 512×512. | generated | Rendered from the SVG above with headless Edge. Listed in the manifest. |
| `app/data/surah.json` | Info on all 114 Surahs: English name, Arabic name, verse count, where it was revealed. | known | From semarketir/quranjson. I fetch it to build the Surah list. The `index` (a string like "001") is what I turn into the file names below. |
| `app/data/surah/` | 114 JSON files (`surah_1.json` to `surah_114.json`) with the Arabic text. | known | From semarketir/quranjson. Each verse is a key (`verse_1`, `verse_2`, ...), not an array item. `verse_0` is the Bismillah, on every Surah except 1 and 9. Fetched when I tap a Surah. |
| `app/data/translation/en/` | 114 JSON files (`en_translation_1.json` to `en_translation_114.json`) with the English translation. | known | From semarketir/quranjson. Same structure as the Arabic files. Fetched together with the Arabic. |
| `.github/workflows/` | Folder for GitHub Actions workflows. | known | Made in Task 9.2. GitHub reads every `.yml` file in here and runs it on its trigger. |
| `.github/workflows/deploy.yml` | The deploy workflow: on a push to `main`, deploy `app/` to GitHub Pages. | known | I wrote this in Task 9.2. Four steps: Checkout, Setup Pages, Upload artifact (`path: 'app'`), Deploy to Pages. |

## Screenshots

| Path | What it is | Status | Notes |
|---|---|---|---|
| `docs/first-look.png` | Screenshot of the app at the end of Section 3. | known | Green header, prayer cards, checklist, Qur'an reader. Moved here from the repo root in the tidy-up. |

---

*Last updated: 4 October 2026. v1 tidy-up done and reviewed.*
