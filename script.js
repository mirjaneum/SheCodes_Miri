let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

function changeCity(event) {
  event.preventDefault();

  let searchCity = document.querySelector("#citySearch");
  let showCity = searchCity.value;

  let h1 = document.querySelector("h1");
  h1.innerHTML = showCity;

  let lowerCaseCity = showCity.toLowerCase();

  if (weather[lowerCaseCity] !== undefined) {
    let temperature = weather[lowerCaseCity].temp;
    let celsiusTemperature = Math.round(temperature);

    let fahrenheitTemperature = weather[lowerCaseCity].temp;
    fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

    let boldTemp = document.querySelector("span.today");
    boldTemp.innerHTML = `☀️<strong>${celsiusTemperature}</strong><sup>°C</sup> / <strong>${fahrenheitTemperature}</strong><sup>°F</sup> `;

    let humidity = weather[lowerCaseCity].humidity;
    humidity = Math.round(humidity);
    let focusRed = document.querySelector("span.focus-red");
    focusRed.innerHTML = humidity + "%";
  } else {
    let replaceForm = document.querySelector("form");
    replaceForm.innerHTML =
      "<p>Ooops, your city is currently not available. Try again!<p>";
    let removeRest = document.querySelector("div.grid-today");
    removeRest.innerHTML = null;
    setTimeout(() => {
      document.location.reload();
    }, 2000); //arrow function for simple function expressions.
  }
}

let findForm = document.querySelector(".search");
findForm.addEventListener("submit", changeCity);

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
console.log(time);
let updateDate = document.querySelector("#date-time");
updateDate.innerHTML = `${showDate} ${time}`;
