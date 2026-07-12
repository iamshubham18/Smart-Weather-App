function SearchBox() {
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

      <label className="block text-white text-lg font-semibold mb-3">
        Enter City
      </label>

      <input
        type="text"
        placeholder="Search for a city..."
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
        "
      />

      <button
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
        "
      >
        🌎 Get Weather
      </button>

    </div>
  );
}

export default SearchBox;