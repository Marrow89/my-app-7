function currentDate(now) {
  let currentDay = now.getDay();
  let currentHour = now.getHours();
  if(currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinute = now.getMinutes();
  if(currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let currentDayElement = document.getElementById("currentDay");
  currentDayElement.textContent = days[currentDay];

  let currentHourElement = document.getElementById("currentHour");
  currentHourElement.textContent = currentHour + ":";

  let currentMinuteElement = document.getElementById("currentMinute");
  currentMinuteElement.textContent = currentMinute;
}

currentDate(new Date());

function searchCity(city) {
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=95fccd7ba44d9b658ta47a02aa43bo69&units=metric`;
axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function showTemperature(response) {
  let cityInput = document.querySelector("h1");
  let temperature = document.querySelector("#temperature");
   let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  
  celsiusTemperature = Math.round(response.data.temperature.current);

  cityInput.innerHTML = response.data.city;
  temperature.innerHTML = Math.round(celsiusTemperature);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  iconElement.setAttribute("src", response.data.condition.icon_url); 
}

  let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayFahrenheitTemperature(event) {
event.preventDefault();
let temperatureElement = document.querySelector("#temperature");

celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheitTemperature = celsiusTemperature;
temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event){
event.preventDefault();
celsiusLink.classList.add("active");
fahrenheitLink.classList.remove("active");
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);



