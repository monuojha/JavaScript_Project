let CityName = document.getElementById("city");

let btn = document.getElementById("btn");
let result = document.querySelector("#result");

btn.addEventListener("click", WeatherByCity);
function WeatherByCity() {
  let CityNamevalue = CityName.value;
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${CityNamevalue}&appid=${key}&units=metric`;
  if (CityNamevalue.lenght != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        console.log(data.name);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.main.feels_like);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);

        result.innerHTML = `
          <h1 class="city">${data.name}</h1>
          <h4 class="weather">${data.weather[0].main}</h4>
          
          <h4 class="weather">${data.weather[0].description}</h4>
        <img class="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
          <h1 class="temp">${data.main.feels_like}</h1>
          <h4 class="min-max"> min${data.main.temp_min} / max${data.main.temp_max}</h4>
          
        `;
      })
      .catch((error) => console.log(error));
  } else {
    console.log("city is not found ");
  }
}

WeatherByCity();
