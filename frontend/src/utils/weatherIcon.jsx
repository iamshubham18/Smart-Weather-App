import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

export const getWeatherIcon = (weather, className = "") => {
  if (!weather) {
    return <WiDaySunny className={className} />;
  }

  switch (weather.toLowerCase()) {
    case "clear":
      return <WiDaySunny className={className} />;

    case "clouds":
      return <WiCloud className={className} />;

    case "rain":
    case "drizzle":
      return <WiRain className={className} />;

    case "thunderstorm":
      return <WiThunderstorm className={className} />;

    case "snow":
      return <WiSnow className={className} />;

    case "mist":
    case "fog":
    case "haze":
      return <WiFog className={className} />;

    default:
      return <WiDaySunny className={className} />;
  }
};