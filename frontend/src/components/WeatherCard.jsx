import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
} from "react-icons/wi";

import { MdVisibility } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiThermometer } from "react-icons/fi";

import { getWeatherIcon } from "../utils/weatherIcon";
import { motion } from "framer-motion";

import WeatherStat from "./WeatherStat";

function WeatherCard({ weather }) {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Don't show card until weather is available
  if (!weather) {
    return null;
  }

  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="text-center">

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate:
                weather.weather === "Clear"
                  ? [0, 5, -5, 0]
                  : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {getWeatherIcon(
              weather.weather,
              "text-yellow-300 text-9xl mx-auto drop-shadow-lg"
            )}
          </motion.div>

          <h1 className="text-white text-7xl font-bold mt-2">
            {Math.round(weather.temperature)}°C
          </h1>

          <div className="flex justify-center items-center gap-2 mt-4">
            <FaLocationDot className="text-red-400 text-xl" />

            <h2 className="text-white text-3xl font-semibold">
              {weather.city}
            </h2>
          </div>

          <p className="text-white/80 text-xl mt-2 capitalize">
            {weather.description}
          </p>

          <p className="text-white/70 mt-2">
            {formattedDate} • {formattedTime}
          </p>

          <div className="flex justify-center items-center gap-2 mt-4">
            <FiThermometer className="text-yellow-300 text-xl" />

            <span className="text-white">
              Feels Like {Math.round(weather.feelsLike)}°C
            </span>
          </div>

        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">

          <WeatherStat
            icon={<WiHumidity />}
            title="Humidity"
            value={`${weather.humidity}%`}
          />

          <WeatherStat
            icon={<WiStrongWind />}
            title="Wind"
            value={`${weather.windSpeed} m/s`}
          />

          <WeatherStat
            icon={<MdVisibility />}
            title="Visibility"
            value={`${weather.visibility / 1000} km`}
          />

          <WeatherStat
            icon={<WiBarometer />}
            title="Pressure"
            value={`${weather.pressure} hPa`}
          />

        </div>

      </div>
    </div>
  );
}

export default WeatherCard;