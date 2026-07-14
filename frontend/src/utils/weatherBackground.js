import sunny from "../assets/weather/sunny.jpg";
import clouds from "../assets/weather/clouds.jpg";
import rain from "../assets/weather/rain.jpg";
import thunderstorm from "../assets/weather/thunderstorm.jpg";
import snow from "../assets/weather/snow.jpg";
import mist from "../assets/weather/mist.jpg";
import defaultImage from "../assets/weather/default.jpg";

export const getWeatherBackground = (weather) => {
  if (!weather) return defaultImage;

  switch (weather.toLowerCase()) {
    case "clear":
      return sunny;

    case "clouds":
      return clouds;

    case "rain":
    case "drizzle":
      return rain;

    case "thunderstorm":
      return thunderstorm;

    case "snow":
      return snow;

    case "mist":
    case "fog":
    case "haze":
      return mist;

    default:
      return defaultImage;
  }
};