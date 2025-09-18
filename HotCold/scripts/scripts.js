/*  TODO:
    Hot/Cold Guessing Game — Module 2 Assessment 4
    Requirements:
    - Random number 1–1000
    - Comparisons with hot/cold feedback
    - Color-coded intensity + textual (cold, colder, coldest…)
    - Clean code, accessible, and well-formatted
*/

// Wrap game logic in an ES6 arrow IIFE (Immediately Invoked Function Expression) to run immediately since we don't need to call it again
(() => {
  "use strict"; //using strict mode this helps catch common errors and prevents unsafe shortcuts

  // DOM elements
  const form = document.getElementById("guess-form");
  const input = document.getElementById("guess");
  const feedbackEl = document.getElementById("feedback");
  const attemptsEl = document.getElementById("attempts");
  const rangeEl = document.getElementById("range");
  const thermoEl = document.getElementById("thermo");
  const historyEl = document.getElementById("history");
  const resetBtn = document.getElementById("reset-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Game state
  let secret = randomInt(1, 1000);
  let attempts = 0;
  let minSeen = 1;
  let maxSeen = 1000;
  let isOver = false;

  // Inclusive random int
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function resetGame() {
    secret = randomInt(1, 1000);
    attempts = 0;
    minSeen = 1;
    maxSeen = 1000;
    isOver = false;

    attemptsEl.textContent = "0";
    rangeEl.textContent = "1 - 1000";
    feedbackEl.textContent = "New game started. Make your first guess!";
    setTempClass("temp-cold");
    thermoEl.style.width = "0%";
    historyEl.innerHTML = "";
    input.value = "";
    input.disabled = false;
    submitBtn.disabled = false;
    input.focus();
  }

  function clampRange(guess) {
    if (guess < secret && guess >= minSeen) minSeen = guess + 1;
    if (guess > secret && guess <= maxSeen) maxSeen = guess - 1;
    rangeEl.textContent = `${minSeen}  ${maxSeen}`;
  }

  function addHistoryChip(guess) {
    const li = document.createElement("li");
    li.textContent = guess;
    historyEl.prepend(li);
  }

  function setTempClass(cls) {
    // Remove all temp classes then add
    feedbackEl.classList.remove(
      "temp-coldest",
      "temp-colder",
      "temp-cold",
      "temp-warm",
      "temp-hot",
      "temp-hottest",
      "temp-correct"
    );
    feedbackEl.classList.add(cls);
  }

  // Map distance to textual & color severity + progress fill
  function temperatureFeedback(distance, hint) {
    // distance is absolute difference from secret
    // tiers chosen for 1–1000, feel great in practice
    // You can tweak thresholds to taste.
    let label = "";
    let cls = "";
    let percentFill = 0;

    if (distance === 0) {
      label = "Correct!";
      cls = "temp-correct";
      percentFill = 100;
    } else if (distance >= 300) {
      label = "Coldest ❄️";
      cls = "temp-coldest";
      percentFill = 10;
    } else if (distance >= 200) {
      label = "Colder ❄️";
      cls = "temp-colder";
      percentFill = 20;
    } else if (distance >= 120) {
      label = "Cold ❄️";
      cls = "temp-cold";
      percentFill = 35;
    } else if (distance >= 60) {
      label = "Warm ☀️";
      cls = "temp-warm";
      percentFill = 55;
    } else if (distance >= 25) {
      label = "Hot 🔥";
      cls = "temp-hot";
      percentFill = 75;
    } else {
      label = "Hottest 🔥🔥";
      cls = "temp-hottest";
      percentFill = 90;
    }

    setTempClass(cls);
    thermoEl.style.width = percentFill + "%";

    // Append a higher or lower hint for clarity
    if (distance > 0) {
      label += hint ? ` — Try ${hint}` : "";
    }

    return label;
  }

  function handleGuess(value) {
    if (isOver) return;

    // Validate
    if (!Number.isFinite(value)) {
      feedbackEl.textContent = "Please enter a number.";
      setTempClass("temp-cold");
      return;
    }
    if (value < 1 || value > 1000) {
      feedbackEl.textContent = "Out of range. Enter a number from 1 to 1000.";
      setTempClass("temp-coldest");
      return;
    }

    attempts++;
    attemptsEl.textContent = String(attempts);

    const distance = Math.abs(secret - value);
    const hint = value < secret ? "higher ↑" : value > secret ? "lower ↓" : "";
    const msg = temperatureFeedback(distance, hint);

    clampRange(value);
    addHistoryChip(value);

    if (distance === 0) {
      isOver = true;
      feedbackEl.textContent = `${msg} You found ${secret} in ${attempts} attempt${
        attempts === 1 ? "" : "s"
      }!`;
      input.disabled = true;
      submitBtn.disabled = true;
    } else {
      feedbackEl.textContent = msg;
    }
  }

  // Form submit -> guess
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = input.value.trim();
    const guess = raw === "" ? NaN : Number(raw);
    handleGuess(guess);
    input.select();
  });

  // Reset
  resetBtn.addEventListener("click", resetGame);

  // Allow Enter to submit and ArrowUp/Down to tweak the number quickly
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      input.value = String(Math.min(1000, Number(input.value || "0") + 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      input.value = String(Math.max(1, Number(input.value || "1") - 1));
    }
  });

  resetGame();
})();
