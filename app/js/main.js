import * as adhan from "./adhan.esm.js";

// --- Task 5.2: Calculate prayer times with Adhan.js ---
const coordinates = new adhan.Coordinates(51.74, 6.98);
const date = new Date();
const params = adhan.CalculationMethod.MuslimWorldLeague();
const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);

console.log("Fajr:", prayerTimes.fajr);
console.log("Sunrise:", prayerTimes.sunrise);
console.log("Dhuhr:", prayerTimes.dhuhr);
console.log("Asr:", prayerTimes.asr);
console.log("Maghrib:", prayerTimes.maghrib);
console.log("Isha:", prayerTimes.isha);

// --- Task 4.2: Make the Fajr checkbox do something ---

// Step 1: Find the elements on the page
// querySelector finds the FIRST element that matches the CSS selector you give it.
// "#check-fajr" means: find the element with the id="check-fajr"
const fajrCheckbox = document.querySelector("#check-fajr");
const statusMessage = document.querySelector("#checklist-status");

// Step 2: Listen for changes on the checkbox
// When the checkbox is checked or unchecked, run the function below.
fajrCheckbox.addEventListener("change", function () {
  // Step 3: Check if the box is checked or not
  // .checked is true when the box has a checkmark, false when it doesn't.
  if (fajrCheckbox.checked) {
    statusMessage.textContent = "Alhamdulillah - Fajr prayed!";
  } else {
    statusMessage.textContent = "Prayed today? Check it off.";
  }
});

// --- Task 4.3: Count how many checkboxes are checked — show "X of 5 prayers checked" at the top ---

// Step 1: Find all the checkboxes at once
// querySelectorAll returns a list of every match.
const allCheckboxes = document.querySelectorAll("input[type='checkbox']");

// Step 2: Find the count display element
const prayerCountDisplay = document.querySelector("#prayer-count");

// Step 3: Write a function that counts and displays
// forEach runs the same code once for each item in a list.
function updatePrayerCount() {
  let count = 0;
  allCheckboxes.forEach(function (box) {
    if (box.checked) {
      count = count + 1;
    }
  });
  prayerCountDisplay.textContent = count + " of 5 prayers checked";
}

// --- Task 7.4: Daily auto-reset ---
const todayString = new Date().toISOString().split("T")[0];
const savedDate = localStorage.getItem("checklist-date");
if (savedDate !== todayString) {
  allCheckboxes.forEach(function (box) {
    localStorage.removeItem(box.id);
  });
  localStorage.setItem("checklist-date", todayString);
}

// --- Task 7.3: Restore saved checkbox states when the page loads ---
// On page load, read each checkbox's saved state from localStorage and apply it.
allCheckboxes.forEach(function (box) {
  const savedState = localStorage.getItem(box.id);

  // If the saved value is the string "true", check the box.
  // If nothing is saved (null), leave it unchecked - it already is.
  if (savedState === "true") {
    box.checked = true;
  }
});

// Step 4: Run it once on page load and listen for changes
updatePrayerCount();

allCheckboxes.forEach(function (box) {
  box.addEventListener("change", updatePrayerCount);

  // Use: localStorage.setItem(key, value)
  box.addEventListener("change", function () {
    localStorage.setItem(box.id, box.checked);
    localStorage.setItem("checklist-date", todayString);
  });
});

const allPrayerTimes = document.querySelectorAll(".prayer-time");

// --- Task 4.5: Tap a Surah and see its name ---

// Step 1: Find all the Surah list items
// (use querySelectorAll with the class you just added)

// --- Task 5.3: Display real prayer times in the DOM ---

// Loop through each prayer-time span and fill it with the calculated time
allPrayerTimes.forEach(function (timeSpan) {
  // Go up to the parent .prayer-item div
  const parentDiv = timeSpan.parentElement;
  // Find the .prayer-name span inside it
  const prayerName = parentDiv.querySelector(".prayer-name").textContent;

  // Match the name to the right time from Adhan.js
  if (prayerName === "Fajr") {
    timeSpan.textContent = prayerTimes.fajr.toLocaleTimeString();
  } else if (prayerName === "Dhuhr") {
    timeSpan.textContent = prayerTimes.dhuhr.toLocaleTimeString();
  } else if (prayerName === "Asr") {
    timeSpan.textContent = prayerTimes.asr.toLocaleTimeString();
  } else if (prayerName === "Maghrib") {
    timeSpan.textContent = prayerTimes.maghrib.toLocaleTimeString();
  } else if (prayerName === "Isha") {
    timeSpan.textContent = prayerTimes.isha.toLocaleTimeString();
  }
});

