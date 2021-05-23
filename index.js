let showMenu = document.getElementById("menu");


function clicked() {
    showMenu.style.display = "initial";
}


let showDate = document.getElementById("clock");
let time = "";
let date = "";


setInterval(() => {

    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let secoends = d.getSeconds();
    let amPm = "AM";

    if (hours > 12) {
        hours -= 12;
        amPm = "PM"
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secoends < 10) {
        secoends = "0" + secoends;
    }

    let month = d.getMonth();
    let day = d.getDay();
    let days = d.getDate();
    let year = d.getFullYear();

    if (days < 10) {
        days = "0" + days;
    }

    switch (day) {
        case 1: day = "Monday";
            break;
        case 2: day = "Tuesday";
            break;
        case 3: day = "Wednesday";
            break;
        case 4: day = "Thurseday";
            break;
        case 5: day = "Friday";
            break;
		case 6: day = "Saturday";
            break;
        case 0: day = "Sunday";
            break;

        default: day = "Sorry";
    }
    switch (month) {
        case 1: month = "January";
            break;
        case 2: month = "February";
            break;
        case 3: month = "March";
            break;
        case 4: month = "April";
            break;
        case 5: month = "May";
            break;
        case 6: month = "June";
            break;
        case 7: month = "July";
            break;
        case 8: month = "August";
            break;
        case 9: month = "September";
            break;
        case 10: month = "October";
            break;
        case 11: month = "November";
            break;
        case 12: month = "December";
            break;
        default: month = "Sorry";
    }

    time = hours + ":" + minutes + ":" + secoends + " " + amPm;
    date = day + ", " + " " + month + " " + days + ", " + year;

    showDate.innerHTML = time + "<br> <br>" + date;

}, 1000);
