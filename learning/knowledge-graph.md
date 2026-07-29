# Knowledge Graph

Living map of what I actually know. Updated after every lesson.
Statuses only upgrade on evidence of something I actually said or did.

**Statuses:**
- `seed` — Not yet taught. Exists in the plan, hasn't been explained.
- `introduced` — Explained once. I heard it but haven't used it yet.
- `practicing` — Used it with help. I can do it but need guidance.
- `understood` — Explained in my own words and passed a quiz. I own this.

---

## HTML

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What HTML is (structure of a page) | understood | 23 Jul 2026 | 24 Jul 2026 | Explained back: "HTML is the fundament, walls, stairs, and doors." Refreshed: correctly identified as markup language (structure), not programming language (logic) and not styling (CSS). |
| Semantic HTML (header, main, section, nav) | practicing | 24 Jul 2026 | — | Added header, main, and three section tags to index.html. Understood that semantic tags give meaning to content, not visual style. |
| Headings and text hierarchy (h1–h6, p) | practicing | 24 Jul 2026 | — | Used h1 and h2 in index.html. Wrote prayer times structure independently. |
| Divs and sections as containers | practicing | 24 Jul 2026 | — | Used divs with classes to group prayer items. Understood block vs inline behavior of divs vs spans. |
| Class attributes (class="...") | practicing | 24 Jul 2026 | — | Used class on prayer-item divs. Correctly explained: classes let you style many elements with one CSS rule. |
| Links and navigation (a, nav) | seed | — | — | — |
| Forms and checkboxes (input, label) | practicing | 24 Jul 2026 | 24 Jul 2026 | Built the daily checklist with 5 checkbox items. Correctly explained that `for` on the label matches the `id` on the input so clicking the text toggles the box. Reviewed: correctly recalled what `for`/`id` matching does and what breaks when they don't match. |
| Unordered lists (ul, li) | practicing | 24 Jul 2026 | — | Built the Surah list with 5 `<li>` items inside a `<ul>`. Correctly predicted the list would appear with default browser styling (plain bullets, no custom colors). |
| Images and icons (img, svg) | seed | — | — | — |
| Linking CSS to HTML (link tag) | practicing | 24 Jul 2026 | 24 Jul 2026 | Correctly identified this is why the page looks plain. Added the `<link>` tag to index.html myself. |
| Linking JavaScript to HTML (script tag) | introduced | 24 Jul 2026 | — | Correctly identified this is missing (though not the main reason for plain look). |

