import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
} from "react-icons/wi";

import { MdVisibility } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiThermometer } from "react-icons/fi";

import { motion } from "framer-motion";

import { getWeatherIcon } from "../utils/weatherIcon";
import WeatherStat from "./WeatherStat";

function WeatherCard({ weather }) {
  if (!weather) return null;

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

  const glow = {
    Clear: "shadow-yellow-300/30",
    Clouds: "shadow-cyan-300/30",
    Rain: "shadow-blue-400/30",
    Drizzle: "shadow-blue-400/30",
    Thunderstorm: "shadow-purple-500/30",
    Snow: "shadow-white/30",
    Mist: "shadow-slate-300/30",
  };

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.01 }}
      className={`
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/20
        bg-white/10
        backdrop-blur-2xl
        p-10
        shadow-2xl
        ${glow[weather.weather] || "shadow-cyan-300/20"}
      `}
    >
      {/* Glass Shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div className="text-center">

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate:
                weather.weather === "Clear"
                  ? [0, 6, -6, 0]
                  : 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {getWeatherIcon(
              weather.weather,
              "mx-auto text-[9rem] text-yellow-300 drop-shadow-2xl"
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-7xl font-black text-white"
          >
            {Math.round(weather.temperature)}°
          </motion.h1>

          <div className="mt-5 flex items-center justify-center gap-2">
            <FaLocationDot className="text-xl text-red-400" />

            <h2 className="text-3xl font-semibold text-white">
              {weather.city}
            </h2>
          </div>

          <p className="mt-3 text-xl capitalize text-white/80">
            {weather.description}
          </p>

          <p className="mt-3 text-white/60">
            {formattedDate}
          </p>

          <p className="text-white/60">
            {formattedTime}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3">
            <FiThermometer className="text-xl text-yellow-300" />

            <span className="text-white">
              Feels like <b>{Math.round(weather.feelsLike)}°C</b>
            </span>
          </div>

        </div>

        {/* Right */}
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
    </motion.div>
  );
}

export default WeatherCard;