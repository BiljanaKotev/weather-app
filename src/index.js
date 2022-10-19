// Changes the City name to whatever is being searched in the search bar
function enterCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchCity.value}`;
}

let search = document.querySelector("#form-submit");
search.addEventListener("submit", enterCity);

// Formatted Date
function formatDate(date) {
  let now = date;

  let currentDate = now.getDate();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dateHeading = document.querySelector("#date-time");
  dateHeading.innerHTML = `${day} ${currentDate} ${hours}:${minutes}`;
}

let realDate = new Date();

formatDate(realDate);

// Weather API
function getWeather(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let inputCity = document.querySelector("#degrees-celsius");
  inputCity.innerhtml = `{temp}`;
}

let city = "ohrid";
let apiKey = "eea209ee0d6a3cd574fa3023128ed03a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(getWeather);
