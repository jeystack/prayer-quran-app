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