import HighlightCard from "./HighlightCard";

import {
  WiSunrise,
  WiSunset,
  WiDaySunny,
} from "react-icons/wi";

import { FaLeaf } from "react-icons/fa";

function Highlights() {
  return (
    <div id="highlights" className="mt-14">

      <h2 className="text-white text-4xl font-bold mb-8">
        Today's Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <HighlightCard
          icon={<WiSunrise className="text-yellow-300" />}
          title="Sunrise"
          value="06:02 AM"
          subtitle="Morning begins"
        />

        <HighlightCard
          icon={<WiSunset className="text-orange-400" />}
          title="Sunset"
          value="06:54 PM"
          subtitle="Evening ends"
        />

        <HighlightCard
          icon={<WiDaySunny className="text-yellow-300" />}
          title="UV Index"
          value="5"
          subtitle="Moderate"
        />

        <HighlightCard
          icon={<FaLeaf className="text-green-400" />}
          title="Air Quality"
          value="Good"
          subtitle="AQI 42"
        />

      </div>

    </div>
  );
}

export default Highlights;