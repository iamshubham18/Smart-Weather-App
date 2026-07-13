const forecastService = require("../services/forecastService");
const { formatForecastData } = require("../utils/forecastFormatter");

// Get 5-day forecast by city
const getForecast = async (req, res) => {
  try {
    const city = req.params.city;

    // Get raw forecast data
    const forecastData = await forecastService.getForecast(city);

    // Format forecast
    const formattedForecast = formatForecastData(forecastData);

    // Send formatted forecast
    res.status(200).json(formattedForecast);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch forecast data",
      error: error.message,
    });
  }
};

// Get 5-day forecast by current location
const getForecastByLocation = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    // Get raw forecast data
    const forecastData = await forecastService.getForecastByLocation(
      lat,
      lon
    );

    // Format forecast
    const formattedForecast = formatForecastData(forecastData);

    // Send formatted forecast
    res.status(200).json(formattedForecast);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch forecast data",
      error: error.message,
    });
  }
};

module.exports = {
  getForecast,
  getForecastByLocation,
};