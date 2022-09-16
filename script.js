const url = "https://api.openweathermap.org/data/2.5/";
const key = "be84b9dd7eeb3ac848f9a856d44146d0";

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");


const setQuery = (e) => {
  getResult(searchBar.value);
}

searchBtn.addEventListener("click", setQuery);

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
  .then(weather => {
    return weather.json();
  })
  .then(displayResult)
}

const displayResult = (result) => {
  console.log(result);
  let city = document.querySelector(".weather-app__city");
  city.textContent = `${result.name}, ${result.sys.country}`;
  let temp = document.querySelector(".weather-app__temp");
  temp.textContent = `${Math.round(result.main.temp)}°C`;
  let event = document.querySelector(".weather-app__event");
  event.textContent = `${result.weather[0].description}`;
  let minmax = document.querySelector(".weather-app__minmax");
  minmax.textContent = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
}


