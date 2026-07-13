const express = require("express");
const cors = require("cors");

const app = express();

const weatherRoutes = require("./routes/weatherRoutes");
const forecastRoutes = require("./routes/forecastRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/weather", weatherRoutes);
app.use("/api/forecast", forecastRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Smart Weather Backend is Running!");
});

module.exports = app;