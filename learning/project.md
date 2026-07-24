# Project: Prayer & Qur'an PWA

## Who I Am

- **Name:** Jeremy Bilal Njumbe
- **Location:** Haltern am See, Germany
- **Current situation:** IT retraining for Application Development (Software Developer)
  - School: 24 June 2026 – 23 June 2028
  - In class: 7:45 am – 3:15 pm, home by ~5 pm
- **Background:** Learning HTML, CSS, Python — early stage, nothing sticking yet
- **Interests:** AI, gaming (EA FC, NBA2K, GTA, CoD on PS5), soccer (training 2x/week, matches Sunday)
- **Schedule constraints:** Free time evenings after 5 pm, minus soccer days. Need small, focused work sessions.

## The Project

A **Progressive Web App (PWA)** — a prayer times and Qur'an reader that installs on your phone like a real app. No accounts, no payments, no login. Open it and use it.

**Stack:** HTML + CSS + JavaScript (no frameworks, no libraries yet)
**Hosting:** Free — GitHub Pages or Netlify (TBD)

**Problem it solves:** Most good prayer/Qur'an apps cost money. This one is free, personal, and yours.

## Core Engineering Components (the trunk)

Every piece you need to understand and build to get this project live, end to end.

1. **Version Control (Git + GitHub)** — A system that saves every change you ever make to your code, so you can go back in time if something breaks. GitHub stores that history in the cloud so even if your laptop dies, your code is safe.

2. **HTML — The Structure** — Defines what's on the page: headings, buttons, checkboxes, text. The skeleton. If a webpage were a house, HTML would be the fundament, walls, stairs, and doors.

3. **CSS — The Design** — Makes things look good: colors, spacing, fonts, layout, responsiveness. The furniture, art, wall colors, and decoration on top of HTML's skeleton.

4. **JavaScript — The Brain** — Makes things happen: when you tap a Surah it loads, when you check a box it saves. JavaScript is the electricity that makes the house come alive.

5. **Data — Where the Information Lives** — The actual content the app needs: prayer time formulas, the full Qur'an text with translations, the list of 114 Surahs. Comes from a free API (a service on the internet that hands you data when you ask) or from files included in your project.

6. **LocalStorage — The App's Memory** — A built-in browser feature that lets the app save tiny pieces of info on the user's phone (like which prayers you checked off). Not a database — more like a sticky note the browser remembers.

7. **Deployment — Putting It on the Internet** — Taking the files on your laptop and putting them on a public website so anyone (including you on your phone) can access it. GitHub Pages or Netlify do this for free.

**The flow:**
```
HTML + CSS + JavaScript → Data → LocalStorage → Git (save progress) → Deployment (live on internet)
```

## MVP — In Scope

These are the only features being built right now. Nothing else.

1. **Prayer times for current location**
   - Auto-detect location (browser geolocation API)
   - Show all 5 daily prayers + Sunrise for Haltern am See
   - Use a free prayer time calculation library (no API key needed)
   - Show next prayer highlighted

2. **Daily prayer checklist**
   - 5 checkboxes (Fajr, Dhuhr, Asr, Maghrib, Isha)
   - Saves state to localStorage (persists across sessions)
   - Resets each day

3. **Qur'an reader**
   - List all 114 Surahs (name, number, Arabic name)
   - Tap a Surah to read it — Arabic text + English translation
   - Use free public Qur'an data (e.g., quran.com API or local JSON)

4. **Mobile-friendly responsive layout**
   - Looks good on phones (primary) and desktop (secondary)
   - Clean, calm design — not cluttered
   - One theme to start (no dark/light toggle yet)

5. **PWA setup**
   - manifest.json — app name, icons, theme color
   - service worker — basic offline caching
   - Installable to home screen on iPhone and Android

## Parking Lot — v2

Features deliberately excluded from MVP. Do not add these until v1 is live and used daily.

- Qibla direction / compass
- Dark/light mode toggle
- Arabic audio recitation
- Search across Surahs and translations
- Multiple translations
- Athan/adhan browser notifications
- Juz/para browsing (Surah-based navigation is fine for now)
- Last read / bookmark position
- Daily streaks or statistics
- Home screen widget
- Language selector (Arabic/English)
- Tafsir / commentary

---

*Last updated: 23 July 2026*