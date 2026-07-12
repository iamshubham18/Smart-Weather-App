const express = require("express");
const cors = require("cors");

const app = express();
const weatherRoutes = require("./routes/weatherRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/weather", weatherRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Smart Weather Backend is Running!");
});

module.exports = app;