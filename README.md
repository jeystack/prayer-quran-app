# Prayer & Qur'an App

A Progressive Web App for daily prayer times, a prayer checklist that resets each day, and a full Qur'an reader with all 114 Surahs in Arabic and English.

## Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

**Libraries:** [Adhan.js](https://github.com/batoulapps/adhan-js) (prayer time calculation)

## Live Demo

👉 **[jeystack.github.io/prayer-quran-app](https://jeystack.github.io/prayer-quran-app/)**

Install it to your home screen — it works offline.

---

## Features

- **Prayer Times** — Accurate daily prayer times calculated using Adhan.js for Haltern am See, Germany. The next upcoming prayer is highlighted with a green pulse animation so you always know what's next.
- **Daily Prayer Checklist** — Five checkboxes (Fajr through Isha) that save to localStorage. Check off prayers as you pray them, and the counter updates live. Resets automatically each new day.
- **Qur'an Reader** — All 114 Surahs listed by name. Tap any Surah to read its Arabic text (displayed right-to-left in the Amiri typeface) alongside English translation. Back button returns to the Surah list.

## What I Learned

This was my first real project — built from scratch as a learning experience. Here's what I walked away with:

**HTML & CSS**
Semantic page structure (header, main, section, footer), flexbox layout, responsive design with media queries, custom fonts (Inter + Amiri), CSS animations with `@keyframes`, and the box model.

**JavaScript & DOM Manipulation**
Selecting elements with `querySelector` and `getElementById`, adding event listeners for click and change, building dynamic lists with loops, using `fetch()` to load JSON data, promises and `.then()` chaining, creating and appending DOM elements.

**Libraries & Data**
Reading library documentation (Adhan.js), calculating prayer times with coordinates and calculation methods, loading and parsing local JSON files (over 200 files for the Qur'an data), working with Date objects and time formatting.

**localStorage & State**
Saving and restoring checkbox states, daily auto-reset with date comparison, understanding the difference between browser cache and localStorage.

**PWA & Offline**
Creating a manifest.json with app icons, writing a service worker (install/activate/fetch lifecycle), cache-first and on-demand caching strategies, making the app installable and fully functional offline.

**Git & Deployment**
Branching (create, merge, delete), meaningful commit messages, GitHub Actions CI/CD workflow, deploying to GitHub Pages.

## How It Could Improve

Things I'd add if I kept building (parking lot for v2):

- Qibla direction / compass
- Arabic audio recitation
- Search across Surahs and translations
- Bookmark last-read position
- Daily streaks and statistics
- Multiple language translations

## How to Run Locally

```bash
git clone https://github.com/jeystack/prayer-quran-app.git
cd prayer-quran-app/app
open index.html
```

No server needed — it's all static files. For mobile testing, use VS Code's Live Server extension or any simple HTTP server.

---

## The Process

I built this in 9 sections over the course of a week, each section teaching me something new:

1. **Project Setup** — folder structure, Git init, first HTML file
2. **HTML Structure** — semantic layout with all three feature areas
3. **CSS Styling** — making it look like a real app with responsive design
4. **JavaScript Basics** — DOM manipulation, event listeners, interactivity
5. **Prayer Times** — integrating Adhan.js for real calculations
6. **Qur'an Reader** — loading JSON data, rendering 114 Surahs dynamically
7. **Daily Checklist** — localStorage save/restore with daily reset
8. **PWA Setup** — manifest, service worker, offline support
9. **Deployment** — branching, GitHub Actions, live on GitHub Pages

Every line of code is mine — no frameworks, no build tools, no copy-paste. The goal was understanding, not speed.

---

## Demo

_<video src="app/demo.mp4" controls width="300"></video>_

---

Built by [Jeremy Bilal Njumbe](https://github.com/jeystack) — from an idea to something that could help many muslims.
