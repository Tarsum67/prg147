
// Hours to render (0 = 12AM … 23 = 11PM)
const startHour = 0;
const endHour = 23;

// Array of hours (Arrays requirement)
const HOURS = Array.from(
  { length: endHour - startHour + 1 },
  (_, i) => startHour + i
);

// Storage key (Strings + Variables)
const STORAGE_KEY = "workday.schedule.v1";

// In-memory schedule model (Map satisfies Arrays/Maps requirement)
let scheduleMap = new Map();


// Format hour into 12-hour label (AM/PM)
function formatHourLabel(hour) {
  const suffix = hour >= 12 ? "PM" : "AM";
  let displayHour = hour % 12;
  if (displayHour === 0) displayHour = 12;
  return `${displayHour}${suffix}`;
}

// Update header date/time (12-hour)
function updateDateTime() {
  const now = new Date();
  const datePart = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const timePart = now.toLocaleTimeString("en-US"); // 12-hour
  document.getElementById("today").textContent = `${datePart} - ${timePart}`;
}

// Determine row state class (past | present | future)
function hourStateClass(h24) {
  const currentHour = new Date().getHours();
  if (h24 < currentHour) return "past";
  if (h24 === currentHour) return "present";
  return "future";
}

// Load saved data from localStorage into Map
function loadSchedule() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const obj = JSON.parse(raw); // plain object { "0": "text", ... }
    scheduleMap = new Map(Object.entries(obj).map(([k, v]) => [Number(k), v]));
  } catch (err) {
    console.warn("Could not load saved schedule:", err);
  }
}

// Save Map back to localStorage
function saveSchedule() {
  const obj = Object.fromEntries(scheduleMap.entries());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

/** ------------------------------
 *  Row Creation & Rendering
 *  ------------------------------ */

// Build a single schedule row
function createRow(hour) {
  const savedValue = scheduleMap.get(hour) ?? "";

  const row = document.createElement("div");
  row.className = `row ${hourStateClass(hour)}`;
  row.dataset.hour = String(hour); // used for live recoloring

  // Time cell
  const timeCell = document.createElement("div");
  timeCell.className = "time-cell";
  timeCell.textContent = formatHourLabel(hour);

  // Event cell
  const eventCell = document.createElement("div");
  eventCell.className = "event-cell";

  const textarea = document.createElement("textarea");
  textarea.className = "event-input";
  textarea.placeholder = "Add event...";
  textarea.value = savedValue;
  textarea.setAttribute("aria-label", `Plan for ${formatHourLabel(hour)}`);

  // Action cell
  const actionCell = document.createElement("div");
  actionCell.className = "action-cell";

  const button = document.createElement("button");
  button.className = "save-btn";
  button.type = "button";
  button.title = "Save this hour";
  button.setAttribute("aria-label", `Save ${formatHourLabel(hour)}`);
  button.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 016 0v3H9zm3 4a2 2 0 110 4 2 2 0 010-4z"/>
    </svg>
  `;

  // Save on button click (Events + Functions)
  button.addEventListener("click", () => handleSave(hour, textarea));

  // Quick-save with Ctrl/Cmd+S while typing (Events + Operators)
  textarea.addEventListener("keydown", (e) => {
    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const saveCombo = (isMac && e.metaKey) || (!isMac && e.ctrlKey);
    if (saveCombo && e.key.toLowerCase() === "s") {
      e.preventDefault();
      handleSave(hour, textarea);
    }
  });

  eventCell.appendChild(textarea);
  actionCell.appendChild(button);
  row.append(timeCell, eventCell, actionCell);
  return row;
}

// Render all rows
function renderSchedule() {
  const container = document.getElementById("schedule");
  container.innerHTML = "";
  HOURS.forEach((hour) => container.appendChild(createRow(hour)));
}

function handleSave(hour, textarea) {
  const value = textarea.value.trim();
  scheduleMap.set(hour, value);
  saveSchedule();

  // Visual feedback on button
  const button =
    textarea.parentElement.nextElementSibling.querySelector(".save-btn");
  button.classList.add("flash");
  setTimeout(() => button.classList.remove("flash"), 600);

  // Show toast notification
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  toast.textContent = `Saved event for ${formatHourLabel(hour)}!`;

  // Hide toast after 2 seconds
  setTimeout(() => toast.classList.remove("show"), 2000);

  // Accessibility feedback
  const original = textarea.ariaLabel;
  textarea.ariaLabel = `${original} — Saved`;
  setTimeout(() => (textarea.ariaLabel = original), 900);
}

function startClock() {
  updateDateTime();
  setInterval(updateDateTime, 1000);
}

// Recompute row classes every minute so colors stay accurate
function startStateRefresher() {
  function refresh() {
    document.querySelectorAll(".row").forEach((row) => {
      const hour = Number(row.dataset.hour);
      row.classList.remove("past", "present", "future");
      row.classList.add(hourStateClass(hour));
    });
  }
  // initial + every minute
  refresh();
  setInterval(refresh, 60000);
}

document.addEventListener("DOMContentLoaded", () => {
  loadSchedule();
  renderSchedule();
  startClock();
  startStateRefresher();
});
