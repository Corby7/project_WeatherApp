export default async function getGif(weather) {
  const apiKey = "BPMhfHIaxj8MPrxT2ej2PExJXjjMaE08";
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${weather}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const gifData = await response.json();
    const imgUrl = gifData.data.images.original.url;
    return imgUrl;
  } catch (error) {
    console.log(error.message);
  }
}
