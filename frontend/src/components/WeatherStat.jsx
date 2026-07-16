import { motion } from "framer-motion";

function WeatherStat({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/15
        bg-white/10
        backdrop-blur-xl
        p-6
        text-center
        shadow-xl
        transition-all
        duration-300
        hover:bg-white/15
        hover:border-cyan-300/40
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-transparent to-sky-500/10"></div>

      <div className="relative z-10">

        <motion.div
          whileHover={{ rotate: 8, scale: 1.15 }}
          transition={{ type: "spring" }}
          className="flex justify-center mb-4 text-5xl text-cyan-200"
        >
          {icon}
        </motion.div>

        <p className="text-sm uppercase tracking-wider text-white/65">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          {value}
        </h2>

      </div>
    </motion.div>
  );
}

export default WeatherStat;