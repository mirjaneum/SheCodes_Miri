// Store Input-value and call API
function changeCity(event) {
  event.preventDefault();

  let searchCityInput = document.querySelector("#citySearch");
  let showCity = searchCityInput.value;
  let key = "fo1b118b4f76384a070dd0e1b5et80a0";
  let weatherApi = `https://api.shecodes.io/weather/v1/current?query=${showCity}&key=${key}&units=metric`;
  console.log(weatherApi);
  axios.get(weatherApi).then(displayWeatherInformation);
}

// City and Temperature from API
function displayWeatherInformation(response) {
  let city = response.data.city;
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = city;

  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = `${Math.round(temperature)}`;

  let humidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${Math.round(humidity)}%`;

  let wind = response.data.wind.speed;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${Math.round(wind)} m/s`;

  let iconUrl = `"${response.data.condition.icon_url}"`;
  let iconElement = document.querySelector("#current-temperature-icon");
  iconElement.innerHTML = `<img src=${iconUrl}/>`;
}

// Date Variables in function
function giveDate() {
  let date = new Date();
  let showDate = date.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  showDate = weekDays[date.getDay()];
  let time = `${date.getHours()}:${date.getMinutes()}`;
  if (date.getHours() < 10) {
    time = `0${date.getHours()}:${date.getMinutes()}`;
  }
  if (date.getMinutes() < 10) {
    time = `${date.getHours()}:0${date.getMinutes()}`;
  }
  let updateDate = document.querySelector("#date-time");
  updateDate.innerHTML = `${showDate} ${time}`;
}
giveDate();

// Input Variable
let findForm = document.querySelector(".search");
findForm.addEventListener("submit", changeCity);