## CSS

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What CSS is (styling/design) | introduced | 23 Jul 2026 | 24 Jul 2026 | Explained back: "Furniture, art, wall colors, and decoration." Refreshed: correctly contrasted CSS (styling/decoration) vs HTML (structure/fundament). |
| Selectors (class, ID, element) | understood | 24 Jul 2026 | 28 Jul 2026 | Used `body` as element selector, `.checklist` as class selector, `#quran-reader` as ID selector. Correctly explained: `#` targets IDs, `.` targets classes. **Task 6.6:** independently identified that `#quran-reader-intro` (ID selector) wouldn't match `class="quran-reader-intro"` — caught the mismatch, correctly predicted the behavior (returns null, intro text stays hidden), and applied the fix (`.quran-reader-intro`). Owns this distinction. |
| CSS rules (selector + declarations) | introduced | 24 Jul 2026 | — | Wrote my first CSS rule: `body { ... }`. Understood the structure: selector → curly braces → property: value. |
| CSS properties (font-family, background-color, color, margin, padding) | introduced | 24 Jul 2026 | — | Used 5 properties to style the body. Predicted what each would change before seeing it. |
| Box model (margin, padding, border) | introduced | 24 Jul 2026 | 24 Jul 2026 | Corrected own misconception: padding adds space on all four sides, not just one direction. Observed it live in the header styling. Haven't worked with margin or border as part of the box model yet. |
| Flexbox layout | practicing | 24 Jul 2026 | 24 Jul 2026 | Used `display: flex`, `flex-direction: column`, `justify-content: space-between`, and `gap` to lay out prayer cards. Correctly predicted that removing `flex-direction: column` would make items go horizontal. Reviewed: correctly recalled that `gap` spaces items in the container and `space-between` pushes children apart within a flex item. Distinguished between container-level and item-level flex behavior. |
| Grid layout | seed | — | — | — |
| Media queries (responsive breakpoints) | practicing | 24 Jul 2026 | 24 Jul 2026 | Correctly explained max-width vs min-width. Correctly predicted that padding would shrink on phones. Wrote the media query with all correct rules. |
| Typography (fonts, sizes, line height) | seed | — | — | — |
| Colors and theming | seed | — | — | — |
| Mobile-first design thinking | introduced | 24 Jul 2026 | — | Discussed the concept. Used max-width (desktop-first approach) today; mobile-first uses min-width instead. |
| border-radius (rounded corners) | practicing | 24 Jul 2026 | 24 Jul 2026 | Correctly answered that 50% on a square makes a circle (initially said rectangle, corrected after prompting). |
| box-shadow (drop shadows) | understood | 24 Jul 2026 | 24 Jul 2026 | Correctly predicted that changing alpha from 0.1 to 0.5 makes the shadow darker. Used in compound hover effect (shadow changes with translateY to simulate depth). |
| margin-bottom | practicing | 24 Jul 2026 | — | Used on Qur'an `li` items to add space below each card. Understood it's like `gap` but works on non-flex containers — adds space below each element. |
| list-style: none | practicing | 24 Jul 2026 | — | Used on `#quran-reader ul` to remove default browser bullets from the Surah list. |
| CSS pseudo-classes (:hover, :focus-visible) | introduced | 24 Jul 2026 | — | Used `:hover` on prayer cards, checklist items, and Qur'an list items. Used `:focus-visible` on checkboxes. Understood that pseudo-classes are selectors that activate based on user interaction, not classes you add in HTML. |
| transform: translateY() | introduced | 24 Jul 2026 | — | Used `translateY(-2px)` to lift cards on hover. Understood it moves an element vertically — negative values go up, positive go down. |
| CSS transitions (animating changes) | introduced | 24 Jul 2026 | — | Added `transition` to all three card types. Correctly predicted the effect would feel smoother than instant snapping. |
| @keyframes (defining CSS animations) | introduced | 28 Jul 2026 | — | Defined `@keyframes pulse-green` with 0%/50%/100% states to create a slow green pulse on the next prayer card. Correctly identified that percentages represent points in time during one animation cycle. |
| CSS animation property (applying animations) | introduced | 28 Jul 2026 | — | Used `animation: pulse-green 3s ease-in-out infinite` to attach the keyframe animation to `.next-prayer`. Understood that `3s` is duration, `ease-in-out` is smoothing, `infinite` means repeat forever. |
| outline (focus indicator) | introduced | 24 Jul 2026 | — | Used `outline` with `outline-offset` on checkbox focus state. Understood it's different from border — outline doesn't affect layout. |
| `display: none` (hiding elements) | introduced | 28 Jul 2026 | — | Used `.hidden { display: none; }` to hide the Surah detail view and list by default. Understood it removes the element from the page entirely — it takes up no space, unlike `visibility: hidden` which hides but keeps the space. |
| `direction: rtl` (right-to-left text) | introduced | 28 Jul 2026 | — | Used `direction: rtl` on `.verse-arabic` to render Arabic text right-to-left. Understood it changes the text direction, which is essential for Arabic, Hebrew, and other RTL scripts. |
| Nested selectors (header h1) | introduced | 25 Jul 2026 | — | Correctly explained difference between styling the container (header) vs the element inside (h1). Added `header h1` rule to style heading inside header. |
| @import (loading external CSS/fonts) | introduced | 25 Jul 2026 | — | Added Google Fonts import for Inter. Understood it tells the browser to download a font from an external source before applying styles. |
| max-width | introduced | 25 Jul 2026 | — | Added max-width to main and header to cap content width. Understood it limits how wide an element can grow. |
| margin: 0 auto (centering) | introduced | 25 Jul 2026 | — | Used margin auto to center main and header horizontally. Understood auto left/right margin distributes space equally on both sides. |
| Amiri font (Arabic web font) | introduced | 28 Jul 2026 | — | Added Amiri from Google Fonts via `@import` — applied it to `.verse-arabic` with `font-family: "Amiri", serif`. Observed the Arabic text looks noticeably better with a proper Arabic typeface. |
| Google Fonts (web font loading) | practicing | 25 Jul 2026 | 28 Jul 2026 | Loaded Inter from Google Fonts via @import. Understood fonts must be either installed on the system or explicitly loaded — writing the name alone isn't enough. Task 6.5: added a second font (Amiri) to the same @import URL with `&family=Amiri` — Google Fonts supports multiple families in one URL, separated by `&family=`. |

