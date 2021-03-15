const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=1e7be815afa70c3cbb2e3a8372839f50";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });