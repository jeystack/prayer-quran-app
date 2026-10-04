import * as adhan from "./adhan.esm.js";

// ===== Prayer times =====

// Haltern am See. Tasks 5.6-5.8 replace this with the browser's location.
const coordinates = new adhan.Coordinates(51.74, 6.98);
const params = adhan.CalculationMethod.MuslimWorldLeague();

const prayerItems = document.querySelectorAll(".prayer-item");

// Show a time as hours and minutes only, e.g. "05:43"
function formatTime(time) {
  return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function updatePrayerTimes() {
  const now = new Date();
  const prayerTimes = new adhan.PrayerTimes(coordinates, now, params);

  // nextPrayer() answers with "fajr", "sunrise", "dhuhr", ... or "none"
  let nextPrayerName = prayerTimes.nextPrayer(now);
  let fajrTime = prayerTimes.fajr;

  // After Isha there is no prayer left today, so the next one is
  // tomorrow's Fajr.
  if (nextPrayerName === "none") {
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    fajrTime = new adhan.PrayerTimes(coordinates, tomorrow, params).fajr;
    nextPrayerName = "fajr";
  }

  // Sunrise is not a prayer. Between Fajr and sunrise the next prayer is Dhuhr.
  if (nextPrayerName === "sunrise") {
    nextPrayerName = "dhuhr";
  }

  prayerItems.forEach(function (item) {
    // data-prayer in the HTML matches the property names of prayerTimes
    const name = item.dataset.prayer;
    const timeSpan = item.querySelector(".prayer-time");

    if (name === "fajr") {
      timeSpan.textContent = formatTime(fajrTime);
    } else {
      timeSpan.textContent = formatTime(prayerTimes[name]);
    }

    // Highlight the next prayer and remove the highlight from the others
    if (name === nextPrayerName) {
      item.classList.add("next-prayer");
    } else {
      item.classList.remove("next-prayer");
    }
  });
}

// ===== Daily checklist =====

const allCheckboxes = document.querySelectorAll(
  ".checklist-item input[type='checkbox']",
);
const prayerCountDisplay = document.querySelector("#prayer-count");
const statusMessage = document.querySelector("#checklist-status");

// Today's date in the device's own time zone, e.g. "2026-10-04".
// (toISOString() would give the UTC date, which changes one or two hours
// after midnight in Germany.)
function getTodayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return now.getFullYear() + "-" + month + "-" + day;
}

function updatePrayerCount() {
  let count = 0;
  allCheckboxes.forEach(function (box) {
    if (box.checked) {
      count = count + 1;
    }
  });

  const total = allCheckboxes.length;
  prayerCountDisplay.textContent = count + " of " + total + " prayers checked";

  if (count === total) {
    statusMessage.textContent = "Alhamdulillah - all prayers prayed today!";
  } else {
    statusMessage.textContent = "Prayed today? Check it off.";
  }
}

// Read the saved checkbox states from localStorage and show them
function loadChecklist() {
  const today = getTodayString();

  // A new day: throw away yesterday's checks
  if (localStorage.getItem("checklist-date") !== today) {
    allCheckboxes.forEach(function (box) {
      localStorage.removeItem(box.id);
    });
    localStorage.setItem("checklist-date", today);
  }

  // localStorage only stores strings, so a checked box is saved as "true"
  allCheckboxes.forEach(function (box) {
    box.checked = localStorage.getItem(box.id) === "true";
  });

  updatePrayerCount();
}

allCheckboxes.forEach(function (box) {
  box.addEventListener("change", function () {
    localStorage.setItem(box.id, box.checked);
    localStorage.setItem("checklist-date", getTodayString());
    updatePrayerCount();
  });
});

// ===== Keep prayer times and checklist up to date =====

// Everything that depends on the current time runs through this function,
// so an app that stays open still moves the highlight and resets at midnight.
function refresh() {
  updatePrayerTimes();
  loadChecklist();
}

refresh();

// Once a minute while the app is open
setInterval(refresh, 60 * 1000);

// And right away when the user comes back to the app
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    refresh();
  }
});

// ===== Qur'an reader =====

const quranReader = document.querySelector("#quran-reader");
const readerIntro = document.querySelector(".quran-reader-intro");
const surahList = document.querySelector("#surah-list");
const surahDetail = document.querySelector("#surah-detail");
const detailTitle = document.querySelector("#detail-title");
const detailVerses = document.querySelector("#detail-verses");
const backButton = document.querySelector("#back-btn");

