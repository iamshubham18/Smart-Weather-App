const axios = require("axios");

const getWeather = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);

  return response.data;
};

module.exports = {
  getWeather,
};