console.log("Next prayer:", prayerTimes.nextPrayer());

// --- Task 5.4: Highlight the next upcoming prayer ---

// Get the next prayer as a lowercase string (e.g. "fajr", "dhuhr")
const nextPrayerName = prayerTimes.nextPrayer().toString().toLowerCase();

// Loop through all prayer items and find the matching one
document.querySelectorAll(".prayer-item").forEach(function (item) {
  const name = item.querySelector(".prayer-name").textContent.toLowerCase();
  if (name === nextPrayerName) {
    item.classList.add("next-prayer");
  }
});

// --- Task 6.2: Load Qur'an metadata with fetch() ---

fetch("data/surah.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    // Find the empty <ul>
    const surahList = document.querySelector("#quran-reader ul");

    // Loop through all 114 Surahs
    data.forEach(function (surah) {
      // Create a new <li> element
      const li = document.createElement("li");
      // Give it the same class as before
      li.classList.add("surah-item");
      // Put the Surah's English name inside it
      li.textContent = surah.title;
      // Store the index on each element
      li.dataset.index = surah.index;
      // Add it to the <ul>
      surahList.appendChild(li);
    });
    const allSurahItems = document.querySelectorAll(".surah-item");
    const introText = document.querySelector(".quran-reader-intro");

    allSurahItems.forEach(function (readSurah) {
      readSurah.addEventListener("click", function (event) {
        // 1. Get the index from the clicked element
        const index = event.target.dataset.index;

        // 2. Build the file paths - index "001" becomes "1" for the file name
        const arabicPath = "data/surah/surah_" + parseInt(index) + ".json";
        const englishPath =
          "data/translation/en/en_translation_" + parseInt(index) + ".json";

        // 3. Fetch both files at the same time
        Promise.all([
          fetch(arabicPath).then(function (r) {
            return r.json();
          }),
          fetch(englishPath).then(function (r) {
            return r.json();
          }),
        ]).then(function (results) {
          const arabic = results[0];
          const english = results[1];

          // 4. Set the title
          document.getElementById("detail-title").textContent =
            event.target.textContent;

          // 5. Build the verses - loop through and show Arabic + English side by side
          let versesHTML = "";

          const arabicVerse = arabic.verse.verse_0;
          const englishVerse = english.verse.verse_0;

          if (arabicVerse && englishVerse) {
            versesHTML += '<div class="bismillah">';
            versesHTML += '<p class="bismillah-arabic">' + arabicVerse + "</p>";
            versesHTML +=
              '<p class="bismillah-english">' + englishVerse + "</p>";
            versesHTML += "</div>";
          }

          for (let i = 1; i <= arabic.count; i++) {
            versesHTML += '<div class="verse">';
            versesHTML += '<span class="verse-number">' + i + ".</span>";
            versesHTML +=
              '<p class="verse-arabic">' + arabic.verse["verse_" + i] + "</p>";
            versesHTML +=
              '<p class="verse-english">' +
              english.verse["verse_" + i] +
              "</p>";
            versesHTML += "</div>";
          }
          document.getElementById("detail-verses").innerHTML = versesHTML;

          // 6. Toggle visibility - hide list, show detail
          document.querySelector("#quran-reader ul").classList.add("hidden");
          document.querySelector(".quran-reader-intro").classList.add("hidden");
          document.getElementById("surah-detail").classList.remove("hidden");
        });
      });
    });
  });

// --- Back button: return to Surah list ---
document.getElementById("back-btn").addEventListener("click", function () {
  document.getElementById("surah-detail").classList.add("hidden");
  document.querySelector("#quran-reader ul").classList.remove("hidden");
  document.querySelector(".quran-reader-intro").classList.remove("hidden");
});

// --- Task 8.5: Register the service worker ---
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function () {
    console.log("Service worker registered!");
  });
}
