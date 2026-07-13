import HighlightCard from "./HighlightCard";

import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiStrongWind,
} from "react-icons/wi";

function Highlights({ weather }) {
  if (!weather) {
    return (
      <div id="highlights" className="mt-14">
        <h2 className="text-white text-4xl font-bold mb-8">
          Today's Highlights
        </h2>

        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 text-center">
          <p className="text-white/80 text-lg">
            Search for a city to view today's highlights.
          </p>
        </div>
      </div>
    );
  }

  const sunrise = new Date(weather.sunrise).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(weather.sunset).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div id="highlights" className="mt-14">

      <h2 className="text-white text-4xl font-bold mb-8">
        Today's Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <HighlightCard
          icon={<WiSunrise className="text-yellow-300" />}
          title="Sunrise"
          value={sunrise}
          subtitle="Sun rises"
        />

        <HighlightCard
          icon={<WiSunset className="text-orange-400" />}
          title="Sunset"
          value={sunset}
          subtitle="Sun sets"
        />

        <HighlightCard
          icon={<WiHumidity className="text-blue-300" />}
          title="Humidity"
          value={`${weather.humidity}%`}
          subtitle="Current humidity"
        />

        <HighlightCard
          icon={<WiStrongWind className="text-cyan-300" />}
          title="Wind Speed"
          value={`${weather.windSpeed} m/s`}
          subtitle="Current wind"
        />

      </div>

    </div>
  );
}

export default Highlights;