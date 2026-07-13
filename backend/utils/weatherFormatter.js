const formatWeatherData = (data) => {
  return {
    city: data.name,
    country: data.sys.country,

    temperature: data.main.temp,
    feelsLike: data.main.feels_like,

    humidity: data.main.humidity,
    pressure: data.main.pressure,

    windSpeed: data.wind.speed,

    weather: data.weather[0].main,
    description: data.weather[0].description,

    icon: data.weather[0].icon,
  };
};

module.exports = {
  formatWeatherData,
};