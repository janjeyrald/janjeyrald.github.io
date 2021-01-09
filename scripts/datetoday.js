let day =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = day[d.getDay()];
let monthName = months[d.getMonth()];
let year= d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", "+ d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

document.getElementById("currentyear").textContent = year;

let oLastModif = (document.lastModified);
document.getElementById("lastupdate").innerHTML = oLastModif;