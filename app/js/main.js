// console.log("JS is live and running!");
import * as adhan from "https://esm.sh/adhan";

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

// Step 4: Run it once on page load and listen for changes
updatePrayerCount();

allCheckboxes.forEach(function (box) {
  box.addEventListener("change", updatePrayerCount);
});

const allPrayerTimes = document.querySelectorAll(".prayer-time");

// --- Task 4.5: Tap a Surah and see its name ---

// Step 1: Find all the Surah list items
// (use querySelectorAll with the class you just added)
const allSurahItems = document.querySelectorAll(".surah-item");

// Step 2: Find the intro text element
// (it has class "quran-reader-intro" )
const introText = document.querySelector(".quran-reader-intro");

// Step 3: Loop through all surah items and add a click listener to each
// When clicked:
//  a) Get the Surah name from event.target.textContent
//  b) Update the intro text to say "Reading: [Surah name]"
allSurahItems.forEach(function (readSurah) {
  readSurah.addEventListener("click", function (event) {
    const surahName = event.target.textContent;
    introText.textContent = "Reading: " + surahName;
  });
});

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
