import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCloudSun } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Forecast", "Highlights"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-5 z-50 px-4"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-all duration-500
        ${
          scrolled
            ? "border-white/20 bg-slate-900/55 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
        }
        px-6 py-4`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <motion.div
            animate={{
              y: [0, -3, 0],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCloudSun className="text-4xl text-yellow-300 drop-shadow-lg" />
          </motion.div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              Weatherly
            </h1>

            <p className="text-xs text-white/70 tracking-wider uppercase">
              Live Forecast
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              className="group relative text-white/90 transition"
            >
              <span className="group-hover:text-cyan-300 transition-colors duration-300">
                {item}
              </span>

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Status */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden lg:flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/10"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-sm font-medium text-white">
            Live Weather
          </span>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;