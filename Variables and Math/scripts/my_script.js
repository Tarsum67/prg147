// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

let taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
     lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

 function scope() {
    //fix the errors
     var firstName = "Meredith",
     lastName = "Engel";
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
} 

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    var dog3 = "Paisley";
   var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "ory";
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    const breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("new-doggos").innerHTML = dogs;
    document.getElementById("breeds").innerHTML = breeds;
}
 

function myMath() {
    // create statements demonstrating the use of each math operator
    let x = 10;
    let y = 5;
    document.getElementById("addition").innerHTML = "x + y = " + (x + y);
    document.getElementById("subtraction").innerHTML = "x - y = " + (x - y);
    document.getElementById("multiplication").innerHTML = "x * y = " + (x * y);
    document.getElementById("exponent").innerHTML = "x**y" + (x ** y);
    document.getElementById("division").innerHTML = "x / y = " + (x / y);
    document.getElementById("modulus").innerHTML = "x % y = " + (x % y);
    document.getElementById("increment").innerHTML = "++x = " + (++x);
    document.getElementById("decrement").innerHTML = "--y = " + (--y);
}
  
   

function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    x += 1
    document.getElementById("plus-equals").innerHTML = "x += 1" + "x = " + x;
    x -= 1
    document.getElementById("minus-equals").innerHTML = "x -= 1" + "x = " + x;
    x *= 2
    document.getElementById("times-equals").innerHTML = "x *= 2" + "x = " + x;
    x /= 2
    document.getElementById("divided-equals").innerHTML = "x /= 2" + "x = " + x;
    x %= 3
    document.getElementById("modulus-equals").innerHTML = "x %= 3" + "x = " + x;
} 


function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    ;
const kyju = ["Goadzilla","Motha","Gigan"];
document.getElementById("array").innerHTML = kyju;

const person = { name: "Travis", age: 23, hobby: "Jiu-Jitsu" };
    document.getElementById("object").innerHTML = person.name + ", " + person.age + ", " + person.hobby;
}
