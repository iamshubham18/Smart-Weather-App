import ForecastCard from "./ForecastCard";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

function Forecast() {
  return (
    <div id="forecast" className="mt-10">

      <h2 className="text-white text-3xl font-bold mb-6">
        7-Day Forecast
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5">

        <ForecastCard
          day="Mon"
          icon={<WiDaySunny className="text-yellow-300" />}
          temp="30°C"
        />

        <ForecastCard
          day="Tue"
          icon={<WiRain className="text-blue-300" />}
          temp="27°C"
        />

        <ForecastCard
          day="Wed"
          icon={<WiCloud className="text-gray-300" />}
          temp="29°C"
        />

        <ForecastCard
          day="Thu"
          icon={<WiDaySunny className="text-yellow-300" />}
          temp="31°C"
        />

        <ForecastCard
          day="Fri"
          icon={<WiCloud className="text-gray-300" />}
          temp="28°C"
        />

        <ForecastCard
          day="Sat"
          icon={<WiRain className="text-blue-300" />}
          temp="26°C"
        />

        <ForecastCard
          day="Sun"
          icon={<WiDaySunny className="text-yellow-300" />}
          temp="32°C"
        />

      </div>

    </div>
  );
}

export default Forecast;