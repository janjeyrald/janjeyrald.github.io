const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=16.1561&lon=119.9811&units=metric&exclude=minutely,hourly&appid=1e7be815afa70c3cbb2e3a8372839f50";
  // "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=1e7be815afa70c3cbb2e3a8372839f50";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //Get output the info in current-temp ID from APIURL .main.temp
    document.getElementById("currentTemp").textContent =
      jsObject.current.temp;
    document.getElementById("humidityResult").textContent = jsObject.current.humidity + "%";
    document.getElementById("condition").textContent =
      jsObject.current.weather[0].description;



  //My 3 Day Forecast

  // Create an array for 3-day forecast
 
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    let d = new Date();
    let day1 = dayOfWeek[d.getDay()];
    let day2 = dayOfWeek[d.getDay() + 1];
    let day3 = dayOfWeek[d.getDay() + 2];

    document.getElementById("day1").textContent = day1;
    document.getElementById("day2").textContent = day2;
    document.getElementById("day3").textContent = day3;

    let d1 = jsObject.current.temp;
    let d2 = jsObject.daily[0].temp.day;
    let d3 = jsObject.daily[2].temp.day;

    document.getElementById("fr1").textContent = Math.round(d1) + " °C";
    document.getElementById("fr2").textContent = Math.round(d2) + " °C";
    document.getElementById("fr3").textContent = Math.round(d3) + " °C";
    
});

