import axios from "axios";

const WEATHER_URL =
  "const API_URL = import.meta.env.VITE_API_URL;";

const FORECAST_URL =
  "const API_URL = import.meta.env.VITE_API_URL;";

// Get current weather by city
export const getWeather = async (city) => {
  const response = await axios.get(`${WEATHER_URL}/${city}`);
  return response.data;
};

// Get current weather by location
export const getWeatherByLocation = async (lat, lon) => {
  const response = await axios.get(
    `${WEATHER_URL}/location/current?lat=${lat}&lon=${lon}`
  );

  return response.data;
};

// Get forecast by city
export const getForecast = async (city) => {
  const response = await axios.get(`${FORECAST_URL}/${city}`);
  return response.data;
};

// Get forecast by location
export const getForecastByLocation = async (lat, lon) => {
  const response = await axios.get(
    `${FORECAST_URL}/location/current?lat=${lat}&lon=${lon}`
  );

  return response.data;
};