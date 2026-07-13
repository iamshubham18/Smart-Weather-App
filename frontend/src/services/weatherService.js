import axios from "axios";

const WEATHER_URL = "http://localhost:5000/api/weather";
const FORECAST_URL = "http://localhost:5000/api/forecast";

// Get current weather by city
export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${WEATHER_URL}/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};

// Get current weather by location
export const getWeatherByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${WEATHER_URL}/location/current?lat=${lat}&lon=${lon}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching location weather:", error);
    throw error;
  }
};

// Get 5-day forecast by city
export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${FORECAST_URL}/${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forecast:", error);
    throw error;
  }
};

// Get 5-day forecast by location
export const getForecastByLocation = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${FORECAST_URL}/location/current?lat=${lat}&lon=${lon}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching location forecast:", error);
    throw error;
  }
};