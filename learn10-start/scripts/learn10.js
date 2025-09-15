function start() {
  // Math: https://www.w3schools.com/js/js_math.asp
  // Demonstrate the use of round, ceil, floor, trunc, sign
  // pow, min, and random and display to the appropriate paragraphs
  document.getElementById("round").innerHTML =
    "Math.round(4.6) = " + Math.round(4.6);
  document.getElementById("ceil").innerHTML =
    "Math.ceil(4.1) = " + Math.ceil(4.1);
  document.getElementById("floor").innerHTML =
    "Math.floor(4.9) = " + Math.floor(4.9);
  document.getElementById("trunc").innerHTML =
    "Math.trunc(4.9) = " + Math.trunc(4.9);
  document.getElementById("sign").innerHTML =
    "Math.sign(-25) = " + Math.sign(-25);
  document.getElementById("pow").innerHTML =
    "Math.pow(3, 4) = " + Math.pow(3, 4);
  document.getElementById("min").innerHTML =
    "Math.min(5, 10, -3, 22) = " + Math.min(5, 10, -3, 22);
  document.getElementById("random").innerHTML =
    "Math.random() = " + Math.random();

  // Random: https://www.w3schools.com/js/js_random.asp
  // create a random integer between 1 and 100 and display in the random2 paragraph
  let randomInt = Math.floor(Math.random() * 100) + 1;
  document.getElementById("random2").innerHTML =
    "Random integer (1-100): " + randomInt;

  // Booleans: https://www.w3schools.com/js/js_booleans.asp
  // read the reference

  // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
  // demonstrate and explain the difference between == and === in the
  // comparisons paragraph
      let num = 5;
    let str = "5";
    let comparisonText = "5 == '5' ➝ " + (num == str) + " (only checks value)<br>";
    comparisonText += "5 === '5' ➝ " + (num === str) + " (checks value + type)";
    document.getElementById("comparisons").innerHTML = comparisonText;

  // Conditions: https://www.w3schools.com/js/js_if_else.asp
  // Read the conditions page
      if (randomInt > 50) {
        console.log("The random number is greater than 50.");
    } else {
        console.log("The random number is 50 or less.");
    }
}