// Where the page was scrolled to when a Surah was opened,
// so the back button can return to the same spot in the list.
let listScrollPosition = 0;

// fetch() does not treat "404 Not Found" as an error, so check response.ok
function fetchJson(path) {
  return fetch(path).then(function (response) {
    if (!response.ok) {
      throw new Error("Could not load " + path);
    }
    return response.json();
  });
}

// Create a <span> with a class and some text
function createSpan(className, text) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = text;
  return span;
}

// Show a short message (loading, error) in the Surah detail view
function showDetailMessage(text) {
  const message = document.createElement("p");
  message.classList.add("reader-message");
  message.textContent = text;
  detailVerses.replaceChildren(message);
}

// Build one row of the Surah list: number, names, and the Arabic name.
// The row is a <button> so it also works with the keyboard.
function createSurahItem(surah) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.type = "button";
  button.classList.add("surah-item", "card");

  // index "001" becomes the number 1
  const number = parseInt(surah.index);

  const names = document.createElement("span");
  names.classList.add("surah-names");
  names.appendChild(createSpan("surah-title", surah.title));
  names.appendChild(
    createSpan("surah-meta", surah.place + " · " + surah.count + " verses"),
  );

  const arabicName = createSpan("surah-title-ar", surah.titleAr);
  arabicName.lang = "ar";

  button.appendChild(createSpan("surah-number", number));
  button.appendChild(names);
  button.appendChild(arabicName);

  button.addEventListener("click", function () {
    openSurah(surah);
  });

  li.appendChild(button);
  return li;
}

function renderVerses(arabic, english) {
  let versesHTML = "";

  // The Bismillah is stored as verse_0 (every Surah except 1 and 9).
  // It is not a numbered verse, so it gets its own block.
  const arabicBismillah = arabic.verse.verse_0;
  const englishBismillah = english.verse.verse_0;

  if (arabicBismillah && englishBismillah) {
    versesHTML += '<div class="bismillah">';
    versesHTML +=
      '<p class="bismillah-arabic" lang="ar">' + arabicBismillah + "</p>";
    versesHTML += '<p class="bismillah-english">' + englishBismillah + "</p>";
    versesHTML += "</div>";
  }

  for (let i = 1; i <= arabic.count; i++) {
    versesHTML += '<div class="verse">';
    versesHTML += '<span class="verse-number">' + i + ".</span>";
    versesHTML +=
      '<p class="verse-arabic" lang="ar">' +
      arabic.verse["verse_" + i] +
      "</p>";
    versesHTML +=
      '<p class="verse-english">' + english.verse["verse_" + i] + "</p>";
    versesHTML += "</div>";
  }

  detailVerses.innerHTML = versesHTML;
}

function openSurah(surah) {
  const number = parseInt(surah.index);
  const arabicPath = "data/surah/surah_" + number + ".json";
  const englishPath = "data/translation/en/en_translation_" + number + ".json";

  // Switch to the detail view right away and show it from the top
  listScrollPosition = window.scrollY;
  detailTitle.textContent = number + ". " + surah.title;
  showDetailMessage("Loading...");
  surahList.classList.add("hidden");
  readerIntro.classList.add("hidden");
  surahDetail.classList.remove("hidden");
  quranReader.scrollIntoView();

  // Fetch the Arabic text and the translation at the same time
  Promise.all([fetchJson(arabicPath), fetchJson(englishPath)])
    .then(function (results) {
      renderVerses(results[0], results[1]);
      // The page is much longer now, so jump to the start of the Surah again
      quranReader.scrollIntoView();
    })
    .catch(function () {
      showDetailMessage(
        "This Surah could not be loaded. If you are offline, connect to the internet and try again.",
      );
    });
}

backButton.addEventListener("click", function () {
  surahDetail.classList.add("hidden");
  surahList.classList.remove("hidden");
  readerIntro.classList.remove("hidden");
  window.scrollTo(0, listScrollPosition);
});

// Load the list of all 114 Surahs
fetchJson("data/surah.json")
  .then(function (surahs) {
    surahs.forEach(function (surah) {
      surahList.appendChild(createSurahItem(surah));
    });
  })
  .catch(function () {
    readerIntro.textContent =
      "The Surah list could not be loaded. Please reload the page.";
  });

// ===== Service worker (offline support) =====

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
