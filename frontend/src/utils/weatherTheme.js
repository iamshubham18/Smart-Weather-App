export const getWeatherTheme = (weather) => {
  if (!weather) {
    return "from-blue-400 via-blue-500 to-blue-700";
  }

  switch (weather.toLowerCase()) {
    case "clear":
      return "from-sky-300 via-blue-400 to-blue-600";

    case "clouds":
      return "from-slate-400 via-slate-500 to-slate-700";

    case "rain":
    case "drizzle":
      return "from-slate-700 via-slate-800 to-gray-900";

    case "thunderstorm":
      return "from-purple-700 via-slate-900 to-black";

    case "snow":
      return "from-cyan-100 via-blue-200 to-slate-400";

    case "mist":
    case "fog":
    case "haze":
      return "from-gray-300 via-gray-500 to-gray-700";

    default:
      return "from-blue-400 via-blue-500 to-blue-700";
  }
};