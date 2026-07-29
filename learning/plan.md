# Prayer & Qur'an PWA — Build Plan

**Primary objective:** Learn to code. Speed of delivery is not the goal. Understanding is.
By the end of this project, Jeremy should be able to explain how his app works end to end.

## Learning Goals

What I should be able to do and explain after completing this project:

1. **Explain every piece of my app** — what each file does, why each line exists, what would break if I deleted it.
2. **Read and write HTML** — build a page structure from scratch, use semantic elements, understand how the browser interprets them.
3. **Read and write CSS** — style a page from scratch, use flexbox/grid for layout, make it responsive for phones and desktops.
4. **Read and write JavaScript** — select elements on a page, handle user clicks, change what's on screen, save and load data from localStorage.
5. **Use Git and GitHub** — initialize a repo, make commits, push to GitHub, understand what version control gives me.
6. **Use a JavaScript library** — read documentation, install a library (Adhan.js), use its functions in my own code.
7. **Work with JSON data** — read a JSON file, understand its structure, load it in JavaScript, display it on a page.
8. **Build and deploy a PWA** — set up a manifest and service worker, make an app installable and offline-capable.
9. **Deploy to the internet** — push code to GitHub, enable GitHub Pages, get a live URL that works on any device.

---

## Locked Design Decisions

| Decision | Choice | Why |
|---|---|---|
| Programming language | **JavaScript** | Only language that runs in the browser. No alternative. |
| Frontend framework | **Vanilla JavaScript (no framework)** | Learn the real language, not a wrapper around it. |
| Backend | **None** | App runs entirely in the browser. No server needed. |
| Data storage | **localStorage** | Built into the browser, no setup, no account. Perfect for small data. |
| Hosting / deployment | **GitHub Pages** | Free, same account as Git, zero extra setup. |
| CSS approach | **Plain CSS (from scratch)** | Learn real CSS, not a framework's opinion of CSS. |
| Qur'an data source | **Local JSON files** | Works offline, no API key, no dependency on external service. |
| Prayer time calculation | **Adhan.js** | Free library, runs locally, well-documented, actively maintained. |
| Testing | **Manual testing during development** | Open browser, click things, check if they work. Right habit, right scale. |

---

## Build Sections

The app is built in 9 sections. Each section ends with a concrete deliverable you can see working. Each layer builds on the one before it.

### Section 1: Project Setup & Version Control
**What you learn:** How to start a project, what Git is, how to save your progress.
**What you do:** Create the project folder, initialize Git, create your first HTML file, open it in a browser.
**Deliverable:** A page that loads in the browser showing "Prayer & Qur'an App" — the first visible thing you've built.

- [x] **1.1** Create the `app/` folder structure with subdirectories for css, js, and data
- [x] **1.2** Write your first HTML file (`app/index.html`) with basic structure and a title
- [x] **1.3** Initialize Git (`git init`) to start version control
- [x] **1.4** Make your first commit with a meaningful message
- [x] **1.5** Open the page in a browser and see it working

### Section 2: HTML Structure
**What you learn:** Semantic HTML, page layout with divs and sections, forms and checkboxes.
**What you do:** Build the full page structure — prayer times area, daily checklist area, Qur'an reader area. No styling yet, just content and meaning.
**Deliverable:** An unstyled but complete page showing all three feature areas with real content (prayer names, Surah list, checkboxes).

- [x] **2.1** Add semantic HTML structure (header, main, section tags) to organize the page
- [x] **2.2** Build the prayer times section with all 5 daily prayers
- [x] **2.3** Build the daily prayer checklist with checkboxes
- [x] **2.4** Build the Qur'an reader section with a Surah list
- [x] **2.5** Review the complete page in the browser and verify all three areas show up

### Section 3: CSS Styling & Responsive Design
**What you learn:** Selectors, box model, flexbox/grid, media queries, mobile-first design.
**What you do:** Style the entire app — colors, spacing, typography, layout that works on phones and desktop.
**Deliverable:** The app looks like a real app on your phone. Clean, calm, readable.

- [x] **3.1** Create the first CSS file (`app/css/styles.css`), link it to HTML, and write basic body styles (font, colors, spacing)
- [x] **3.2** Style the header — background color, text color, padding
- [x] **3.3** Style the prayer section — cards with shadows, rounded corners, icons
- [x] **3.4** Style the checklist and Qur'an reader sections
- [x] **3.5** Add responsive design with media queries (phone vs. desktop)
- [x] **3.6** Add hover and focus states for interactivity
- [x] **3.7** Final review and polish

### Section 4: JavaScript Basics & DOM Manipulation
**What you learn:** What the DOM is, selecting elements, changing content, event listeners.
**What you do:** Make buttons toggle, checkboxes trigger visible changes, taps on Surahs do something. The app comes alive.
**Deliverable:** Interactive elements — tap a Surah and the view changes, check a box and something happens on screen.

