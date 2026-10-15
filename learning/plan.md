# Prayer & Qur'an PWA: My Build Plan

**Main goal:** learn to code. Shipping fast is not the point. Understanding is.
When this is done I want to be able to explain how my app works, end to end.

## What I want to be able to do

After this project I should be able to do and explain all of this:

1. **Explain every piece of my app.** What each file does, why each line is there, what breaks if I delete it.
2. **Read and write HTML.** Build a page structure from scratch, use semantic elements, know how the browser reads them.
3. **Read and write CSS.** Style a page from scratch, lay things out with flexbox/grid, make it work on phones and desktops.
4. **Read and write JavaScript.** Select elements, handle clicks, change what's on screen, save and load data with localStorage.
5. **Use Git and GitHub.** Init a repo, commit, push, and know what version control gives me.
6. **Use a JavaScript library.** Read the docs, install it (Adhan.js), call its functions from my own code.
7. **Work with JSON data.** Read a JSON file, understand its structure, load it in JavaScript, show it on a page.
8. **Build and deploy a PWA.** Manifest and service worker, installable, works offline.
9. **Deploy to the internet.** Push to GitHub, turn on GitHub Pages, get a live URL that works on any device.

---

## Decisions I locked in

| Decision | My choice | Why |
|---|---|---|
| Programming language | **JavaScript** | The only language that runs in the browser. No alternative. |
| Frontend framework | **Vanilla JavaScript (no framework)** | I want to learn the real language, not a wrapper around it. |
| Backend | **None** | The app runs entirely in the browser. No server needed. |
| Data storage | **localStorage** | Built into the browser, no setup, no account. Enough for small data. |
| Hosting / deployment | **GitHub Pages** | Free, same account as Git, no extra setup. |
| CSS approach | **Plain CSS (from scratch)** | I want to learn real CSS, not a framework's opinion of CSS. |
| Qur'an data source | **Local JSON files** | Works offline, no API key, no dependency on someone else's service. |
| Prayer time calculation | **Adhan.js** | Free library, runs locally, well documented, actively maintained. |
| Testing | **By hand while I build** | Open the browser, click things, check they work. Right habit at this size. |

---

## The sections

9 sections. Each one ends with something I can see working, and each builds on the one before.

### Section 1: Project Setup & Version Control
**What I learn:** how to start a project, what Git is, how to save my progress.
**What I do:** create the project folder, init Git, write my first HTML file, open it in a browser.
**Done when:** a page loads in the browser showing "Prayer & Qur'an App". The first visible thing I built.

- [x] **1.1** Create the `app/` folder structure with subfolders for css, js and data
- [x] **1.2** Write my first HTML file (`app/index.html`) with basic structure and a title
- [x] **1.3** Init Git (`git init`) to start version control
- [x] **1.4** Make my first commit with a meaningful message
- [x] **1.5** Open the page in a browser and see it working

### Section 2: HTML Structure
**What I learn:** semantic HTML, page layout with divs and sections, forms and checkboxes.
**What I do:** build the full page structure: prayer times, daily checklist, Qur'an reader. No styling yet, just content and meaning.
**Done when:** an unstyled but complete page shows all three areas with real content (prayer names, Surah list, checkboxes).

- [x] **2.1** Add semantic HTML structure (header, main, section tags) to organize the page
- [x] **2.2** Build the prayer times section with all 5 daily prayers
- [x] **2.3** Build the daily prayer checklist with checkboxes
- [x] **2.4** Build the Qur'an reader section with a Surah list
- [x] **2.5** Review the complete page in the browser and check all three areas show up

### Section 3: CSS Styling & Responsive Design
**What I learn:** selectors, box model, flexbox/grid, media queries, mobile-first design.
**What I do:** style the whole app: colors, spacing, typography, a layout that works on phone and desktop.
**Done when:** it looks like a real app on my phone. Clean, calm, readable.

- [x] **3.1** Create the first CSS file (`app/css/styles.css`), link it to the HTML, write basic body styles (font, colors, spacing)
- [x] **3.2** Style the header: background color, text color, padding
- [x] **3.3** Style the prayer section: cards with shadows, rounded corners, icons
- [x] **3.4** Style the checklist and Qur'an reader sections
- [x] **3.5** Add responsive design with media queries (phone vs. desktop)
- [x] **3.6** Add hover and focus states
- [x] **3.7** Final review and polish

### Section 4: JavaScript Basics & DOM Manipulation
**What I learn:** what the DOM is, selecting elements, changing content, event listeners.
**What I do:** make buttons toggle, checkboxes trigger visible changes, taps on Surahs do something. The app comes alive.
**Done when:** things react. I tap a Surah and the view changes, I check a box and something happens on screen.

- [x] **4.1** Create `app/js/main.js` and link it to the HTML. Prove the browser runs my code with `console.log`
- [x] **4.2** Select a checklist checkbox and add a listener. Change a message when I check the box
- [x] **4.3** Count how many checkboxes are checked and show "X of 5 prayers checked" at the top
- [x] **4.4** Change prayer time text on click: tap a prayer item and swap `--:--` for something else
- [x] **4.5** Make Surah list items interactive: tap a Surah and see its name appear somewhere

