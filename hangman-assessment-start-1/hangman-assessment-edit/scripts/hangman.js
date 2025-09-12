//Helpers
const MaxWrong = 6;
const IMAGE_PATH = "images/";
let usedLetters = [];

// declare and initialize array
let game = [
  "PINEAPPLE",
  "DRAGONFLY",
  "HURRICANE",
  "GALAXY",
  "TORNADO",
  "PYRAMID",
  "VOLCANO",
  "OCEAN",
  "ZEBRA",
  "JUNGLE",
];
let choice = Math.floor(Math.random() * game.length);
let answer = game[choice];
let myLength = answer.length;
let display = Array(myLength).fill("_");
let win = myLength;
let letters = answer.split("");
let attemptsLeft = 6;
let output = "";
let userLetter = "";
let found = false;
// game setup works fine --steffen
function setup() {
  alert(answer);
  output = display.join(" ");
  document.getElementById("word").innerHTML = output;
  document.getElementById("guesses").innerHTML =
    "You have " + attemptsLeft + " guesses left";
  renderUsed();
  updateImage();
  document.getElementById("word").innerHTML = output;
}

// Issue below here
// noticed if we uncomment below it reveals all letter for the hangman

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  found = false;
  output = "";
  userLetter = (document.getElementById("guess").value || "")
    .trim()
    .toUpperCase();
  if (!/^[A-Z]$/.test(userLetter)) return; // only A-Z allowed
  if (usedLetters.includes(userLetter)) {
    // already guessed; do nothing (don’t decrement attempts)
    return;
  }
  usedLetters.push(userLetter);
  renderUsed();

  document.getElementById("guess").value = ""; //would this reset value to null

  for (let c = 0; c < answer.length; c++) {
    //alert(letters[c]);
    if (userLetter === letters[c]) {
      if (display[c] === "_") {
        // prevent double-count
        display[c] = userLetter;
        win--;
      }
      found = true;
    }
    output = output + display[c] + " ";
  }

  if (found == false) {
    attemptsLeft--;
    updateImage();
  }
  if (win < 1) {
    document.getElementById("guesses").innerHTML = "YOU WIN!!!";
  } else if (attemptsLeft < 1) {
    document.getElementById("guesses").innerHTML = "YOU LOSE!!!";
  } else {
    document.getElementById("guesses").innerHTML =
      "You have " + attemptsLeft + " guesses left";
  }

  document.getElementById("word").innerHTML = output;
  output = "";
});
//updates the image based on attempts left
function updateImage() {
  const wrongs = MaxWrong - attemptsLeft; 
  const frame = String(wrongs + 1).padStart(2, "0"); 
  document.getElementById("hangman").src = IMAGE_PATH + frame + ".png";
}
//show used letters
function renderUsed() {
  const span = document.getElementById("guessed");
  if (span) span.textContent = usedLetters.join(", ");
}

//scirpt connected fine somereason the button and the script are not registering.
