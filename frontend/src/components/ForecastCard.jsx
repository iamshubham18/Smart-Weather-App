function ForecastCard({ day, icon, temp }) {
  return (
    <div
      className="
      min-w-[130px]
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
      <h3 className="text-white font-semibold">{day}</h3>

      <div className="text-5xl my-4">{icon}</div>

      <p className="text-white text-xl font-bold">{temp}</p>
    </div>
  );
}

export default ForecastCard;