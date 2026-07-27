// console.log("JS is live and running!");

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