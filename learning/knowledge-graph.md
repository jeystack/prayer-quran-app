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
| Selectors (class, ID, element) | practicing | 24 Jul 2026 | 24 Jul 2026 | Used `body` as element selector, `.checklist` as class selector, `#quran-reader` as ID selector. Correctly explained: `#` targets IDs, `.` targets classes. |
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
| outline (focus indicator) | introduced | 24 Jul 2026 | — | Used `outline` with `outline-offset` on checkbox focus state. Understood it's different from border — outline doesn't affect layout. |
| Nested selectors (header h1) | introduced | 25 Jul 2026 | — | Correctly explained difference between styling the container (header) vs the element inside (h1). Added `header h1` rule to style heading inside header. |
| @import (loading external CSS/fonts) | introduced | 25 Jul 2026 | — | Added Google Fonts import for Inter. Understood it tells the browser to download a font from an external source before applying styles. |
| max-width | introduced | 25 Jul 2026 | — | Added max-width to main and header to cap content width. Understood it limits how wide an element can grow. |
| margin: 0 auto (centering) | introduced | 25 Jul 2026 | — | Used margin auto to center main and header horizontally. Understood auto left/right margin distributes space equally on both sides. |
| Google Fonts (web font loading) | introduced | 25 Jul 2026 | — | Loaded Inter from Google Fonts via @import. Understood fonts must be either installed on the system or explicitly loaded — writing the name alone isn't enough. |

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
| Selecting elements (getElementById, querySelector) | practicing | 25 Jul 2026 | 27 Jul 2026 | Task 5.2 review: correctly explained that querySelectorAll returns multiple elements. Struggled to articulate that a NodeList doesn't have `.textContent` directly — confused it with the elements inside. Refresher given: querySelector → single element (has textContent), querySelectorAll → NodeList (needs forEach to access each element). |
| Changing content (textContent, innerHTML) | practicing | 25 Jul 2026 | — | Used `.textContent` to swap the status message text on checkbox change and to update the prayer count display. Understood it replaces all text inside the element. |
| Event listeners (click, change, input) | practicing | 25 Jul 2026 | 27 Jul 2026 | Used `addEventListener("change", ...)` on Fajr checkbox. Task 4.3: added change listeners to all checkboxes via forEach. Task 4.4: used `addEventListener("click", ...)` on all prayer-time spans via forEach — correctly distinguished between "change" (checkbox toggled) and "click" (any tap). |
| event.target (which element was clicked) | introduced | 27 Jul 2026 | — | Used `event.target` inside a click handler to identify which prayer-time span was tapped. Correctly understood it refers to the specific element the user clicked on. |
| parentElement (walking up the DOM tree) | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `event.target.parentElement` in Task 4.4. Task 5.3: reused the same parentElement → querySelector pattern to match each prayer-time span to its name on page load (without a click event). Correctly recalled the approach without prompting. |
| String concatenation (+) | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `"Reading: " + surahName` to build a message from a variable. Simplified five if/else branches into one line by recognizing the pattern was the same each time. |
| Array methods (map, filter, find) | seed | — | — | — |
| String manipulation | seed | — | — | — |
| Working with dates and times | practicing | 27 Jul 2026 | 27 Jul 2026 | Used `new Date()` to pass today's date to Adhan.js. Task 5.3: correctly predicted that setting textContent to a Date object shows the full long string. Learned and applied `.toLocaleTimeString()` to format Date objects as readable time strings like "2:34:00 AM". |
| Fetch API (loading JSON files) | seed | — | — | — |
| ES modules (type="module", import/export) | introduced | 27 Jul 2026 | — | Changed script tag to type="module" and used `import * as adhan from "url"` to load Adhan.js. Understood modules load after DOM is ready and can import from URLs. Distinguished from classic scripts which run immediately and can't use import. |
| `new` keyword (creating objects from blueprints) | introduced | 27 Jul 2026 | — | Initially guessed "current", corrected to: `new` tells JavaScript to create a fresh object from a class/blueprint. Used `new adhan.Coordinates(...)`, `new Date()`, `new adhan.PrayerTimes(...)`. |
| `new Date()` (getting today's date) | practicing | 27 Jul 2026 | — | Correctly explained: gives the current date whenever the script runs — changes automatically each day. |
| `.toLocaleTimeString()` (formatting Date objects) | practicing | 27 Jul 2026 | 27 Jul 2026 | Correctly identified it returns a string. Initially called it on `timeSpan` (an HTML element) instead of `prayerTimes.fajr` (a Date object) — corrected after explanation that Date methods must be called on Date objects. Applied it successfully to format all 5 prayer times. |

## Data & Storage

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What localStorage is (browser sticky note) | introduced | 23 Jul 2026 | — | Explained back: "Sticky note the browser remembers." |
| What JSON is (data format) | introduced | 23 Jul 2026 | — | Discussed during Qur'an data decision. |
| localStorage save/load/clear | seed | — | — | — |
| Working with dates for daily reset | seed | — | — | — |
| Parsing JSON data | seed | — | — | — |
| Structuring data for dynamic rendering | seed | — | — | — |

## Libraries & External Code

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What a library is (pre-built code you use) | introduced | 23 Jul 2026 | — | Explained during Adhan.js decision: "Pre-built door vs raw wood." |
| What an API is (asking internet for data) | introduced | 23 Jul 2026 | — | Explained during design decisions. |
| Using Adhan.js for prayer times | practicing | 27 Jul 2026 | 27 Jul 2026 | Task 5.2: successfully called `adhan.Coordinates()`, `adhan.CalculationMethod.MuslimWorldLeague()`, and `new adhan.PrayerTimes()` to calculate and display all 6 prayer times in the console. Task 5.3: displayed real calculated prayer times in the DOM by matching each prayer-time span to its name and setting textContent with `.toLocaleTimeString()`. |
| Reading library documentation | introduced | 27 Jul 2026 | — | Read Adhan.js API to find `Coordinates`, `CalculationMethod`, and `PrayerTimes` classes and their properties (fajr, sunrise, dhuhr, asr, maghrib, isha). |

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

---

*Last updated: 27 July 2026 — Task 5.3 done (real prayer times displayed in DOM)*
