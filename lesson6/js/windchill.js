let t = parseFloat(document.getElementById("currentTemp").innerHTML);
let w = parseFloat(document.getElementById("windSpeed").innerHTML);

if (t <= 50 && w >= 3) {
  let result =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(w, 0.16) +
    0.4275 * t * Math.pow(w, 0.16);

  result = document.getElementById("windChillInput").innerHTML =
    Math.round(result) + "&deg; " + "F";
} else {
  result = "N/A";

  document.getElementById("windChillInput").innerHTML = result;
}