# Knowledge Graph

What I actually know. Updated after every lesson.
A status only goes up when there's proof: something I said or did.

**Statuses:**
- `seed`: not taught yet. It's in the plan, nobody has explained it to me.
- `introduced`: explained once. I heard it but haven't really used it.
- `practicing`: I've used it with help. I can do it, but I need guidance.
- `understood`: I explained it in my own words and passed a quiz. I own this.

---

## HTML

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What HTML is (structure of a page) | understood | 23 Jul 2026 | 24 Jul 2026 | My words: "HTML is the fundament, walls, stairs, and doors." On review I placed it right: a markup language (structure), not a programming language (logic) and not styling (CSS). |
| Semantic HTML (header, main, section, nav, footer) | practicing | 24 Jul 2026 | 29 Jul 2026 | I added header, main and three sections to index.html. Task 9.1: added `<footer>` for the version line. `<footer>` is semantic like `<header>`: it says what the part means (the bottom of the page content), not how it looks. |
| Headings and text hierarchy (h1–h6, p) | practicing | 24 Jul 2026 | — | Used h1 and h2 in index.html. Wrote the prayer times structure on my own. |
| Divs and sections as containers | practicing | 24 Jul 2026 | — | Used divs with classes to group prayer items. Divs are block, spans are inline. |
| Class attributes (class="...") | practicing | 24 Jul 2026 | — | Used class on the prayer-item divs. Classes let me style many elements with one CSS rule. |
| Links and navigation (a, nav) | seed | — | — | — |
| Forms and checkboxes (input, label) | practicing | 24 Jul 2026 | 24 Jul 2026 | Built the daily checklist with 5 checkboxes. `for` on the label matches the `id` on the input, so tapping the text toggles the box. On review I remembered that, and what breaks when they don't match. |
| Unordered lists (ul, li) | practicing | 24 Jul 2026 | — | Built the Surah list with 5 `<li>` in a `<ul>`. I predicted it would show plain browser bullets, and it did. |
| Images and icons (img, svg) | seed | — | — | — |
| Linking CSS to HTML (link tag) | practicing | 24 Jul 2026 | 24 Jul 2026 | I spotted that this was why the page looked plain, and added the `<link>` tag myself. |
| Linking JavaScript to HTML (script tag) | introduced | 24 Jul 2026 | — | I spotted that it was missing (though it wasn't the main reason for the plain look). |

## CSS

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What CSS is (styling/design) | introduced | 23 Jul 2026 | 24 Jul 2026 | My words: "Furniture, art, wall colors, and decoration." On review: CSS is the decoration, HTML is the fundament. |
| Selectors (class, ID, element) | understood | 24 Jul 2026 | 28 Jul 2026 | Used `body` (element), `.checklist` (class), `#quran-reader` (ID). `#` is for IDs, `.` is for classes. **Task 6.6:** I caught on my own that `#quran-reader-intro` can't match `class="quran-reader-intro"`, predicted what happens (returns null, intro stays hidden) and fixed it with `.quran-reader-intro`. I own this one. |
| CSS rules (selector + declarations) | introduced | 24 Jul 2026 | — | Wrote my first rule: `body { ... }`. Structure: selector, curly braces, property: value. |
| CSS properties (font-family, background-color, color, margin, padding) | introduced | 24 Jul 2026 | — | Used 5 properties on the body and predicted what each would change before I looked. |
| Box model (margin, padding, border) | introduced | 24 Jul 2026 | 24 Jul 2026 | I had it wrong at first: padding adds space on all four sides, not one. Saw it live on the header. I haven't really worked with margin or border as part of the box model yet. |
| Flexbox layout | practicing | 24 Jul 2026 | 24 Jul 2026 | Used `display: flex`, `flex-direction: column`, `justify-content: space-between` and `gap` for the prayer cards. I predicted that removing `flex-direction: column` puts the items in a row. On review: `gap` spaces the items in the container, `space-between` pushes the children of one item apart. Container level vs item level. |
| Grid layout | seed | — | — | — |
| Media queries (responsive breakpoints) | practicing | 24 Jul 2026 | 24 Jul 2026 | I can explain max-width vs min-width. Predicted the padding would shrink on phones. Wrote the media query with all the right rules. |
| Typography (fonts, sizes, line height) | seed | — | — | — |
| Colors and theming | seed | — | — | — |
| Mobile-first design thinking | introduced | 24 Jul 2026 | — | Talked about the idea. I used max-width (desktop-first). Mobile-first would use min-width. |
| border-radius (rounded corners) | practicing | 24 Jul 2026 | 24 Jul 2026 | 50% on a square makes a circle. I said rectangle first and got there after a hint. |
| box-shadow (drop shadows) | understood | 24 Jul 2026 | 24 Jul 2026 | Predicted that alpha 0.1 to 0.5 makes the shadow darker. Used it in the hover effect, where the shadow changes together with translateY to fake depth. |
| margin-bottom | practicing | 24 Jul 2026 | — | Used on the Qur'an `li` items for space under each card. Like `gap`, but it works without flex. |
| list-style: none | practicing | 24 Jul 2026 | — | Used on `#quran-reader ul` to remove the browser's bullets. |
| CSS pseudo-classes (:hover, :focus-visible) | introduced | 24 Jul 2026 | — | `:hover` on prayer cards, checklist items and Surah items. `:focus-visible` on checkboxes. They're selectors that switch on from what the user does, not classes I add in the HTML. |
| transform: translateY() | introduced | 24 Jul 2026 | — | `translateY(-2px)` lifts cards on hover. Negative is up, positive is down. |
| CSS transitions (animating changes) | introduced | 24 Jul 2026 | — | Added `transition` to all three card types. Predicted it would feel smoother than snapping. |
| @keyframes (defining CSS animations) | introduced | 28 Jul 2026 | — | Wrote `@keyframes pulse-green` with 0%/50%/100% for the slow green pulse on the next prayer. The percentages are points in time in one cycle. |
| CSS animation property (applying animations) | introduced | 28 Jul 2026 | — | `animation: pulse-green 3s ease-in-out infinite` on `.next-prayer`. `3s` is how long, `ease-in-out` is the smoothing, `infinite` means forever. |
| outline (focus indicator) | introduced | 24 Jul 2026 | — | Used `outline` with `outline-offset` for checkbox focus. Unlike border, outline doesn't change the layout. |
| `display: none` (hiding elements) | introduced | 28 Jul 2026 | — | `.hidden { display: none; }` hides the Surah detail view and the list. The element is gone from the page and takes no space. `visibility: hidden` hides but keeps the space. |
| `direction: rtl` (right-to-left text) | introduced | 28 Jul 2026 | — | On `.verse-arabic` so Arabic runs right to left. Needed for Arabic, Hebrew and other RTL scripts. |
| Nested selectors (header h1) | introduced | 25 Jul 2026 | — | Styling the container (header) is different from styling what's inside (h1). Added a `header h1` rule. |
| @import (loading external CSS/fonts) | introduced | 25 Jul 2026 | — | Added the Google Fonts import for Inter. It tells the browser to download the font from somewhere else before using it. |
| max-width | introduced | 25 Jul 2026 | — | On main and header so content doesn't get too wide. It caps how far an element can grow. |
| margin: 0 auto (centering) | introduced | 25 Jul 2026 | — | Centers main and header. Auto left/right margin splits the free space evenly. |
| Amiri font (Arabic web font) | introduced | 28 Jul 2026 | — | Added Amiri via `@import` and put it on `.verse-arabic` with `font-family: "Amiri", serif`. The Arabic looks clearly better in a real Arabic typeface. |
| Google Fonts (web font loading) | practicing | 25 Jul 2026 | 28 Jul 2026 | Loaded Inter via @import. A font has to be installed on the device or loaded on purpose. Writing its name isn't enough. Task 6.5: added Amiri to the same URL with `&family=Amiri`. One URL can carry several families. |

## JavaScript

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What JavaScript is (brain/logic) | introduced | 23 Jul 2026 | — | My words: "Makes things functional, the brain of the application." |
| Variables (let, const) | practicing | 25 Jul 2026 | — | `const` to keep element references from querySelector: this name won't change. `let` for the counter that changes inside a loop. |
| Data types (string, number, boolean, object, array) | seed | — | — | — |
| Functions (declaration, arrow) | introduced | 25 Jul 2026 | — | Used an anonymous function as the callback in addEventListener. It's code that only runs when something happens. |
| Conditional statements (if/else) | practicing | 25 Jul 2026 | 27 Jul 2026 | Task 4.2: `if/else` on `fajrCheckbox.checked` to swap the text. Task 4.4: an `if/else if` chain with 5 branches, one per prayer name. I predicted each branch fires on its own name. |
| Loops (for, forEach) | practicing | 27 Jul 2026 | 27 Jul 2026 | `forEach` over all checkboxes to count the checked ones and add listeners. Task 4.4: again for click listeners on the prayer-time spans. Task 4.5: again on the Surah items. My pattern now: `querySelectorAll`, then `forEach`, then do something per element. |
| DOM (what it is, why it exists) | introduced | 25 Jul 2026 | — | My words: "invisible tree the browser builds from HTML that JavaScript can reach into and change." |
| Selecting elements (getElementById, querySelector) | practicing | 25 Jul 2026 | 28 Jul 2026 | Task 5.2 review: I knew querySelectorAll returns several elements, but I mixed up the NodeList with the elements in it. Reminder to self: querySelector gives one element (has textContent). querySelectorAll gives a NodeList (needs forEach to get at each element). **Task 6.6:** caught a real bug where `#quran-reader-intro` returned `null` because nothing had that ID. The selector has to match what's actually in the HTML. |
| Changing content (textContent, innerHTML) | practicing | 25 Jul 2026 | — | `.textContent` to swap the status message and update the prayer count. It replaces all the text in the element. |
| Event listeners (click, change, input) | practicing | 25 Jul 2026 | 27 Jul 2026 | `addEventListener("change", ...)` on the Fajr checkbox. Task 4.3: change listeners on all checkboxes via forEach. Task 4.4: `"click"` on all prayer-time spans. "change" is a checkbox being toggled, "click" is any tap. |
| event.target (which element was clicked) | introduced | 27 Jul 2026 | — | Used `event.target` in a click handler to know which prayer-time span was tapped. It's the exact element I clicked. |
| parentElement (walking up the DOM tree) | practicing | 27 Jul 2026 | 27 Jul 2026 | `event.target.parentElement` in Task 4.4. Task 5.3: reused parentElement then querySelector to match each time span to its prayer name on page load, without a click. I remembered the approach without being told. |
| String concatenation (+) | practicing | 27 Jul 2026 | 27 Jul 2026 | `"Reading: " + surahName` builds a message from a variable. I cut five if/else branches down to one line once I saw they all did the same thing. |
| Array methods (map, filter, find) | seed | — | — | — |
| String manipulation | seed | — | — | — |
| Working with dates and times | practicing | 27 Jul 2026 | 27 Jul 2026 | `new Date()` to give Adhan.js today's date. Task 5.3: predicted that putting a Date object into textContent shows the long full string. Learned `.toLocaleTimeString()` to get a readable time like "2:34:00 AM". |
| Fetch API (loading JSON files) | practicing | 28 Jul 2026 | 28 Jul 2026 | Task 6.2: `fetch("data/surah.json")` to load the Surah info. Predicted the data would be an array of 114 objects. Task 6.3: used fetch again to build the list. The first `.then()` gets a Response object, the second gets the parsed array. |
| Promises (.then() chaining) | introduced | 28 Jul 2026 | — | My words: "fetch() just keeps the promise to return the data. .then() call off the promise to actually get the data." fetch returns a Promise because fetching takes time. |
| response.json() (parsing JSON) | introduced | 28 Jul 2026 | — | `response.json()` in the first .then() turns the raw response into JavaScript data. It returns another Promise that resolves to the data. |
| Array indexing (zero-based) | introduced | 28 Jul 2026 | — | I guessed `data[-1]` for the last item (Python habit). It's `data[113]`. JavaScript arrays start at 0 and have no negative index. Length minus 1 is the last one. |
| ES modules (type="module", import/export) | introduced | 27 Jul 2026 | — | Changed the script tag to type="module" and used `import * as adhan from "url"`. Modules load after the DOM is ready and can import. Classic scripts run right away and can't. |
| `new` keyword (creating objects from blueprints) | introduced | 27 Jul 2026 | — | I guessed "current" first. It's: make a fresh object from a class/blueprint. Used in `new adhan.Coordinates(...)`, `new Date()`, `new adhan.PrayerTimes(...)`. |
| `new Date()` (getting today's date) | practicing | 27 Jul 2026 | — | Gives the date at the moment the script runs, so it changes by itself every day. |
| `.toLocaleTimeString()` (formatting Date objects) | practicing | 27 Jul 2026 | 27 Jul 2026 | It returns a string. My mistake: I called it on `timeSpan` (an HTML element), not on `prayerTimes.fajr` (a Date). Date methods only work on Date objects. Then used it for all 5 prayer times. |
| `document.createElement()` (creating new elements) | practicing | 28 Jul 2026 | 28 Jul 2026 | `document.createElement("li")` for the Surah items. The element exists in memory only. It's not on the page until I append it. |
| `appendChild()` (adding elements to the DOM) | practicing | 28 Jul 2026 | 28 Jul 2026 | `surahList.appendChild(li)` puts each new `<li>` into the `<ul>`. In Task 6.4 the detail view used innerHTML. appendChild for one element, innerHTML for a batch. |
| Timing: querySelectorAll needs existing elements | introduced | 28 Jul 2026 | — | querySelectorAll at the top of my script gave an empty NodeList because the `<li>`s didn't exist yet. I moved the click setup inside `.then()`, after the loop that creates them. Elements have to be in the DOM before I can find them. |
| Dynamic list rendering (building HTML from data) | practicing | 28 Jul 2026 | 28 Jul 2026 | Replaced 5 hardcoded `<li>` with a forEach that builds all 114 from JSON. Task 6.4: built the detail view by looping over verses and joining HTML strings. The pattern: loop the data, create the element, set its content, append it. |
| `data-*` attributes (dataset property) | introduced | 28 Jul 2026 | — | `li.dataset.index = surah.index` stores the Surah index on each `<li>`, and `event.target.dataset.index` reads it back in the click handler. A way to attach my own data to an element for later. |
| `Promise.all()` (waiting for multiple fetches) | introduced | 28 Jul 2026 | — | `Promise.all([fetch(arabic), fetch(english)])` fetches both files at once and gives me both results together. Faster than one after the other. |
| `parseInt()` (converting strings to numbers) | introduced | 28 Jul 2026 | — | `parseInt(index)` turns "001" into 1 for the file path. Drops leading zeros, string becomes integer. |
| `.innerHTML` (setting element content as HTML) | introduced | 28 Jul 2026 | — | `document.getElementById("detail-verses").innerHTML = versesHTML` puts a whole batch of verses into the detail view. The string is read as HTML and replaces what was there. |
| Toggling visibility with CSS classes | introduced | 28 Jul 2026 | — | `classList.add("hidden")` hides the list, `classList.remove("hidden")` shows the detail view, and the back button does the reverse. One class controls visibility, JavaScript adds and removes it. |

## Data & Storage

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What localStorage is (browser sticky note) | practicing | 23 Jul 2026 | 29 Jul 2026 | My words: "survives page reloads, reboots, etc — regular variable JS would start at 0 and the data is gone." That's the difference to a normal variable. Task 7.1: ran setItem, getItem, removeItem and clear in the console and watched what happened. |
| What JSON is (data format) | practicing | 23 Jul 2026 | 28 Jul 2026 | Looked at three structures: surah.json (array of objects with nested juz data), surah/surah_1.json (verse object, Arabic), en_translation_1.json (verse object, English). I could name the fields in each. |
| localStorage save/load/clear (setItem, getItem, removeItem, clear) | practicing | 29 Jul 2026 | 29 Jul 2026 | Task 7.1: ran all four in the console and predicted each result first. Watched them in DevTools, Application, Local Storage. Task 7.2: wrote `localStorage.setItem(box.id, box.checked)` inside the forEach after being walked through the logic. `box.id` is the unique key, `box.checked` is the state. Saw 5 entries appear, one per checkbox. Noticed everything is stored as a string. Task 7.3: restored on page load with `getItem(box.id)` and `if (savedState === "true")`. I have to compare to the string `"true"`, not the boolean. **Task 7.5:** saving `"yes"` would break the restore, because `=== "true"` would fail. The comparison on load is what counts. |
| Restoring state from localStorage on page load | practicing | 29 Jul 2026 | 29 Jul 2026 | Task 7.3: a forEach on page load reads each saved state and applies it. I put it before `updatePrayerCount()` so the count starts right. Pattern: `getItem`, compare to `"true"`, set `box.checked`. **Task 7.5:** predicted that restoring before the daily reset would flash old data on screen before it's cleared. The order of those two blocks matters. |
| Working with dates for daily reset | practicing | 29 Jul 2026 | — | Task 7.4: `new Date().toISOString().split("T")[0]` gives a clean YYYY-MM-DD string. Compared the saved date to today's with `!==` to detect a new day. |
| Daily auto-reset pattern | practicing | 29 Jul 2026 | 29 Jul 2026 | Task 7.4: wrote the whole reset block on my own: todayString, compare with savedDate, forEach removing the old checkbox keys, save today's date. Where I slipped: I put `localStorage.setItem` outside the event listener and forgot the key. Fixed both after a hint. **Task 7.5:** tested end to end. Checks survive a refresh, setting the date to yesterday clears them, and `checklist-date` updates on page load. Talked through the past-midnight edge case. |
| Method chaining (.foo().bar().baz) | introduced | 29 Jul 2026 | — | `new Date().toISOString().split("T")[0]` is three steps in a row: make a Date, turn it into an ISO string, split at T and take the date part. `split("T")` returns an array and `[0]` takes the first item. |
| .toISOString() (converting Date to ISO format string) | introduced | 29 Jul 2026 | — | Gives `"2026-07-29T14:30:00.000Z"`. Then `.split("T")[0]` takes just the date. |
| .split() (splitting a string into an array) | introduced | 29 Jul 2026 | — | `"2026-07-29T14:30:00.000Z".split("T")` gives `["2026-07-29", "14:30:00.000Z"]`, and `[0]` is the date part. |
| Parsing JSON data | seed | — | — | — |
| Structuring data for dynamic rendering | seed | — | — | — |

## Libraries & External Code

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What a library is (pre-built code you use) | introduced | 23 Jul 2026 | — | From the Adhan.js decision: "Pre-built door vs raw wood." |
| What an API is (asking internet for data) | introduced | 23 Jul 2026 | — | Explained to me during the design decisions. |
| Using Adhan.js for prayer times | understood | 27 Jul 2026 | 28 Jul 2026 | Task 5.2: called `adhan.Coordinates()`, `adhan.CalculationMethod.MuslimWorldLeague()` and `new adhan.PrayerTimes()` and got all 6 times in the console. Task 5.3: showed the real times in the DOM. Task 5.4: used `prayerTimes.nextPrayer()` to highlight the next prayer. Task 5.5: looked into calculation methods. Only Fajr and Isha change with the method. Checked my output against gebetszeiten.io with the same method. |
| Reading library documentation | introduced | 27 Jul 2026 | — | Read the Adhan.js API to find `Coordinates`, `CalculationMethod`, `PrayerTimes` and its properties (fajr, sunrise, dhuhr, asr, maghrib, isha). |
| classList.add() (adding CSS classes from JS) | introduced | 28 Jul 2026 | — | `item.classList.add("next-prayer")` puts the class on the next prayer card. It adds a class without removing the others. |
| `.toString()` (converting values to strings) | introduced | 28 Jul 2026 | — | `.toString().toLowerCase()` turns the Adhan.js Prayer value into a lowercase string I can compare. I forgot the parentheses on `.toString()` first. Functions need `()` to run. |

### New concepts from Task 5.5

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| Calculation method affects only Fajr and Isha | understood | 28 Jul 2026 | 28 Jul 2026 | I saw that MuslimWorldLeague, Egyptian and the others only move Fajr and Isha. Dhuhr, Asr and Maghrib stay about the same. Reason: only Fajr and Isha depend on the method's angles. |
| Cross-referencing against external sources | introduced | 28 Jul 2026 | — | Compared my app to gebetszeiten.io (also MuslimWorldLeague) to check it's right. Worth doing every time. |

## Git & Version Control

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What Git is (undo for code) | introduced | 23 Jul 2026 | — | "Unlimited undo for your entire project." |
| What GitHub is (code in the cloud) | practicing | 23 Jul 2026 | 24 Jul 2026 | Made the repo on GitHub and pushed. It's at github.com/jeystack/prayer-quran-app. |
| git init | practicing | 24 Jul 2026 | — | Ran git init. Predicted that nothing visible happens. |
| git add / git commit | practicing | 24 Jul 2026 | 24 Jul 2026 | Ran `git add` and `git commit` myself. Green turning grey means the files are saved. |
| Meaningful commit messages | practicing | 24 Jul 2026 | 29 Jul 2026 | My first one: "setup the foundation for this project and my learning journey." Task 9.1: "Add version footer to index.html and break Section 9 into tasks", after talking about leaving out process talk ("to test git branching") and saying what changed. |
| git push / git pull | practicing | 24 Jul 2026 | 24 Jul 2026 | Pushed to GitHub. Hit an SSH problem, found it, fixed it, pushed. |
| SSH keys & authentication | introduced | 24 Jul 2026 | — | ssh-agent had no identities. Ran ssh-add and confirmed with `ssh -T`. |
| Branching (create, switch, merge, delete) | practicing | 29 Jul 2026 | — | My picture: "parallel timelines", two streets that merge, commits are the cars flowing onto main. Created `add-footer` with `git switch -c`, committed the footer there, switched back to `main` (predicted the footer would disappear), merged with `git merge add-footer`, deleted with `git branch -d`. I ran every command myself. Deleting a branch removes the label, not the commits. |
| git switch -c (create and switch to a new branch) | introduced | 29 Jul 2026 | — | `git switch -c add-footer` creates and switches in one go. The modern version of `git checkout -b`. |
| git merge (combining branches) | introduced | 29 Jul 2026 | — | `git merge add-footer` brought the commit onto `main`. It was a fast-forward, no conflicts, because main hadn't moved. |
| git branch -d (deleting a branch) | introduced | 29 Jul 2026 | — | `git branch -d add-footer` after merging. The pointer is gone, the commits stay because `main` reaches them. |

## PWA & Deployment

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What a PWA is (website that feels like an app) | practicing | 23 Jul 2026 | 29 Jul 2026 | Came up when scoping the project. **Task 8.1:** I explained the three pillars (manifest, service worker, HTTPS), what each does, and the "progressive" fallback. Service worker cache is controlled by me, browser HTTP cache by the browser. A missing service worker or a broken manifest fails quietly: the site still works, just without the PWA parts. |
| What deployment means (putting it on the internet) | practicing | 23 Jul 2026 | 30 Jul 2026 | Task 9.3: pushed my commits, went to Settings, Pages, switched the source to "GitHub Actions", triggered the workflow. The app went live at https://jeystack.github.io/prayer-quran-app/. The pipeline: local code, push to GitHub, workflow deploys to Pages, public URL. **Task 9.4:** checked all three sections on desktop, then on my phone. Layout and touch targets are good. Sent the link to my brother and a close friend. |
| manifest.json | practicing | 29 Jul 2026 | 29 Jul 2026 | **Task 8.1:** a JSON file that sets up the installed app: name, icons, theme color, display mode, start URL. **Task 8.3:** wrote the whole manifest myself. theme_color is the browser chrome, background_color is the splash screen. I wrote `theme-color` with a hyphen first. The manifest uses underscores. |
| Service workers (offline caching) | practicing | 29 Jul 2026 | 29 Jul 2026 | A background JS file that catches network requests, caches files and serves them offline. Different from the browser HTTP cache: I decide what goes in, when it updates and when old stuff is deleted. **Task 8.4:** wrote sw.js from scratch with install, activate and fetch. Worked out pre-cache vs on-demand caching on my own. Predicted that cache.addAll fails completely if one file is missing. Saw that caches.keys() returns a Promise because of the .then(). |
| HTTPS requirement for PWAs | practicing | 29 Jul 2026 | 29 Jul 2026 | Explained the rule in Task 8.1. Task 8.5: registered the service worker through Live Preview (localhost). Localhost counts as secure, a file:// URL fails silently. IE 10 would skip the whole block because `"serviceWorker" in navigator` is false. |
| GitHub Pages setup | introduced | 30 Jul 2026 | — | Settings, Pages, source from "Deploy from a branch" to "GitHub Actions", then ran the workflow by hand with the workflow_dispatch button. GitHub Pages publishes a folder (`app/`) to a public URL. |
| PWA icon sizes (192x192, 512x512) | introduced | 29 Jul 2026 | — | The manifest needs PNGs at 192x192 and 512x512. Different places on the device use different sizes, and `sizes` tells the OS which is which. |
| manifest field: theme_color vs background_color | introduced | 29 Jul 2026 | — | I guessed theme_color is the browser chrome / app window and background_color is the splash screen. Both right. |
| manifest field: display (standalone) | practicing | 29 Jul 2026 | 30 Jul 2026 | `display: "standalone"` removes the URL bar and tabs so the app opens in its own window. **Task 9.4:** on iOS, Safari's "Open as Web App" toggle was already on when I added it to the home screen, so iOS respects it. |
| manifest field: icons (src, sizes, type) | introduced | 29 Jul 2026 | — | Two entries, 192x192 and 512x512. `src` is the relative path, `sizes` says which to use where, `type` is the format. |
| JSON underscores in manifest spec | introduced | 29 Jul 2026 | — | I wrote `theme-color` (HTML/CSS habit). It's `theme_color`. Manifest property names use underscores, not kebab-case. |
| Service worker registration (navigator.serviceWorker.register) | introduced | 29 Jul 2026 | — | `navigator.serviceWorker.register("sw.js")` at the bottom of main.js tells the browser to download and start the service worker. `"serviceWorker" in navigator` guards it, so old browsers skip the block. Saw "Service worker registered!" in the console. |
| Feature detection (property in object) | introduced | 29 Jul 2026 | — | `"serviceWorker" in navigator` checks whether the property exists and gives true/false without crashing. |
| Manifest link tag (<link rel="manifest">) | introduced | 29 Jul 2026 | — | `<link rel="manifest" href="manifest.json">` in the `<head>`. Same kind of tag as the stylesheet link. It's how the browser finds the manifest. |
| Cache API (caches.open, caches.match, cache.addAll, cache.put, caches.keys, caches.delete) | introduced | 29 Jul 2026 | — | `caches.open(CACHE_NAME)` opens or creates a cache, `cache.addAll([...])` pre-caches a list, `caches.match(event.request)` looks up a cached response, `cache.put(request, clone)` stores one on demand, `caches.keys()` lists all caches, `caches.delete(name)` removes one. |
| event.waitUntil vs event.respondWith | introduced | 29 Jul 2026 | — | `waitUntil` holds the event open until a Promise is done (install and activate, for setup and cleanup). `respondWith` gives my own response to a request I intercepted (fetch). |
| Cache-first strategy | introduced | 29 Jul 2026 | — | Check the cache first. If it's there, return it. If not, go to the network. |
| On-demand (runtime) caching | introduced | 29 Jul 2026 | — | For `data/` requests in the fetch handler: on a cache miss that works over the network, clone the response and store it with `cache.put()`. |
| Cache versioning with CACHE_NAME | introduced | 29 Jul 2026 | — | `const CACHE_NAME = "prayer-quran-v1"` at the top of sw.js. A new name (like "v2") makes a new cache next to the old one, and the activate handler deletes every cache that isn't the current name. |
| Service worker lifecycle (install → activate → fetch) | introduced | 29 Jul 2026 | — | install runs first (setup), activate next (cleanup, takes control), fetch runs again and again for every request. |
| Response.clone() (duplicating fetch responses) | introduced | 29 Jul 2026 | — | `networkResponse.clone()` in the fetch handler. A Response body can only be read once: the page uses the original, the cache stores the clone. |

## CI/CD & Deployment Automation

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What CI/CD is (Continuous Integration / Deployment) | introduced | 29 Jul 2026 | — | A robot on GitHub's servers that runs steps every time I push. CI checks nothing is broken, CD puts it live. |
| What GitHub Actions is (automated workflows on GitHub) | introduced | 29 Jul 2026 | — | The robot waits for instructions: a trigger (push to main), then steps (checkout, upload, deploy). |
| What YAML is (human-friendly config format) | introduced | 29 Jul 2026 | — | Like JSON, same data, easier to read. Rules: indentation matters (no tabs), `key: value` with a space, `- item` for lists, `#` for comments. |
| Workflow file structure (trigger → permissions → job → steps) | introduced | 29 Jul 2026 | — | `on:` is what starts it, `permissions:` is what it's allowed to do, `jobs:` is what it does, `steps:` are the single actions. |
| Workflow triggers (push vs workflow_dispatch) | introduced | 29 Jul 2026 | 30 Jul 2026 | push runs by itself when I push to main. workflow_dispatch adds a "Run workflow" button in the Actions tab. Task 9.3: I used that button for the first deploy. |
| actions/checkout (downloads repo to runner) | introduced | 29 Jul 2026 | — | Downloads my repo onto GitHub's server so the next steps can see the files. |
| actions/configure-pages (prepares GitHub Pages for deployment) | introduced | 29 Jul 2026 | — | Sets up the Pages environment so the deploy step knows where to publish. |
| actions/upload-pages-artifact (uploads files as deployable artifact) | introduced | 29 Jul 2026 | — | Zips a folder and hands it to Pages. `path: 'app'` says which folder. |
| actions/deploy-pages (publishes artifact to live Pages URL) | introduced | 29 Jul 2026 | — | Takes the uploaded artifact and publishes it to the live URL. `id: deployment` connects to `${{ steps.deployment.outputs.page_url }}` in the environment block. |

## Images & Media

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What SVG is (vector image format) | introduced | 29 Jul 2026 | — | My words: "svg can be scaled". It's made of math (curves, lines, coordinates), so it stays sharp at any size. Like a blueprint I can print at any size. |
| What PNG is (raster image format) | introduced | 29 Jul 2026 | — | My words: "png is a plain image". A fixed grid of pixels that gets blurry when scaled up. Like a photo at one resolution. |
| SVG as design source vs PNG for runtime | introduced | 29 Jul 2026 | — | The SVG is the master I can edit. PNGs at fixed sizes are what the app, browser and OS actually use. |
| File extension vs actual format | introduced | 29 Jul 2026 | — | My `app-icon-192x192.png` was really SVG content with a `.png` name. Renaming changes the extension, not the bytes. `file` shows the real format. |

## Terminal & Command Line

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| `mv` command (rename/move files) | practicing | 29 Jul 2026 | — | Predicted that `mv` renames. Used it to rename the generated PNGs from `app-icon.svg.png` to clean names. |
| `rm` command (delete files) | introduced | 29 Jul 2026 | — | `rm app/images/app-icon-192x192.png` to delete the misnamed file. Deleted for good, no trash bin. |
| `file` command (check file type) | introduced | 29 Jul 2026 | — | Found out a `.png` file was really SVG. It reads the file's first bytes (the signature), not the extension. |
| `qlmanage` (QuickLook thumbnail generator) | introduced | 29 Jul 2026 | — | `qlmanage -t -s 192 -o output_dir source.svg` makes a PNG from an SVG at a given size. Quirk: the output is always named `{input_filename}.png`. |
| `sips` (scriptable image processing) | introduced | 29 Jul 2026 | — | `sips -g pixelWidth -g pixelHeight file` to check the PNG's size after generating it. |

## AI-Era Engineering Practice

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| Writing a plan before building | introduced | 23 Jul 2026 | — | plan.md is the result. |
| Reviewing a diff (seeing what changed) | seed | — | — | — |
| Agent memory files (how AI remembers context) | introduced | 23 Jul 2026 | — | This file is one. |
| Knowledge graphs for tracking learning | introduced | 23 Jul 2026 | — | I asked for this, so I know why it exists. |
| File maps for project transparency | introduced | 23 Jul 2026 | — | I asked for this, so I know why it exists. |
| Scoping an MVP (what's in, what's parked) | introduced | 23 Jul 2026 | — | Split the features into MVP and parking lot. |
| Browser cache / hard refresh | practicing | 28 Jul 2026 | 31 Jul 2026 | Task 6.6: I fixed a bug in main.js and the old behavior stayed, because the browser was using a cached copy. Cmd+Shift+R (hard refresh) forces a reload. **Task 8.1:** a hard refresh bypasses the cache, it doesn't delete it. Browser HTTP cache is the browser's, service worker cache is mine. **verse_0 bug, 31 Jul 2026:** the worst one so far. The Sources tab showed an old main.js even after editing and refreshing. Real cause: I was testing the deployed GitHub Pages URL the whole time, not my local server. Cache Storage showed the origin was the live site, not localhost. Lesson: check which URL I'm actually on before deciding my fix is wrong. |
| Diagnosing a "click does nothing" bug systematically | introduced | 31 Jul 2026 | — | verse_0 bug: went down the whole ladder. Console filters, service worker status, Cache Storage origin, Network tab (status and initiator), Sources tab (the file actually served). If there's no console output at all, the handler never runs or throws before its first line. That's different from output hidden by a filter. |
| Temporal Dead Zone (referencing `const`/`let` before declaration) | introduced | 31 Jul 2026 | — | I put `console.log("CLICKED", index)` one line above `const index = ...` and got `ReferenceError: Cannot access 'index' before initialization`. `const` and `let` can't be used before their line runs. It throws, it doesn't give `undefined` like `var`. |
| Silent module failure from a bad import | introduced | 31 Jul 2026 | — | Found a stray `import { createElement } from "react";` at the top of main.js that I never committed. The browser can't resolve that without a bundler, and because main.js is a module, that one line stopped the whole file: no prayer times, no Surah list, nothing. How to spot it: check whether even the first lines of the script ran. |
| `git log -p` / `git diff HEAD` to check if a suspicious line was ever committed | introduced | 31 Jul 2026 | — | `git log --all --oneline -- app/js/main.js` and `git diff HEAD -- app/js/main.js` showed the `react` import was never committed. It only lived in my working copy, so it was a local accident (probably an IDE autocomplete), not an old commit. |

---

*Last updated: 4 October 2026 (wording only, no status changes).*

*31 July 2026: found and fixed the verse_0/Bismillah bug (missing from 112 of 114 Surahs), styled it like a real Mushaf, and got through a rough debugging detour: wrong URL, stale service worker cache, and a stray `react` import killing the whole script.*

*30 July 2026: all 9 sections done. Final commit: "From a little Idea to something that could help many muslims." I built a full PWA from scratch: prayer times with Adhan.js, a Qur'an reader with 114 Surahs in Arabic and English, a daily checklist with localStorage, offline support with a service worker, live on GitHub Pages.*