### Section 5: Prayer Times with Adhan.js
**What I learn:** how to use an external JavaScript library, the geolocation API, working with time data.
**What I do:** install Adhan.js, get my location from the browser, calculate prayer times, show them, highlight the next prayer.
**Done when:** prayer times for where I am are on screen, with the next prayer highlighted.

- [x] **5.1** Load the Adhan.js library and understand how external libraries work and what they add to my page
- [x] **5.2** Calculate prayer times with Adhan.js: call the library with a location and date, see the results in the console
- [x] **5.3** Show real prayer times in the DOM: replace the `--:--` placeholders and remove the old click-to-reveal logic
- [x] **5.4** Highlight the next upcoming prayer
- [x] **5.5** Final review and polish: test the full flow, update knowledge graph and file map

**Reopened 6 Aug 2026.** I marked this section done, but I never did the geolocation part. The coordinates for Haltern am See (`51.74, 6.98`) are still typed into `main.js`. Three tasks to close that gap. I write these myself, via `/next-lesson`.

- [ ] **5.6** Replace the fixed coordinates with `navigator.geolocation.getCurrentPosition()` so the times are for where I actually am
- [ ] **5.7** Show a real city name instead of "Haltern am See" with reverse geocoding (Nominatim)
- [ ] **5.8** Show a clear error if location is denied or unavailable. No silent fallback to the old fixed times

### Section 6: Qur'an Reader with Local JSON
**What I learn:** fetching and parsing JSON, rendering dynamic lists, working with Arabic text.
**What I do:** load Qur'an data from local JSON files, show the Surah list, tap a Surah to read it in Arabic and English.
**Done when:** I can browse all 114 Surahs, tap any one, and read it in Arabic and English.

- [x] **6.1** Find a Qur'an JSON dataset, understand its structure, put it in `app/data/`
- [x] **6.2** Load the JSON file with `fetch()`: understand how fetch works, parse the response, see the data in the console
- [x] **6.3** Show all 114 Surahs dynamically: replace the hardcoded 5-Surah list with a loop that builds the list from the JSON
- [x] **6.4** Build the Surah detail view: tap a Surah to see its Arabic text and English translation
- [x] **6.5** Style the reader so Arabic text and translation look good
- [x] **6.6** Final review and polish: test the full flow, update knowledge graph and file map

### Section 7: Daily Checklist with localStorage
**What I learn:** how localStorage works (save, load, clear), working with dates, state management.
**What I do:** save checkbox state when I check a box, load it when the page opens, reset automatically each new day.
**Done when:** I check off prayers, close the browser, come back tomorrow, and yesterday's checks are gone.

- [x] **7.1** Explore localStorage in the browser console: setItem, getItem, removeItem, and the DevTools Storage tab
- [x] **7.2** Save checkbox states to localStorage when I check or uncheck a prayer
- [x] **7.3** Restore saved checkbox states when the page loads, so checkmarks survive a refresh
- [x] **7.4** Add the daily auto-reset: store today's date, detect a new day, clear yesterday's checks
- [x] **7.5** Final review and polish: test the full flow, update knowledge graph and file map

### Section 8: PWA Setup
**What I learn:** what a PWA is, manifest.json, service workers, offline caching.
**What I do:** create the manifest (app name, icons, theme color), write a service worker that caches files for offline use.
**Done when:** the app installs to my phone's home screen and works without internet.

- [x] **8.1** Understand what a PWA actually is: the three pillars (manifest, service worker, HTTPS), how installing works, what "works offline" really means
- [x] **8.2** Create app icons: the PNG files the manifest needs (192x192 and 512x512)
- [x] **8.3** Create manifest.json: app name, icons, theme color, display mode, start URL
- [x] **8.4** Write a service worker: sw.js that caches all app files and serves them from cache offline
- [x] **8.5** Register the PWA: link the manifest in the HTML and register the service worker from main.js
- [x] **8.6** Test and verify: Lighthouse audit, offline mode, install to the home screen

### Section 9: Git Workflow & Deployment
**What I learn:** branching, meaningful commits, push/pull, GitHub Pages deployment.
**What I do:** clean up my Git history, push to GitHub, turn on GitHub Pages, get a live URL.
**Done when:** my app is live on the internet at a public URL, on any device.

- [x] **9.1** Understand branching: what branches are, why to use them, and practice creating, switching and merging one with a small change
- [x] **9.2** Set up GitHub Actions deployment: a workflow file (`.github/workflows/deploy.yml`) that deploys the `app/` folder to GitHub Pages
- [x] **9.3** Enable GitHub Pages: push the workflow, turn on Pages in the repo settings, watch the app go live
- [x] **9.4** Test the live app: open the public URL on desktop and phone, check all three sections, share the link
- [x] **9.5** Final review: write a meaningful commit message, update knowledge graph and file map

---

## After v1

- **31 Jul 2026:** found and fixed the missing Bismillah (`verse_0`) in 112 of 114 Surahs.
- **6 Aug 2026:** reopened Section 5 for geolocation (tasks 5.6 to 5.8 above).
- **4 Oct 2026:** v1 tidy-up on branch `v1-tidy-up`: bug fixes, a Sunrise row, a richer Surah list, self-hosted fonts, and a cleaner `main.js` and `styles.css`. Details are in `file-map.md`.

---

_Last updated: 4 October 2026. All 9 sections done on 30 July 2026 with the final commit "From a little Idea to something that could help many muslims." Still open: tasks 5.6 to 5.8._
