const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=16.1561&lon=119.9811&units=metric&exclude=minutely,hourly&appid=1e7be815afa70c3cbb2e3a8372839f50";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //Get output the info in current-temp ID from APIURL .main.temp
    document.getElementById("currentTemp").textContent = jsObject.current.temp;
    document.getElementById("humidityResult").textContent =
      jsObject.current.humidity + "%";
    document.getElementById("condition").textContent =
      jsObject.current.weather[0].description;

    //My 3 Day Forecast

    // Create an array for 3-day forecast

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let d = new Date();
    let day1 = dayOfWeek[(d.getDay() +0)%7];
    let day2 = dayOfWeek[(d.getDay() +1)%7];
    let day3 = dayOfWeek[(d.getDay() +2)%7];

    document.getElementById("day1").textContent = day1;
    document.getElementById("day2").textContent = day2;
    document.getElementById("day3").textContent = day3;

    var img1 =
      "https://openweathermap.org/img/w/" +
      jsObject.current.weather[0].icon +
      ".png";
    var img2 =
      "https://openweathermap.org/img/w/" +
      jsObject.daily[0].weather[0].icon +
      ".png";
    var img3 =
      "https://openweathermap.org/img/w/" +
      jsObject.daily[1].weather[0].icon +
      ".png";

    document.getElementById("img1").textContent = img1;
    document.getElementById("icon1").setAttribute("src", img1) +
    document.getElementById("icon1").setAttribute("alt", "Weather Icon");

    document.getElementById("img2").textContent = img2;
    document.getElementById("icon2").setAttribute("src", img2);
    document.getElementById("icon2").setAttribute("alt", "Weather Icon");

    document.getElementById("img3").textContent = img3;
    document.getElementById("icon3").setAttribute("src", img3);
    document.getElementById("icon3").setAttribute("alt", "Weather Icon");
    

    let d1 = jsObject.current.temp;
    let d2 = jsObject.daily[0].temp.day;
    let d3 = jsObject.daily[1].temp.day;

    document.getElementById("fr1").textContent = Math.round(d1) + " °C";
    document.getElementById("fr2").textContent = Math.round(d2) + " °C";
    document.getElementById("fr3").textContent = Math.round(d3) + " °C";
    document.getElementById("weatherAlert").textContent = jsObject.alerts[0].description;
  
  });

    var closebtns = document.getElementsByClassName("close");
    var i = 0;

    closebtns[i].addEventListener("click", function() {
      this.parentElement.style.display = "none";
    });
