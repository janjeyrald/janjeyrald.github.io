let oLastModif = (document.lastModified);
document.getElementById("lastupdate").innerHTML = oLastModif;

let days =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

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
let dayName = days[d.getDay()];
let monthName = months[d.getMonth()];
let year= d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", "+ d.getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("currentdate").textContent = fulldate;

if (dayName == "Friday"){
    document.getElementById("pancakes").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00am. Saturday at the city park pavillion.";
    document.getElementById("pancakes").style.background= "#CFDEE7";
    document.getElementById("pancakes").style.height= "50px";
    document.getElementById("pancakes").style.padding= "15px";
}
