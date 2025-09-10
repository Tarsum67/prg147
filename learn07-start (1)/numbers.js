function start() {
  // print your name to the name heading
  document.getElementById("name").innerHTML = "Travis Routhier";
  /*
            read/watch the associated reference and complete the directions in the comments.

        */

  /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */
  const a = 5;
  const b = "7";
  const sum = a + b;
  document.getElementById(
    "add"
  ).innerHTML = `Expression: ${a} + "${b}" → Result: ${sum} (type: ${typeof sum})`;

  /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */

  /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

  // Demonstrate the use of toString() and print to the to-string paragraph
  const tsNum = 255;
  document.getElementById(
    "to-string"
  ).innerHTML = `${tsNum}.toString() → "${tsNum.toString()}" (type: ${typeof tsNum.toString()})<br>
     ${tsNum}.toString(16) (hex) → "${tsNum.toString(16)}"<br>
     ${tsNum}.toString(2) (binary) → "${tsNum.toString(2)}"`;

  // Demonstrate the use of toExponential() and print to the exponent paragraph
  const expNum = 12345.678;
  document.getElementById(
    "exponent"
  ).textContent = `${expNum}.toExponential(2) → ${expNum.toExponential(2)}`;

  // Demonstrate the use of toFixed() and print to the fixed paragraph
  const fixNum = 1.005;
  document.getElementById(
    "fixed"
  ).textContent = `${fixNum}.toFixed(2) → ${fixNum.toFixed(2)}`;

  // Demonstrate the use of toPrecision() and print to the precision paragraph
  const precNum = 12345.678;
  document.getElementById(
    "precision"
  ).textContent = `${precNum}.toPrecision(4) → ${precNum.toPrecision(4)}`;

  // Demonstrate the use of parseFloat() and print to the float paragraph
  const floatStr = "3.14px";
  document.getElementById(
    "float"
  ).textContent = `parseFloat("${floatStr}") → ${parseFloat(floatStr)}`;
  // Demonstrate the use of parseInt() and print to the int paragraph
  const intStr = "08";
  document.getElementById(
    "int"
  ).textContent = `parseInt("${intStr}", 10) → ${parseInt(intStr, 10)}`;

  // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

  /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
  const loose = 0 == false; // true (coercion)
  const strict = 0 === false; // false (number !== boolean)
  document.getElementById(
    "equals"
  ).innerHTML = `== performs type coercion (e.g., 0 == false → ${loose}).<br>
     === compares without coercion (e.g., 0 === false → ${strict}).<br>
     Prefer === to avoid surprises.`;

  // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
  // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // In the logic paragraph describe the order of precedence for and / or operators
  document.getElementById("logic").textContent =
    "Precedence: ! (NOT) > && (AND) > || (OR). Example: A || B && C → A || (B && C).";

  // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
  // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474

  // Write code to demonstrate the use of the switch statement and display results to switch paragraph
  const day = new Date().getDay(); // 0=Sun..6=Sat
  let dayType;
  switch (day) {
    case 0:
    case 6:
      dayType = "Weekend";
      break;
    default:
      dayType = "Weekday";
      break;
  }
  document.getElementById(
    "switch"
  ).textContent = `Today is a ${dayType} (getDay() = ${day}).`;

  // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
  // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
  // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    const age = 20;
  const canEnter = (age >= 18) ? "Yes, adult admission." : "No, minor admission.";
  document.getElementById("ternary").textContent =
    `Age = ${age} → ${canEnter}`;

}
