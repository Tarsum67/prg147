/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */
function start() {
// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

 let basic = new Date();
  document.getElementById("basic").innerHTML = basic;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

  let today = new Date();
  let todayText = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  document.getElementById("today").innerHTML = todayText;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
 let birthday = new Date("2002-03-05");
  document.getElementById("birthday").innerHTML = birthday;
  
  // Convert your basic date to the ISO string format and display the result
  // in the iso paragraph
  document.getElementById("iso").innerHTML = basic.toISOString();



//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
  let d1 = new Date("09/17/2025"); 
  let d2 = new Date("2025-09-17"); 
  let d3 = new Date("September 17, 2025");
  document.getElementById("date1").innerHTML = d1;
  document.getElementById("date2").innerHTML = d2;
  document.getElementById("date3").innerHTML = d3;


//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
  document.getElementById("get1").innerHTML = "Day: " + today.getDate();
  document.getElementById("get2").innerHTML = "Weekday: " + today.getDay();
  document.getElementById("get3").innerHTML = "Year: " + today.getFullYear();
  document.getElementById("get4").innerHTML = "Month: " + today.getMonth();


// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
  let setEx = new Date();
  setEx.setFullYear(2030);
  document.getElementById("set1").innerHTML = setEx;

  setEx.setMonth(11);
  document.getElementById("set2").innerHTML = setEx;

  setEx.setDate(25);
  document.getElementById("set3").innerHTML = setEx;

  setEx.setHours(15);
  document.getElementById("set4").innerHTML = setEx;
}

// run it when page loads
start();