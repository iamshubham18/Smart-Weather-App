const axios = require("axios");

const apiKey = process.env.OPENWEATHER_API_KEY;

// Get 5-Day Forecast by City
const getForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);

  return response.data;
};

// Get 5-Day Forecast by Location
const getForecastByLocation = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);

  return response.data;
};

module.exports = {
  getForecast,
  getForecastByLocation,
};