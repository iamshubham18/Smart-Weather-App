const formatWeatherData = (data) => {
  return {
    city: data.name,
    country: data.sys.country,

    // Temperature
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,

    // Weather Details
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    windSpeed: data.wind.speed,

    // Sunrise & Sunset
    sunrise: data.sys.sunrise * 1000,
    sunset: data.sys.sunset * 1000,

    // Weather Condition
    weather: data.weather[0].main,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
};

module.exports = {
  formatWeatherData,
};