const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=1e7be815afa70c3cbb2e3a8372839f50";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //Get output the info in current-temp ID from APIURL .main.temp
    let temp = (document.getElementById("currentTemp").textContent =
      jsObject.main.temp);
    let ws = (document.getElementById("windSpeed").textContent =
      jsObject.wind.speed);
    document.getElementById("humidityResult").textContent =
      jsObject.main.humidity + "%";

    document.getElementById("condition").textContent =
      jsObject.weather[0].description;
    

    if (temp <= 50 && ws >= 3) {
      let result =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(ws, 0.16) +
        0.4275 * temp * Math.pow(ws, 0.16);

      result = document.getElementById("windChillInput").innerHTML =
        Math.round(result) + "&deg; " + "F";
    } else {
      result = "N/A";

      document.getElementById("windChillInput").innerHTML = result;
    }
  });

//My 5 Day Forecast

const apiforecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=1e7be815afa70c3cbb2e3a8372839f50";

fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // Create an array for 5-day forecast
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = 0;

    //Set varialble and use list.filter to show the data in "18:00:00"
    const fiveDays = jsObject.list.filter((element) =>
      element.dt_txt.includes("18:00:00")
    );

    for (i = 0; i < fiveDays.length; i++) {
      let d = new Date(fiveDays[i].dt_txt);

      //write day name from Array
      document.getElementById("day" + (day + 1)).textContent =
        dayOfWeek[d.getDay()];

      //Output Temperature
      document.getElementById("fr" + (day + 1)).textContent =
        fiveDays[day].main.temp + " °F";

      // Create address for img source
      var imagesrc =
        "https://openweathermap.org/img/w/" +
        fiveDays[day].weather[0].icon +
        ".png";

      document.getElementById("imagesrc" + (day + 1)).textContent = imagesrc;
      document.getElementById("icon" + (day + 1)).setAttribute("src", imagesrc);
      document
        .getElementById("icon" + (day + 1))
        .setAttribute("alt", fiveDays[0].weather[0].description);

      day++;
    }
  });
