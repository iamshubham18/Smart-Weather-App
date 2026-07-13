const express = require("express");

const router = express.Router();

const weatherController = require("../controllers/weatherController");

// Get weather by current location
// Example: /api/weather/location/current?lat=12.97&lon=77.59
router.get("/location/current", weatherController.getWeatherByLocation);

// Get weather by city
// Example: /api/weather/Bangalore
router.get("/:city", weatherController.getWeather);

module.exports = router;