function HighlightCard({ icon, title, value, subtitle }) {
  return (
    <div
      className="
      bg-white/20
      backdrop-blur-xl
      border
      border-white/20
      rounded-2xl
      p-6
      shadow-lg
      hover:scale-105
      hover:bg-white/25
      transition-all
      duration-300
      "
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-white text-lg font-semibold">
        {title}
      </h3>

      <p className="text-white text-3xl font-bold mt-3">
        {value}
      </p>

      <p className="text-white/70 mt-2">
        {subtitle}
      </p>
    </div>
  );
}

export default HighlightCard;