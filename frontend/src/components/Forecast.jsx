import ForecastCard from "./ForecastCard";

function Forecast({ forecast }) {
  return (
    <div id="forecast" className="mt-10">

      <h2 className="text-white text-3xl font-bold mb-6">
        5-Day Forecast
      </h2>

      {forecast.length === 0 ? (
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 text-center">
          <p className="text-white/80 text-lg">
            Search for a city to view the forecast.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

          {forecast.map((day, index) => (
            <ForecastCard
              key={index}
              day={day.day}
              temperature={day.temperature}
              weather={day.weather}
              description={day.description}
              icon={day.icon}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Forecast;