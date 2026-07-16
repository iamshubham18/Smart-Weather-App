import { motion } from "framer-motion";

function ForecastCard({
  day,
  temperature,
  weather,
  description,
  icon,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/15
        bg-white/10
        backdrop-blur-2xl
        p-6
        text-center
        shadow-xl
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative z-10">

        <h3 className="text-lg font-semibold tracking-wide text-white">
          {day}
        </h3>

        <motion.img
          whileHover={{
            scale: 1.15,
            rotate: 8,
          }}
          transition={{
            type: "spring",
          }}
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
          className="mx-auto h-24 w-24 drop-shadow-xl"
        />

        <h2 className="text-4xl font-black text-white">
          {Math.round(temperature)}°
        </h2>

        <p className="mt-2 text-lg font-semibold text-cyan-200">
          {weather}
        </p>

        <p className="mt-1 text-sm capitalize text-white/70">
          {description}
        </p>

      </div>
    </motion.div>
  );
}

export default ForecastCard;