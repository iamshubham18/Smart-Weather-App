const weatherService = require("../services/weatherService");

const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const weather = await weatherService.getWeather(city);

    res.json(weather);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch weather data",
      error: error.message,
    });
  }
};

module.exports = {
  getWeather,
};