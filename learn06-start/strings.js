function start() {
  // follow the directions in the comments
  // print to the index page

  // print your name to the name heading
  document.getElementById("name").textContent = "Travis Routhier";

  // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp

  // String length: calculate the string length and print to the length paragraph
  let myString = "Be it ever so humble, there is no place like home.";
  document.getElementById("length").textContent = `Length: ${myString.length}`;

  // Escape sequences
  // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
  // Using \", \', and \\ here
  const escapeText = "He said: \"Stay home.\" It\'s cozy.";
  document.getElementById("escape").textContent = escapeText;

  // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

  // create a variable named 'name' and store your complete name in it
  const name = "Travis Austin Routhier"; 

  // Use the JavaScript slice function to display your first name to first paragraph
  const firstSpace = name.indexOf(" ");
  const firstName = firstSpace !== -1 ? name.slice(0, firstSpace) : name;
  document.getElementById("first").textContent = firstName;

  // Use the Javascript substring Method to display your middle name to the middle paragraph
  const lastSpace = name.lastIndexOf(" ");
  const maybeMiddle = (firstSpace !== -1 && lastSpace !== -1 && lastSpace !== firstSpace)
    ? name.substring(firstSpace + 1, lastSpace)
    : "";
  document.getElementById("middle").textContent = maybeMiddle || "(no middle name)";

  // Use the JavaScript substr Method to display your last name to the last paragraph
  // (W3Schools shows substr(start, length); here we just start at the last space + 1)
  const lastName = lastSpace !== -1 ? name.substr(lastSpace + 1) : "";
  document.getElementById("last").textContent = lastName || "(no last name)";

  // replacing string content - in the following variable use the replace method to put your major
  // in a new string and print to the major paragraph
  let major = "I'm majoring in Physical Therapy at McHenry County College";
  const newMajor = major.replace("Physical Therapy", "Web Development");
  document.getElementById("major").textContent = newMajor;

  // convert the following variable to upper case then print to the upper paragraph
  let myText = "It\'s a great day to be alive!";
  document.getElementById("upper").textContent = myText.toUpperCase();

  // Use the trim() method to remove white spaces from the following variable and print to the
  // trim paragraph
  let trimText = "                  McHenry County College                ";
  document.getElementById("trim").textContent = trimText.trim();

  // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph
  let months = "January, February, March, April, May, June, July, August, September, October, November, December";
  const mayIndex = months.indexOf("May");
  document.getElementById("index").textContent = mayIndex;

  // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

  // create a template literals for both your first and last name (name the variables first and last)
  let first = `${firstName}`;
  let last = `${lastName}`;

  // Use Variable substitutions to create a greeting that incorporates your first and last name and
  // print to the greeting paragraph
  const greeting = `Hello, ${first} ${last || ""}! Welcome to JavaScript Strings.`;
  document.getElementById("greeting").textContent = greeting.trim();
}
