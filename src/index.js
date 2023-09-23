function currentDate(now) {
  let currentDay = now.getDays();
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

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
let days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
days.forEach(function(day){

  forecastHTML = 
   forecastHTML + `
          <div class="col-2">
                <div class="weather-forecast-date"></div>
                ${day}
                <img
                  src="https://cityweatherteller.netlify.app/img/cool.jpeg"
                  alt=""
                  width="38px"
                />
                <div class="weather-forecast-temperature">
                  <span class="weather-forecast-temperature-max">99°</span>
                  <span class="weather-forecast-temperature-min">76°</span>
                </div>
              
          
          </div>`;
})

   

          forecastHTML = forecastHTML + `</div>`;

          forecastElement.innerHTML = forecastHTML;
}

function showTemperature(response) {

  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let cityInput = response.data.name;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  let strongElement = document.querySelector("#temperature");

  let celsiusTemperature = Math.round(response.data.main.temp);

  windElement.innerHTML =Math.round(response.data.wind.speed);
  cityInput.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  temperature.innerHTML = Math.round(celsiusTemperature);

iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
h1.innerHTML = `${response.data.name}`;
strongElement.innerHTML = `${temperature}`;
}


function searchCity(city) {
let cityInput = document.querySelector("#city-input").value;
let apiKey = "e6c2364656962bdcb16bc352fc42569a";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

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
let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
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

searchCity("Redding");
displayForecast();