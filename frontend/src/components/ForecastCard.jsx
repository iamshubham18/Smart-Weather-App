function ForecastCard({
  day,
  temperature,
  weather,
  description,
  icon,
}) {
  return (
    <div
      className="
        bg-white/20
        backdrop-blur-xl
        border
        border-white/20
        rounded-2xl
        p-5
        text-center
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
    >
      <h3 className="text-white text-lg font-semibold">
        {day}
      </h3>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto w-20 h-20"
      />

      <p className="text-white text-2xl font-bold">
        {temperature}°C
      </p>

      <p className="text-white/90 mt-2 font-medium">
        {weather}
      </p>

      <p className="text-white/70 text-sm capitalize mt-1">
        {description}
      </p>
    </div>
  );
}

export default ForecastCard;