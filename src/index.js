function currentDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
 if(hours < 10) {
    hours = `0${currentHour}`;
  }
  let minutes = date.getMinutes();
  if(minutes < 10) {
    minutes = `0${minutes}`;
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

   let currentDateElement = document.getElementById("currentDay");
currentDayElement.textContent = days[currentDay];


let currentHourElement = document.getElementById("currentHour");
currentHourElement.textContent = currentHour + ":";


let currentMinuteElement = document.getElementById("currentMinute");
currentMinuteElement.textContent = currentMinute;
};

function showTemperature(response) {

  let h1 = document.querySelector("h1");
  let temperatureElement = Math.round("#temperature");
  let cityElement = document.querySelector("city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  
  let celsiusTemperature = Math.round(response.data.main.temp);

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  windElement.innerHTML =Math.round(response.data.wind.speed);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  


iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
h1.innerHTML = `${response.data.name}`;
strongElement.innerHTML = `${temperatureElement}`;
}




function searchCity(city) {
let cityInput = document.querySelector("#city-input").value;
let apiKey = "e6c2364656962bdcb16bc352fc42569a";
let apiUrl =`
https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(showTemperature);
}


function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);

}

function displayFahrenheitTemperature(event) {
event.preventDefault();
let temperatureElement = document.querySelector("#temperature");

celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheitTemperature = (celsiusTemperature);
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

let form = document.querySelector("#control-form");
form.addEventListener("submit", searchCity);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

