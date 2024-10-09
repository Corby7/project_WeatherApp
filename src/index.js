import "./style.css";

import getWeather from "./getWeather";
import updateScreen from "./updateScreen";

const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = document.getElementById("locationInput").value;
  console.log(`Fetching weather for: ${location}`);

  loadWeather(location);
});

async function loadWeather(location) {
  const loadingElement = document.getElementById("loading");
  const image = document.getElementById("gif-image");
  const forecast = document.getElementById("forecast");

  try {
    image.classList.add("hidden");
    forecast.classList.add("hidden");
    loadingElement.classList.remove("hidden");
    loadingElement.innerHTML = '<div class="spinner"></div>';

    const weatherData = await getWeather(location);

    if (weatherData) {
      await updateScreen(weatherData);
    } else {
      console.error("No weather data received");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  } finally {
    loadingElement.classList.add("hidden");
    image.classList.remove("hidden");
    forecast.classList.remove("hidden");
  }
}

loadWeather("Copenhagen");