- [x] **4.1** Create `app/js/main.js` and link it to the HTML — prove the browser runs your code with `console.log`
- [x] **4.2** Select a checklist checkbox and add a click listener — change a message when you check a box
- [x] **4.3** Count how many checkboxes are checked — show "X of 5 prayers checked" at the top
- [x] **4.4** Change prayer time text on click — tap a prayer item and swap `--:--` for something else
- [x] **4.5** Make Surah list items interactive — tap a Surah and see its name appear somewhere

### Section 5: Prayer Times with Adhan.js
**What you learn:** How to use external JavaScript libraries, geolocation API, working with time data.
**What you do:** Install Adhan.js, get the user's location from the browser, calculate prayer times, display them, highlight the next prayer.
**Deliverable:** Prayer times for Haltern am See shown on screen, with the next prayer highlighted.

- [x] **5.1** Load Adhan.js library via a `<script>` tag — understand how external libraries work and what they add to your page
- [x] **5.2** Calculate prayer times using Adhan.js functions — call the library with a location and date, see the results in the console
- [x] **5.3** Display real prayer times in the DOM — replace the `--:--` placeholders and remove the old hardcoded click-to-reveal logic
- [x] **5.4** Highlight the next upcoming prayer — compare each prayer time to the current time, add a visual highlight to the next one
- [x] **5.5** Final review and polish — test the full flow, update knowledge graph and file map

### Section 6: Qur'an Reader with Local JSON
**What you learn:** Fetching and parsing JSON data, rendering dynamic lists, working with Arabic text.
**What you do:** Load Qur'an data from local JSON files, display the Surah list, tap a Surah to read its Arabic text and English translation.
**Deliverable:** Browse all 114 Surahs, tap any one, read it in Arabic and English.

- [x] **6.1** Find a Qur'an JSON dataset, understand its structure, and place it in `app/data/`
- [x] **6.2** Load the JSON file using `fetch()` — understand how fetch works, parse the response, see the data in the console
- [x] **6.3** Display all 114 Surahs dynamically — replace the hardcoded 5-Surah list with a loop that builds the list from the JSON data
- [x] **6.4** Build the Surah detail view — tap a Surah to see its Arabic text and English translation
- [x] **6.5** Style the reader — make Arabic text and translation look good
- [x] **6.6** Final review and polish — test the full flow, update knowledge graph and file map

### Section 7: Daily Checklist with localStorage
**What you learn:** How localStorage works (save, load, clear), working with dates, state management.
**What you do:** Save checkbox state when checked, load it when the page opens, reset automatically each new day.
**Deliverable:** Check off prayers, close the browser, come back tomorrow — yesterday's checks are gone, today starts fresh.

- [x] **7.1** Explore localStorage in the browser console — understand setItem, getItem, removeItem, and DevTools Storage tab
- [x] **7.2** Save checkbox states to localStorage when the user checks or unchecks a prayer
- [x] **7.3** Restore saved checkbox states when the page loads — make the checkmarks survive a page refresh
- [x] **7.4** Add daily auto-reset — store today's date, detect a new day, clear yesterday's checks
- [x] **7.5** Final review and polish — test the full flow, update knowledge graph and file map

### Section 8: PWA Setup
**What you learn:** What a PWA is, manifest.json, service workers, offline caching.
**What you do:** Create the manifest (app name, icons, theme color), write a service worker that caches files for offline use.
**Deliverable:** The app installs to your phone's home screen and works without internet.

- [x] **8.1** Understand what a PWA actually is — the three pillars (manifest, service worker, HTTPS), how installability works, what "works offline" means in practice
- [x] **8.2** Create app icons — make the PNG icon files the manifest needs (192x192 and 512x512)
- [x] **8.3** Create manifest.json — write the manifest with app name, icons, theme color, display mode, start URL
- [x] **8.4** Write a service worker — create sw.js that caches all app files and serves them from cache offline
- [x] **8.5** Register the PWA — link manifest in HTML and register the service worker from main.js
- [x] **8.6** Test and verify — Lighthouse audit, offline mode testing, try installing to the home screen

### Section 9: Git Workflow & Deployment
**What you learn:** Branching, meaningful commits, push/pull, GitHub Pages deployment.
**What you do:** Clean up your Git history, push to GitHub, enable GitHub Pages, get a live URL.
**Deliverable:** Your app is live on the internet at a public URL, accessible from any device.

- [x] **9.1** Understand branching — learn what branches are, why we use them, and practice creating, switching, and merging a branch with a small change
- [x] **9.2** Set up GitHub Actions deployment — create a workflow file (`.github/workflows/deploy.yml`) that deploys the `app/` folder to GitHub Pages
- [x] **9.3** Enable GitHub Pages — push the workflow, turn on Pages in repo settings, and see your app go live
- [x] **9.4** Test the live app — open the public URL on desktop and phone, verify all three sections work, share the link
- [ ] **9.5** Final review — write a meaningful commit message, update knowledge graph and file map

---

_Last updated: 30 July 2026 — 9.3 complete (app live on GitHub Pages). Task 9.4 next: test the live app._
