import { WiDaySunny } from "react-icons/wi";

function Navbar() {
  return (
    <div className="w-full max-w-6xl mx-auto pt-5 px-4">

      <nav
        className="
        flex
        items-center
        justify-between
        rounded-2xl
        bg-white/15
        backdrop-blur-2xl
        border
        border-white/20
        shadow-2xl
        px-8
        py-4
        "
      >

        {/* Logo */}

        <div className="flex items-center gap-3">

          <WiDaySunny className="text-yellow-300 text-5xl" />

          <div>

            <h1 className="text-white text-xl font-bold">
              Smart Weather
            </h1>

            <p className="text-white/70 text-sm">
              Real-Time Forecast
            </p>

          </div>

        </div>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#"
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#forecast"
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
          >
            Forecast
          </a>

          <a
            href="#highlights"
            className="text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
          >
            Highlights
          </a>

        </div>

      </nav>

    </div>
  );
}

export default Navbar;