const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1e7be815afa70c3cbb2e3a8372839f50";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //Get output the info in current-temp ID from APIURL .main.temp
    let t = document.getElementById("currentTemp").textContent = jsObject.main.temp;
    document.getElementById("humidityResult").textContent = jsObject.main.humidity + "%";
    let w = document.getElementById("windSpeed").textContent = jsObject.wind.speed;
    document.getElementById("condition").textContent = jsObject.weather[0].description;
    const imagesrc = "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png"; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);

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
  });
