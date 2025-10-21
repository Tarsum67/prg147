const STORAGE_KEY = "workday.schedule.v1";

/* 12-hour label like "8PM" */
function label12(h) {
  const suffix = h >= 12 ? "PM" : "AM";
  let d = h % 12;
  if (d === 0) d = 12;
  return `${d}${suffix}`;
}

/* Header clock + footer year */
function startClock() {
  const todayEl = document.getElementById("today");
  const yearEl = document.getElementById("year");
  function tick() {
    const now = new Date();
    todayEl.textContent = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    yearEl.textContent = String(now.getFullYear());
  }
  tick();
  setInterval(tick, 1000);
}

/* Load, filter, sort, render */
function renderSaved() {
  const container = document.getElementById("savedContainer");
  const empty = document.getElementById("emptyState");
  container.innerHTML = "";

  const raw = localStorage.getItem(STORAGE_KEY);
  console.log("[saved.js] raw localStorage:", raw);

  if (!raw) {
    empty.hidden = false;
    return;
  }

  let obj;
  try {
    obj = JSON.parse(raw);
  } catch (e) {
    console.warn("Failed to parse saved data:", e);
    empty.hidden = false;
    return;
  }

  // Collect non-empty entries and sort by hour
  const entries = Object.entries(obj)
    .map(([k, v]) => [Number(k), String(v ?? "").trim()])
    .filter(([, v]) => v.length > 0)
    .sort((a, b) => a[0] - b[0]);

  console.log("[saved.js] parsed entries:", entries);

  if (entries.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  for (const [hour, text] of entries) {
    const row = document.createElement("div");
    row.className = "row";

    const timeCell = document.createElement("div");
    timeCell.className = "time-cell";
    timeCell.textContent = label12(hour);

    const eventCell = document.createElement("div");
    eventCell.className = "event-cell";
    const p = document.createElement("div");
    p.style.padding = "16px 12px";
    p.style.color = "var(--text)";
    p.textContent = text;
    eventCell.appendChild(p);

    row.append(timeCell, eventCell);
    container.appendChild(row);
  }
}

/* Clear everything */
function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
  renderSaved();
}

document.addEventListener("DOMContentLoaded", () => {
  startClock();
  renderSaved();
  document.getElementById("clearAll").addEventListener("click", clearAll);
});
