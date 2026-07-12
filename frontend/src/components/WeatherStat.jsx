function WeatherStat({ icon, title, value }) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-md
      border
      border-white/20
      rounded-2xl
      p-6
      text-center
      shadow-lg
      hover:scale-105
      hover:bg-white/20
      transition-all
      duration-300
    ">

      <div className="text-5xl text-white flex justify-center mb-3">
        {icon}
      </div>

      <p className="text-white/70">
        {title}
      </p>

      <h2 className="text-3xl text-white font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

export default WeatherStat;