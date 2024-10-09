import getGif from "./getGIF";

export default async function updateScreen(weatherData) {
  const address = document.getElementById("address");
  const resolvedAddress = document.getElementById("resolved-address");
  const description = document.getElementById("description");
  const image = document.getElementById("gif-image");

  // Update weather information
  address.textContent = weatherData.address;
  resolvedAddress.textContent = weatherData.resolvedAddress;
  description.textContent = weatherData.weatherDescription;

  try {
    const imgUrl = await getGif(weatherData.currentWeather.conditions);
    console.log("imageUrl:" + imgUrl);
    image.src = imgUrl;
  } catch (error) {
    console.error("Error loading GIF", error);
  }
}
