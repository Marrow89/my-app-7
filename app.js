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
let now = new Date();
currentDate(now);

function searchCity(event) {
  event.preventDefault();
  let answer = document.querySelector("#city-input").value;
  let resultElement = document.querySelector("h1");
  resultElement.innerHTML = answer;
}

let form = document.querySelector("#control-form");
form.addEventListener("submit", searchCity);
