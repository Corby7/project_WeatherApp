export default async function getWeather(location) {
  const apiKey = "APJSHVLLALZUJ29PJVHE3ETFC";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const weatherData = {
      address: data.address,
      resolvedAddress: data.resolvedAddress,
      currentWeather: data.currentConditions,
      weatherDescription: data.description,
      forecast: data.days,
    };
    console.log(weatherData);
  } catch (error) {
    console.log(error.message);
  }
}
