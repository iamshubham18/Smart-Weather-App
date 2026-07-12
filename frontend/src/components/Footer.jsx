import { FaHeart, FaGithub } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";

function Footer() {
  return (
    <footer className="w-full mt-20 mb-8 px-4">
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-8">

        <div className="flex flex-col items-center text-center space-y-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <WiDaySunny className="text-yellow-300 text-5xl" />
            <h2 className="text-3xl font-bold text-white">
              Smart Weather
            </h2>
          </div>

          {/* Developers */}
          <p className="text-white text-lg">
            Developed with{" "}
            <FaHeart className="inline text-red-400 mx-1" />
            by
          </p>

          <h3 className="text-2xl font-semibold text-white">
            Shubham Kumar Verma • Samyaraj Baidya
          </h3>

          {/* Technologies */}
          <div className="space-y-2 text-white/80">
            <p>💻 React • Tailwind CSS • Express.js</p>
            <p>⚡ Powered by OpenWeather API</p>
          </div>

          {/* GitHub */}
          <a
            href="#https://github.com/saamya2006/Weather-Apps.git"
            className="flex items-center gap-2 text-white hover:text-yellow-300 transition duration-300"
          >
            <FaGithub className="text-xl" />
            GitHub Repository
          </a>

          {/* Copyright */}
          <p className="text-white/60 text-sm pt-2 border-t border-white/20 w-full">
            © 2026 Smart Weather. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;