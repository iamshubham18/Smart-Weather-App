import {
  WiDaySunny,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
} from "react-icons/wi";

import { MdVisibility } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FiThermometer } from "react-icons/fi";

import WeatherStat from "./WeatherStat";

function WeatherCard() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
});
const formattedTime = currentDate.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
  return (
    <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="text-center">

  <WiDaySunny className="text-yellow-300 text-9xl mx-auto drop-shadow-lg" />

  <h1 className="text-white text-7xl font-bold mt-2">
    28°C
  </h1>

  <div className="flex justify-center items-center gap-2 mt-4">

    <FaLocationDot className="text-red-400 text-xl" />

    <h2 className="text-white text-3xl font-semibold">
      Bangalore
    </h2>

  </div>

  <p className="text-white/80 text-xl mt-2">
    Clear Sky
  </p>

  <p className="text-white/70 mt-2">
  {formattedDate} • {formattedTime}
</p>

  <div className="flex justify-center items-center gap-2 mt-4">

    <FiThermometer className="text-yellow-300 text-xl" />

    <span className="text-white">
      Feels Like 31°C
    </span>

  </div>

</div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-5">

          <WeatherStat
            icon={<WiHumidity />}
            title="Humidity"
            value="75%"
          />

          <WeatherStat
            icon={<WiStrongWind />}
            title="Wind"
            value="10 km/h"
          />

          <WeatherStat
            icon={<MdVisibility />}
            title="Visibility"
            value="8 km"
          />

          <WeatherStat
            icon={<WiBarometer />}
            title="Pressure"
            value="1012 hPa"
          />

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;