## JavaScript

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What JavaScript is (brain/logic) | introduced | 23 Jul 2026 | — | Explained back: "Makes things functional, the brain of the application." |
| Variables (let, const) | practicing | 25 Jul 2026 | — | Used `const` to store element references from querySelector. Understood const means "this name won't change." Also used `let` for a counter variable that changes inside a loop — understood `let` is for values that will be reassigned. |
| Data types (string, number, boolean, object, array) | seed | — | — | — |
| Functions (declaration, arrow) | introduced | 25 Jul 2026 | — | Used an anonymous function as a callback in addEventListener. Understood it's code that only runs when something happens. |
| Conditional statements (if/else) | practicing | 25 Jul 2026 | 27 Jul 2026 | Task 4.2: used `if/else` to check `fajrCheckbox.checked` and swap text. Task 4.4: used `if/else if` chain (5 branches) to map each prayer name to its own time — correctly predicted that each branch fires independently based on the prayer name. |
| Loops (for, forEach) | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `forEach` to loop through all checkboxes — count checked ones and add event listeners to each. Task 4.4: used `forEach` again to add click listeners to all prayer-time spans. Task 4.5: same pattern on Surah list items. Consistent pattern now: `querySelectorAll` → `forEach` → action per element. |
| DOM (what it is, why it exists) | introduced | 25 Jul 2026 | — | Explained: "invisible tree the browser builds from HTML that JavaScript can reach into and change." |
| Selecting elements (getElementById, querySelector) | practicing | 25 Jul 2026 | 28 Jul 2026 | Task 5.2 review: correctly explained that querySelectorAll returns multiple elements. Struggled to articulate that a NodeList doesn't have `.textContent` directly — confused it with the elements inside. Refresher given: querySelector → single element (has textContent), querySelectorAll → NodeList (needs forEach to access each element). **Task 6.6:** caught a real bug where `#quran-reader-intro` returned `null` because no element had that ID — correctly identified that class selectors (`.class`) vs ID selectors (`#id`) in `querySelector` must match what's actually in the HTML. |
| Changing content (textContent, innerHTML) | practicing | 25 Jul 2026 | — | Used `.textContent` to swap the status message text on checkbox change and to update the prayer count display. Understood it replaces all text inside the element. |
| Event listeners (click, change, input) | practicing | 25 Jul 2026 | 27 Jul 2026 | Used `addEventListener("change", ...)` on Fajr checkbox. Task 4.3: added change listeners to all checkboxes via forEach. Task 4.4: used `addEventListener("click", ...)` on all prayer-time spans via forEach — correctly distinguished between "change" (checkbox toggled) and "click" (any tap). |
| event.target (which element was clicked) | introduced | 27 Jul 2026 | — | Used `event.target` inside a click handler to identify which prayer-time span was tapped. Correctly understood it refers to the specific element the user clicked on. |
| parentElement (walking up the DOM tree) | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `event.target.parentElement` in Task 4.4. Task 5.3: reused the same parentElement → querySelector pattern to match each prayer-time span to its name on page load (without a click event). Correctly recalled the approach without prompting. |
| String concatenation (+) | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `"Reading: " + surahName` to build a message from a variable. Simplified five if/else branches into one line by recognizing the pattern was the same each time. |
| Array methods (map, filter, find) | seed | — | — | — |
| String manipulation | seed | — | — | — |
| Working with dates and times | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `new Date()` to pass today's date to Adhan.js. Task 5.3: correctly predicted that setting textContent to a Date object shows the full long string. Learned and applied `.toLocaleTimeString()` to format Date objects as readable time strings like "2:34:00 AM". |
| Fetch API (loading JSON files) | practicing | 28 Jul 2026 | 28 Jul 2026 | Task 6.2: used `fetch("data/surah.json")` to load Qur'an metadata. Correctly predicted data would be an array of 114 objects. Task 6.3: reused fetch to load metadata and build a dynamic list from the parsed data. Correctly identified that the first `.then()` gives a Response object and the second gives the parsed array. |
| Promises (.then() chaining) | introduced | 28 Jul 2026 | — | Explained why fetch uses .then(): "fetch() just keeps the promise to return the data. .then() call off the promise to actually get the data." Correctly identified that fetch returns a Promise because fetching takes time. |
| response.json() (parsing JSON) | introduced | 28 Jul 2026 | — | Used `response.json()` inside the first .then() to parse the raw response into JavaScript data. Understood it returns another Promise that resolves to the actual data. |
| Array indexing (zero-based) | introduced | 28 Jul 2026 | — | Initially guessed `data[-1]` for last item (Python-style), corrected to `data[113]` — JavaScript arrays are zero-indexed with no negative indexing. Correctly identified that length - 1 gives the last index. |
| ES modules (type="module", import/export) | introduced | 27 Jul 2026 | — | Changed script tag to type="module" and used `import * as adhan from "url"` to load Adhan.js. Understood modules load after DOM is ready and can import from URLs. Distinguished from classic scripts which run immediately and can't use import. |
| `new` keyword (creating objects from blueprints) | introduced | 27 Jul 2026 | — | Initially guessed "current", corrected to: `new` tells JavaScript to create a fresh object from a class/blueprint. Used `new adhan.Coordinates(...)`, `new Date()`, `new adhan.PrayerTimes(...)`. |
| `new Date()` (getting today's date) | practicing | 27 Jul 2026 | — | Correctly explained: gives the current date whenever the script runs — changes automatically each day. |
| `.toLocaleTimeString()` (formatting Date objects) | practicing | 27 Jul 2026 | 27 Jul 2026 | Correctly identified it returns a string. Initially called it on `timeSpan` (an HTML element) instead of `prayerTimes.fajr` (a Date object) — corrected after explanation that Date methods must be called on Date objects. Applied it successfully to format all 5 prayer times. |
| `document.createElement()` (creating new elements) | practicing | 28 Jul 2026 | 28 Jul 2026 | Used `document.createElement("li")` to create new list items from JSON data. Task 6.4: reused the same pattern (though detail view uses innerHTML instead). Understood it creates an element in memory — not on the page yet until appended. |
| `appendChild()` (adding elements to the DOM) | practicing | 28 Jul 2026 | 28 Jul 2026 | Used `surahList.appendChild(li)` to add each created `<li>` to the `<ul>`. Task 6.4: detail view content added via innerHTML instead (many elements at once). Understood both approaches — appendChild for one element, innerHTML for a batch. |
| Timing: querySelectorAll needs existing elements | introduced | 28 Jul 2026 | — | Discovered that querySelectorAll at the top of the script returned an empty NodeList because the dynamic `<li>` elements didn't exist yet. Moved the click handler setup inside `.then()` after the loop that creates elements — understood elements must exist in the DOM before querySelectorAll can find them. |
| Dynamic list rendering (building HTML from data) | practicing | 28 Jul 2026 | 28 Jul 2026 | Replaced 5 hardcoded `<li>` items with a forEach loop that builds all 114 from JSON data. Task 6.4: built detail view by looping through verses and concatenating HTML strings. Understood the pattern: loop through data → create element → set content → append to parent. |
| `data-*` attributes (dataset property) | introduced | 28 Jul 2026 | — | Used `li.dataset.index = surah.index` to store the Surah index on each `<li>`, then read it back with `event.target.dataset.index` in the click handler. Understood data attributes let you attach custom data to HTML elements for JavaScript to use later. |
| `Promise.all()` (waiting for multiple fetches) | introduced | 28 Jul 2026 | — | Used `Promise.all([fetch(arabic), fetch(english)])` to fetch both Arabic and English JSON files simultaneously. Understood it waits for all promises in the array to resolve, then returns all results together — faster than fetching one at a time. |
| `parseInt()` (converting strings to numbers) | introduced | 28 Jul 2026 | — | Used `parseInt(index)` to convert the Surah index string "001" to the number 1 for file paths. Understood it strips leading zeros and converts a string to an integer. |
| `.innerHTML` (setting element content as HTML) | introduced | 28 Jul 2026 | — | Used `document.getElementById("detail-verses").innerHTML = versesHTML` to insert a batch of verse elements into the detail view. Understood it parses the string as HTML and replaces the element's content — useful when building many elements at once. |
| Toggling visibility with CSS classes | introduced | 28 Jul 2026 | — | Used `classList.add("hidden")` to hide the list and `classList.remove("hidden")` to show the detail view (and vice versa for the back button). Understood the pattern: one class controls visibility, JavaScript adds/remaps it to toggle. |

## Data & Storage

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What localStorage is (browser sticky note) | practicing | 23 Jul 2026 | 29 Jul 2026 | Explained: "survives page reloads, reboots, etc — regular variable JS would start at 0 and the data is gone." Correctly identified the key difference between localStorage and regular variables. Task 7.1: ran setItem, getItem, removeItem, and clear in the browser console and observed the results in real time. |
| What JSON is (data format) | practicing | 23 Jul 2026 | 28 Jul 2026 | Examined three different JSON structures: surah.json (array of objects with nested juz data), surah/surah_1.json (verse object with Arabic text), and en_translation_1.json (verse object with English text). Correctly identified fields in each. |
| localStorage save/load/clear (setItem, getItem, removeItem, clear) | practicing | 29 Jul 2026 | 29 Jul 2026 | Task 7.1: ran all four localStorage methods in the Console — setItem("name", "Jeremy") stored a value, getItem("name") returned it, removeItem("name") deleted it, clear() wiped everything. Inspected results live in DevTools Application → Storage → Local Storage. Correctly predicted each method's behavior before running it. Task 7.2: independently wrote `localStorage.setItem(box.id, box.checked)` inside the forEach loop after being guided through the logic — correctly identified that `box.id` gives the unique key per checkbox and `box.checked` gives the state. Tested in browser — verified 5 entries appeared in localStorage, one per checkbox. Noticed localStorage stores everything as strings. Task 7.3: restored checkbox states on page load — wrote `const savedState = localStorage.getItem(box.id)` to read saved values, then `if (savedState === "true") { box.checked = true; }` to apply them. Correctly identified that comparing to the string `"true"` (not the boolean) is necessary because localStorage stores everything as strings. |
| Restoring state from localStorage on page load | practicing | 29 Jul 2026 | — | Task 7.3: added a forEach loop that runs on page load to read each checkbox's saved state and apply it. Correctly placed the restore block before `updatePrayerCount()` so the prayer count starts accurate. Used the pattern: `getItem` → compare to `"true"` → set `box.checked`. |
| Working with dates for daily reset | practicing | 29 Jul 2026 | — | Task 7.4: used `new Date().toISOString().split("T")[0]` to get a clean YYYY-MM-DD date string for daily reset comparison. Compared saved date string to today's date string with `!==` to detect a new day. |
| Daily auto-reset pattern | practicing | 29 Jul 2026 | — | Task 7.4: wrote the full daily reset block independently — todayString chain, savedDate comparison, forEach loop removing old checkbox keys, and saving today's date. Struggled slightly with the second part: initially placed `localStorage.setItem` outside the event listener and omitted the key argument — corrected both after guidance. |
| Method chaining (.foo().bar().baz) | introduced | 29 Jul 2026 | — | Used `new Date().toISOString().split("T")[0]` — three operations chained: create Date, convert to ISO string, split at T and grab the date part. Correctly recalled that `split("T")` returns an array and `[0]` picks the first element. |
| .toISOString() (converting Date to ISO format string) | introduced | 29 Jul 2026 | — | Used `.toISOString()` as part of the date chain to get `"2026-07-29T14:30:00.000Z"` format. Understood that `.split("T")[0]` then extracts just the date portion. |
| .split() (splitting a string into an array) | introduced | 29 Jul 2026 | — | Used `"2026-07-29T14:30:00.000Z".split("T")` to split an ISO date string at the T separator. Correctly identified that the result is an array `["2026-07-29", "14:30:00.000Z"]` and that `[0]` selects the date part. |
| Parsing JSON data | seed | — | — | — |
| Structuring data for dynamic rendering | seed | — | — | — |

## Libraries & External Code

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What a library is (pre-built code you use) | introduced | 23 Jul 2026 | — | Explained during Adhan.js decision: "Pre-built door vs raw wood." |
| What an API is (asking internet for data) | introduced | 23 Jul 2026 | — | Explained during design decisions. |
| Using Adhan.js for prayer times | understood | 27 Jul 2026 | 28 Jul 2026 | Task 5.2: successfully called `adhan.Coordinates()`, `adhan.CalculationMethod.MuslimWorldLeague()`, and `new adhan.PrayerTimes()` to calculate and display all 6 prayer times in the console. Task 5.3: displayed real calculated prayer times in the DOM. Task 5.4: used `prayerTimes.nextPrayer()` to find the next upcoming prayer and highlight it in the DOM. Task 5.5: investigated calculation method differences — correctly identified that only Fajr and Isha are affected by the method, verified output against external source (gebetszeiten.io) using the same calculation method. |
| Reading library documentation | introduced | 27 Jul 2026 | — | Read Adhan.js API to find `Coordinates`, `CalculationMethod`, and `PrayerTimes` classes and their properties (fajr, sunrise, dhuhr, asr, maghrib, isha). |
| classList.add() (adding CSS classes from JS) | introduced | 28 Jul 2026 | — | Used `item.classList.add("next-prayer")` to dynamically add a CSS class to the next prayer card. Understood it adds a class without removing existing ones. |
| `.toString()` (converting values to strings) | introduced | 28 Jul 2026 | — | Used `.toString().toLowerCase()` to convert the Adhan.js Prayer enum to a lowercase string for comparison. Initially forgot parentheses on `.toString()` — debugging taught that functions need `()` to run. |

### New concepts — Task 5.5

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| Calculation method affects only Fajr and Isha | understood | 28 Jul 2026 | 28 Jul 2026 | Observed that MuslimWorldLeague, Egyptian, and other methods only changed Fajr and Isha times — Dhuhr, Asr, Maghrib stayed essentially the same. Correctly identified this is because only Fajr and Isha depend on the method's angles. |
| Cross-referencing against external sources | introduced | 28 Jul 2026 | — | Compared app output against gebetszeiten.io (which also uses MuslimWorldLeague) to verify correctness. Good engineering practice. |

## Git & Version Control

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What Git is (undo for code) | introduced | 23 Jul 2026 | — | Explained: "Unlimited undo for your entire project." |
| What GitHub is (code in the cloud) | practicing | 23 Jul 2026 | 24 Jul 2026 | Created repo on GitHub, pushed code, can see it at github.com/jeystack/prayer-quran-app. |
| git init | practicing | 24 Jul 2026 | — | Ran git init, correctly predicted nothing visible happens. |
| git add / git commit | practicing | 24 Jul 2026 | 24 Jul 2026 | Ran `git add` and `git commit` myself, understood green→grey means files are saved. |
| Meaningful commit messages | practicing | 24 Jul 2026 | 24 Jul 2026 | Wrote my own commit message: "setup the foundation for this project and my learning journey." |
| git push / git pull | practicing | 24 Jul 2026 | 24 Jul 2026 | Pushed code to GitHub, diagnosed SSH issue, fixed it, and pushed successfully. |
| SSH keys & authentication | introduced | 24 Jul 2026 | — | Discovered ssh-agent had no identities, ran ssh-add, confirmed connection with `ssh -T`. |
| Branching | seed | — | — | — |

## PWA & Deployment

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What a PWA is (website that feels like an app) | introduced | 23 Jul 2026 | — | Discussed during project scoping. |
| What deployment means (putting it on the internet) | introduced | 23 Jul 2026 | — | Explained: "Taking files from laptop to a public website." |
| manifest.json | seed | — | — | — |
| Service workers (offline caching) | seed | — | — | — |
| GitHub Pages setup | seed | — | — | — |

## AI-Era Engineering Practice

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| Writing a plan before building | introduced | 23 Jul 2026 | — | We did this together — plan.md is the result. |
| Reviewing a diff (seeing what changed) | seed | — | — | — |
| Agent memory files (how AI remembers context) | introduced | 23 Jul 2026 | — | This file (knowledge-graph.md) is an example. |
| Knowledge graphs for tracking learning | introduced | 23 Jul 2026 | — | You asked for this — you understand why it exists. |
| File maps for project transparency | introduced | 23 Jul 2026 | — | You asked for this — you understand why it exists. |
| Scoping an MVP (what's in, what's parked) | introduced | 23 Jul 2026 | — | We split features into MVP and parking lot together. |
| Browser cache / hard refresh | introduced | 28 Jul 2026 | — | Task 6.6: after fixing a bug in main.js, the old behavior persisted because the browser was loading a cached version. Learned to use Cmd+Shift+R (hard refresh) to force the browser to reload files from disk. Understood that browsers cache scripts to speed up load times, but this can hide recent changes during development. |

---

*Last updated: 29 July 2026 — Task 7.1 done (localStorage console exploration)*
