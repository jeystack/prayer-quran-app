# Project: Prayer & Qur'an PWA

## Me

- **Name:** Jeremy Njumbe
- **Where:** Haltern am See, Germany
- **What I'm doing:** IT retraining for Application Development (Software Developer)
  - School runs 24 June 2026 to 23 June 2028
- **Where I started:** learning HTML, CSS and Python, early stage, nothing sticking yet

## What I'm building

A **Progressive Web App (PWA)**: prayer times and a Qur'an reader that installs on my phone like a real app. No accounts, no payments, no login. Open it and use it.

**Stack:** HTML + CSS + JavaScript. No frameworks. One library: Adhan.js for the prayer times.
**Hosting:** GitHub Pages, free. Live at https://jeystack.github.io/prayer-quran-app/

**Why:** most good prayer and Qur'an apps cost money. This one is free, personal, and mine.

## The pieces I need to understand (the trunk)

Everything I have to understand and build to get this live, end to end.

1. **Version control (Git + GitHub).** Saves every change I make to my code, so I can go back in time if something breaks. GitHub keeps that history in the cloud, so if my laptop dies my code is safe.

2. **HTML, the structure.** What's on the page: headings, buttons, checkboxes, text. The skeleton. If a webpage is a house, HTML is the fundament, walls, stairs and doors.

3. **CSS, the design.** Makes it look good: colors, spacing, fonts, layout, responsiveness. The furniture, art, wall colors and decoration on top of the skeleton.

4. **JavaScript, the brain.** Makes things happen: I tap a Surah and it loads, I check a box and it saves. The electricity that makes the house come alive.

5. **Data, where the information lives.** The content the app needs: prayer time formulas, the full Qur'an text with translation, the list of 114 Surahs. I went with files inside the project, not an API.

6. **localStorage, the app's memory.** A browser feature that saves tiny pieces of info on the phone, like which prayers I checked off. Not a database. More like a sticky note the browser remembers.

7. **Deployment, putting it on the internet.** Taking the files on my laptop and putting them on a public website so anyone (including me on my phone) can open it.

**The flow:**
```
HTML + CSS + JavaScript → Data → localStorage → Git (save progress) → Deployment (live on internet)
```

## MVP: what's in

Only these. Nothing else until they're done.

1. **Prayer times for where I am**
   - Auto-detect location (browser geolocation API). *Still open: the app uses fixed coordinates for Haltern am See. Tasks 5.6 to 5.8 in plan.md.*
   - All 5 daily prayers + Sunrise
   - A free calculation library, no API key
   - Next prayer highlighted

2. **Daily prayer checklist**
   - 5 checkboxes (Fajr, Dhuhr, Asr, Maghrib, Isha)
   - Saved in localStorage, so it survives closing the app
   - Resets each day

3. **Qur'an reader**
   - All 114 Surahs listed (name, number, Arabic name)
   - Tap a Surah to read it: Arabic text + English translation
   - Free public Qur'an data, stored as local JSON

4. **Mobile-friendly layout**
   - Phone first, desktop second
   - Clean and calm, not cluttered
   - One theme for now (no dark/light toggle)

5. **PWA setup**
   - manifest.json: app name, icons, theme color
   - service worker: basic offline caching
   - Installable to the home screen on iPhone and Android

## Parking lot: v2

Left out on purpose. I don't touch these until v1 is live and I use it daily.

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

*Last updated: 4 October 2026*
