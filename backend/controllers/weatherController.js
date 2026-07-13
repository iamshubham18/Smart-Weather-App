const weatherService = require("../services/weatherService");
const { formatWeatherData } = require("../utils/weatherFormatter");

// Get weather by city
const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    // Get raw data from OpenWeather
    const weatherData = await weatherService.getWeather(city);

    // Format the data
    const formattedData = formatWeatherData(weatherData);

    // Send formatted data
    res.status(200).json(formattedData);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch weather data",
      error: error.message,
    });
  }
};

// Get weather by latitude & longitude
const getWeatherByLocation = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    // Get raw data from OpenWeather
    const weatherData = await weatherService.getWeatherByLocation(lat, lon);

    // Format the data
    const formattedData = formatWeatherData(weatherData);

    // Send formatted data
    res.status(200).json(formattedData);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch weather data",
      error: error.message,
    });
  }
};

module.exports = {
  getWeather,
  getWeatherByLocation,
};