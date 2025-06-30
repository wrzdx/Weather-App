const API_KEY = "KMX8M43MNKC9KS2NNCGQD9XN8";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";


class Weather {
  constructor(data) {
    this.location = data.address;
    this.time = data.currentConditions.datetime;
    this.temp = data.currentConditions.temp;
    this.condition = data.currentConditions.conditions;
    this.icon_description = data.currentConditions.icon;
    this.description = data.description;
  }

  getCelcius() {
    return ((this.temp - 32) * 5) / 9;
  }
  
  getFormatTime() {
    return this.time.slice(0, 5); 
  }

  isNight() {
    return this.icon_description.endsWith("night");
  }

  getIconPath() {
    const imageContext = require.context(
      "./images",
      false,
      /\.(svg)$/
    );

    return imageContext(`./${this.icon_description}.svg`);
  }
}

export default async function getWeather(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `${BASE_URL}/${encodedCity}?unitGroup=us&key=${API_KEY}&contentType=json`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("City not found");
  }
  const data = await response.json();
  return new Weather(data);
}
