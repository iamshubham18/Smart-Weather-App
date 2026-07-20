import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

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
      <section id="highlights" className="mt-16 w-full">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">

            <FaStar className="text-yellow-300 text-3xl" />

            <h2 className="text-4xl font-bold text-white">
              Today's Highlights
            </h2>

          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl p-12 text-center">

            <div className="text-6xl mb-4">
              🌤
            </div>

            <h3 className="text-2xl font-semibold text-white">
              No Weather Data
            </h3>

            <p className="mt-3 text-white/70">
              Search for a city to view today's highlights.
            </p>

          </div>
        </motion.div>

      </section>
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

  const cards = [
    {
      icon: <WiSunrise className="text-yellow-300" />,
      title: "Sunrise",
      value: sunrise,
      subtitle: "Sun rises",
    },
    {
      icon: <WiSunset className="text-orange-400" />,
      title: "Sunset",
      value: sunset,
      subtitle: "Sun sets",
    },
    {
      icon: <WiHumidity className="text-cyan-300" />,
      title: "Humidity",
      value: `${weather.humidity}%`,
      subtitle: "Current humidity",
    },
    {
      icon: <WiStrongWind className="text-sky-300" />,
      title: "Wind Speed",
      value: `${weather.windSpeed} m/s`,
      subtitle: "Current wind",
    },
  ];

  return (
    <section id="highlights" className="mt-16 w-full">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex items-center gap-3"
      >
        <FaStar className="text-3xl text-yellow-300" />

        <h2 className="text-4xl font-bold text-white">
          Today's Highlights
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">

        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.5,
            }}
          >
            <HighlightCard {...card} />
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Highlights;