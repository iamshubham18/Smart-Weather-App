function SkeletonCard() {
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 animate-pulse">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-white/20"></div>

          <div className="w-40 h-10 bg-white/20 rounded mt-6"></div>

          <div className="w-56 h-6 bg-white/20 rounded mt-4"></div>

          <div className="w-48 h-5 bg-white/20 rounded mt-3"></div>

        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white/15 rounded-2xl p-6"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full"></div>

              <div className="w-24 h-5 bg-white/20 rounded mt-5"></div>

              <div className="w-20 h-8 bg-white/20 rounded mt-3"></div>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default SkeletonCard;