const formatForecastData = (forecastData) => {
  const dailyForecast = [];

  forecastData.list.forEach((item) => {
    // Keep only forecasts around 12:00 PM
    if (item.dt_txt.includes("12:00:00")) {
      const date = new Date(item.dt_txt);

      const day = date.toLocaleDateString("en-US", {
        weekday: "short",
      });

      dailyForecast.push({
        day,
        temperature: Math.round(item.main.temp),
        weather: item.weather[0].main,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      });
    }
  });

  return dailyForecast;
};

module.exports = {
  formatForecastData,
};