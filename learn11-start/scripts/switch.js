function calculate() {
    let chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);

 // Handle invalid input
    if (isNaN(year)) {
        document.getElementById("chinese").innerHTML = "Please enter a valid year.";
        return;
    }

    
    // Chinese zodiac repeats every 12 years
    //using the modulus operator to find the remainder when year is divided by 12
    switch (year % 12) {
        case 4:
            chi = "Rat";
            break;
        case 5:
            chi = "Ox";
            break;
        case 6:
            chi = "Tiger";
            break;
        case 7:
            chi = "Rabbit";
            break;
        case 8:
            chi = "Dragon";
            break;
        case 9:
            chi = "Snake";
            break;
        case 10:
            chi = "Horse";
            break;
        case 11:
            chi = "Goat";
            break;
        case 0:
            chi = "Monkey";
            break;
        case 1:
            chi = "Rooster";
            break;
        case 2:
            chi = "Dog";
            break;
        case 3:
            chi = "Pig";
            break;
        default:
            chi = "Sadface"; 
    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}