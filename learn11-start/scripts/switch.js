function calculate() {
    chi = '';
    myname = document.getElementById("fname").value;
    month = parseInt(document.getElementById("month").value);
    date = parseInt(document.getElementById("date").value);
    year = parseInt(document.getElementById("year").value);


    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 1973:
        case 1974:
            chi = "Ha ha ha ha ha "
            break;


        default:
            chi = "Sadface";


    }
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}