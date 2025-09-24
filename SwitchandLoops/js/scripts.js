

/*
  Module 2 Assessment 5 — Switch Statements & Loops
  -------------------------------------------------
  - We loop over each month .
  - For each month index, a switch statement assigns an array of at least 2 holidays.
  - Then we render a "card" for that month with its holidays.

*/

// Month names for display
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// Return an array of holiday strings for a month index 0..11
function getHolidaysForMonth(monthIndex) {
  let holidays = [];

  switch (monthIndex) {
    case 0: // January
      holidays = ["New Year's Day (Jan 1)", "Martin Luther King Jr. Day"];
      break;
    case 1: // February
      holidays = ["Valentine's Day", "Presidents' Day"];
      break;
    case 2: // March
      holidays = ["Pi Day (3/14)", "St. Patrick's Day"];
      break;
    case 3: // April
      holidays = ["April Fools' Day", "Earth Day"];
      break;
    case 4: // May
      holidays = ["Mother's Day", "Memorial Day"];
      break;
    case 5: // June
      holidays = ["Father's Day", "Juneteenth (June 19)"];
      break;
    case 6: // July
      holidays = ["Independence Day (July 4)", "Parents' Day"];
      break;
    case 7: // August
      holidays = ["Friendship Day", "Women's Equality Day (Aug 26)"];
      break;
    case 8: // September
      holidays = ["Labor Day", "Patriot Day (Sept 11)"];
      break;
    case 9: // October
      holidays = ["Indigenous Peoples' Day / Columbus Day", "Halloween (Oct 31)"];
      break;
    case 10: // November
      holidays = ["Veterans Day (Nov 11)", "Thanksgiving (4th Thu)"];
      break;
    case 11: // December
      holidays = ["Christmas Day (Dec 25)", "New Year's Eve (Dec 31)"];
      break;
    default:
      holidays = ["(No holidays found)"];
  }

  return holidays;
}

// Render all months to the DOM using a FOR LOOP
function renderCalendar() {
  const grid = document.getElementById("calendar");
  grid.innerHTML = "";

  // Loop through 12 months 
  for (let i = 0; i < 12; i++) {
    const monthName = MONTHS[i];
    const holidays = getHolidaysForMonth(i);

    // Create card
    const card = document.createElement("section");
    card.className = "card";
    card.tabIndex = 0; 

    // Month header
    const h2 = document.createElement("h2");
    h2.textContent = monthName;

    // List of holidays
    const ul = document.createElement("ul");
    ul.className = "holiday-list";

    // Use a FOR OF loop to add each holiday
    for (const day of holidays) {
      const li = document.createElement("li");
      li.textContent = day;
      ul.appendChild(li);
    }

    card.appendChild(h2);
    card.appendChild(ul);
    grid.appendChild(card);
  }
}

// Set footer year and render
(function init() {
  // Immediately Invoked Function.
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderCalendar();
})();
