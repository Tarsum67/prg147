/* ==========================================================
   Work Day Schedule — Starter Version (Unfinished)
   Displays date & time and renders the basic schedule layout.
   ========================================================== */


const startHour = 0; // 10AM
const endHour = 23;   // 5PM

// Array for our working hours
const HOURS = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);

/** ------------------------------
 *  Functions
 *  ------------------------------ */

// Format time label (24-hour -> AM/PM style)
function formatHourLabel(hour) {
  const suffix = hour >= 12 ? "PM" : "AM";
  let displayHour = hour % 12 || 12;
  return `${displayHour}${suffix}`;
}

// Display current date and time (24-hour format)
function updateDateTime() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const datePart = now.toLocaleDateString("en-US", options);
  const timePart = now.toLocaleTimeString("en-US"); // 24-hour format

  document.getElementById("today").textContent = `${datePart} - ${timePart}`;
}

// Create one time block row
function createRow(hour) {
  const row = document.createElement("div");
  row.className = "row";

  const timeCell = document.createElement("div");
  timeCell.className = "time-cell";
  timeCell.textContent = formatHourLabel(hour);

  const eventCell = document.createElement("div");
  eventCell.className = "event-cell";

  const textarea = document.createElement("textarea");
  textarea.className = "event-input";
  textarea.placeholder = "Add event...";

  const actionCell = document.createElement("div");
  actionCell.className = "action-cell";

  const button = document.createElement("button");
  button.className = "save-btn";
  button.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 016 0v3H9zm3 4a2 2 0 110 4 2 2 0 010-4z"/>
    </svg>
  `;

  // (functionality like saving will be added later)
  actionCell.appendChild(button);
  eventCell.appendChild(textarea);

  row.append(timeCell, eventCell, actionCell);
  return row;
}

// Render all rows into the schedule section
function renderSchedule() {
  const container = document.getElementById("schedule");
  container.innerHTML = ""; // clear any old rows

  HOURS.forEach((hour) => {
    const row = createRow(hour);
    container.appendChild(row);
  });
}

/** ------------------------------
 *  Initialize when page loads
 *  ------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  updateDateTime();
  renderSchedule();
  setInterval(updateDateTime, 1000); // update clock every second
});
