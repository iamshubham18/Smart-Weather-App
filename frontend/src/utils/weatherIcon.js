import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export const getWeatherIcon = (weather) => {
  if (!weather) {
    return WiDaySunny;
  }

  switch (weather.toLowerCase()) {
    case "clear":
      return WiDaySunny;

    case "clouds":
      return WiCloud;

    case "rain":
    case "drizzle":
      return WiRain;

    case "thunderstorm":
      return WiThunderstorm;

    case "snow":
      return WiSnow;

    case "mist":
    case "fog":
    case "haze":
      return WiFog;

    default:
      return WiDaySunny;
  }
};