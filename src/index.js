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


function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}


function handleLocation(coordinates){
  let cityInput = document.querySelector("#city-input").value;
let apiKey = "6bfa54f242cbb59343d4e58db578dc61";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.coords.latitude}&lon=${coordinates.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(handleLocation);




function showTemperature(response) {
  console.log(response.data);
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let cityInput = response.data.name;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

windElement.innerHTML =Math.round(response.data.wind.speed);
cityInput.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
dateElement.innerHTML = currentDayElement(response.data.dt);
iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
iconElement.setAttribute("alt", response.data.weather[0].description);
h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;

}

let form = document.querySelector("#control-form");
form.addEventListener("submit", searchCity);