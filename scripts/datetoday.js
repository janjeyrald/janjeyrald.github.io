

let d = new Date();
let dayName = days[d.getDay()];
let monthName = months[d.getMonth()];
let year= d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", "+ d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

document.getElementById("currentyear").textContent = year;

let oLastModif = (document.lastModified);
document.getElementById("lastupdate").innerHTML = oLastModif;