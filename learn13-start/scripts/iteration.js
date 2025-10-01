/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

const games = ["Destiny 2", "Elden Ring", "Minecraft", "Warframe", "Stellar Blade"];

// Build a <ul> from the array with for...of
let listHTML = "<ul>";
for (const game of games) {
  listHTML += `<li>${game}</li>`;
}
listHTML += "</ul>";
document.getElementById("list").innerHTML = listHTML;




/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
const songs = new Set(["Numb", "Lucid Dreams", "Bleed", "Starshopping", "Never Too Late"]);

// Display initial set (set1)
let set1HTML = "<ul>";
for (const title of songs) {
  set1HTML += `<li>${title}</li>`;
}
set1HTML += "</ul>";
document.getElementById("set1").innerHTML = set1HTML;


// add two more songs to the set then display in the set2 paragraph
songs.add("Still Yours");
songs.add("All Girls Are the Same");


let set2HTML = "<ul>";
for (const title of songs) {
  set2HTML += `<li>${title}</li>`;
}
set2HTML += "</ul>";
document.getElementById("set2").innerHTML = set2HTML;




/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

const emails = new Map([
  ["Travis", "travis@example.com"],
  ["Amanda", "amanda@example.com"],
  ["Patty", "patty@example.com"],
  ["Joey", "joey@example.com"],
  ["Samantha", "samantha@example.com"],
]);

let map1HTML = "<ul>";
emails.forEach((email, name) => {
  map1HTML += `<li><strong>${name}</strong>: ${email}</li>`;
});
map1HTML += "</ul>";
document.getElementById("map1").innerHTML = map1HTML;

// add two new names and emails and display in map2 use the forEach() method

let map2HTML = "<ul>";
emails.forEach((email, name) => {
  map2HTML += `<li><strong>${name}</strong>: ${email}</li>`;
});
map2HTML += "</ul>";
document.getElementById("map2").innerHTML = map2HTML;

// get and display the email of one person, display in map3
const targetName = "Patty";
const oneEmail = emails.get(targetName);
document.getElementById("map3").innerHTML =
  `${targetName}'s email is: <strong>${oneEmail}</strong>`;