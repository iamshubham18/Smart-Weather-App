import { motion } from "framer-motion";
import { FaCloudSun } from "react-icons/fa";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-5 z-50 px-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl shadow-2xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaCloudSun className="text-3xl text-yellow-300" />

          <div>
            <h1 className="text-xl font-bold text-white">
              Weatherly
            </h1>

            <p className="text-xs text-white/70">
              Live Forecast
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <button className="text-white/90 hover:text-cyan-300 transition">
            Home
          </button>

          <button className="text-white/90 hover:text-cyan-300 transition">
            Forecast
          </button>

          <button className="text-white/90 hover:text-cyan-300 transition">
            Highlights
          </button>

        </div>

        {/* Status */}
        <div className="hidden lg:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-sm text-white">
            Live Weather
          </span>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;