import "./style.css";

import getWeather from "./getWeather";

const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("locationInput").value;
  console.log(`Fetching weather for: ${location}`);

  getWeather(location);
});

getWeather("Copenhagen");
