const express = require("express");

const router = express.Router();

const forecastController = require("../controllers/forecastController");

// Get 5-day forecast by current location
// Example:
// /api/forecast/location/current?lat=12.97&lon=77.59
router.get(
  "/location/current",
  forecastController.getForecastByLocation
);

// Get 5-day forecast by city
// Example:
// /api/forecast/Bangalore
router.get(
  "/:city",
  forecastController.getForecast
);

module.exports = router;