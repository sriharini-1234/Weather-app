const GEO_API =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast";

export async function getWeather(city) {
  // Step 1: Find city coordinates
  const geoResponse = await fetch(
    `${GEO_API}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );

  if (!geoResponse.ok) {
    throw new Error("Unable to find the location");
  }

  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("Please enter a valid city name");
  }

  // const location = geoData.results[0];
const location = geoData.results.find(
  (result) =>
    result.name.toLowerCase() === city.trim().toLowerCase()
);

if (!location) {
  throw new Error("City not found. Please enter a valid city name.");
}
  // Step 2: Get current weather + 5 day forecast
  const weatherResponse = await fetch(
    `${WEATHER_API}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&forecast_days=5&timezone=auto`
  );

  if (!weatherResponse.ok) {
    throw new Error("Unable to fetch weather information");
  }

  const weatherData = await weatherResponse.json();

  return {
    location,
    weather: weatherData.current,
    daily: weatherData.daily,
  };
}
