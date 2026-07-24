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
| box-shadow (drop shadows) | practicing | 24 Jul 2026 | 24 Jul 2026 | Correctly predicted that changing alpha from 0.1 to 0.5 makes the shadow darker. |
| margin-bottom | introduced | 24 Jul 2026 | — | Used on Qur'an `li` items to add space below each card. Understood it's like `gap` but works on non-flex containers — adds space below each element. |
| list-style: none | introduced | 24 Jul 2026 | — | Used on `#quran-reader ul` to remove default browser bullets from the Surah list. |

## JavaScript

| Concept | Status | Introduced | Last Reviewed | Evidence |
|---|---|---|---|---|
| What JavaScript is (brain/logic) | introduced | 23 Jul 2026 | — | Explained back: "Makes things functional, the brain of the application." |
| Variables (let, const) | seed | — | — | — |
| Data types (string, number, boolean, object, array) | seed | — | — | — |
| Functions (declaration, arrow) | seed | — | — | — |
| Conditional statements (if/else) | seed | — | — | — |
| Loops (for, forEach) | seed | — | — | — |
| DOM (what it is, why it exists) | seed | — | — | — |
| Selecting elements (getElementById, querySelector) | seed | — | — | — |
| Changing content (textContent, innerHTML) | seed | — | — | — |
| Event listeners (click, change, input) | seed | — | — | — |
| Array methods (map, filter, find) | seed | — | — | — |
| String manipulation | seed | — | — | — |
| Working with dates and times | seed | — | — | — |
| Fetch API (loading JSON files) | seed | — | — | — |

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
| Using Adhan.js for prayer times | seed | — | — | — |
| Reading library documentation | seed | — | — | — |

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

*Last updated: 24 July 2026 — Task 3.4 done (checklist and Qur'an reader styled)*
