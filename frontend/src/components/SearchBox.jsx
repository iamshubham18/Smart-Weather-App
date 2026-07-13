import { useState } from "react";
import Loading from "./Loading";

function SearchBox({ onSearch, onLocationSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (city.trim() === "") return;

    try {
      await onSearch(city);

      // Clear input after successful search
      setCity("");
    } catch {
      // Home handles errors
    }
  };

  const handleLocationSearch = () => {
    onLocationSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

      <label className="block text-white text-lg font-semibold mb-3">
        Enter City
      </label>

      <input
        type="text"
        placeholder="Search for a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
        className="
          w-full
          px-5
          py-4
          rounded-2xl
          bg-white/10
          border
          border-white/30
          text-white
          placeholder:text-white/60
          outline-none
          focus:ring-2
          focus:ring-white/60
          transition
          disabled:opacity-50
        "
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        disabled={loading}
        className="
          w-full
          mt-6
          py-4
          rounded-2xl
          bg-blue-600
          text-white
          text-lg
          font-semibold
          shadow-lg
          hover:bg-blue-700
          hover:scale-105
          hover:shadow-xl
          transition-all
          duration-300
          disabled:bg-blue-400
          disabled:cursor-not-allowed
          disabled:hover:scale-100
          flex
          justify-center
          items-center
          gap-2
        "
      >
        {loading ? (
          <>
            <Loading />
            Loading...
          </>
        ) : (
          "🌎 Get Weather"
        )}
      </button>

      {/* Current Location Button */}
      <button
        onClick={handleLocationSearch}
        disabled={loading}
        className="
          w-full
          mt-4
          py-4
          rounded-2xl
          bg-green-600
          text-white
          text-lg
          font-semibold
          shadow-lg
          hover:bg-green-700
          hover:scale-105
          hover:shadow-xl
          transition-all
          duration-300
          disabled:bg-green-400
          disabled:cursor-not-allowed
          disabled:hover:scale-100
        "
      >
        📍 Use My Location
      </button>

    </div>
  );
}

export default SearchBox;4
