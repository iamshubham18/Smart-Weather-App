import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaLocationArrow } from "react-icons/fa";

function SearchBox({ onSearch, onLocationSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    try {
      await onSearch(city);
    } catch {
      // Error handled in Home.jsx ok
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-5"
    >
      {/* Search Input */}
      <div className="relative">
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60 text-lg" />

        <input
          type="text"
          placeholder="Search any city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full rounded-full border border-white/20 bg-white/10 py-4 pl-14 pr-32 text-white placeholder-white/60 backdrop-blur-xl outline-none transition-all duration-300 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/40"
        />

        <button
          type="button"
          onClick={onLocationSearch}
          className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
        >
          <FaLocationArrow />
          <span className="hidden sm:inline">Location</span>
        </button>
      </div>

      {/* Search Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        disabled={loading}
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 py-4 text-lg font-semibold text-white shadow-xl transition hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Searching..." : "Search Weather"}
      </motion.button>
    </motion.form>
  );
}

export default SearchBox;