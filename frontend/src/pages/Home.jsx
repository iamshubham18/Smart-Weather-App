import { useState } from "react";
import { motion } from "framer-motion";
import { getWeatherTheme } from "../utils/weatherTheme";

import {
  getWeather,
  getWeatherByLocation,
  getForecast,
  getForecastByLocation,
} from "../services/weatherService";

import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer";

function Home() {
  // Weather Data
  const [weather, setWeather] = useState(null);

  // Forecast Data
  const [forecast, setForecast] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(false);

  // Error State
  const [error, setError] = useState("");

  const backgroundTheme = getWeatherTheme(weather?.weather);

  // Search by City
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

      return weatherData;
    } catch (error) {
      console.error(error);

      setWeather(null);
      setForecast([]);

      if (error.response?.status === 404) {
        setError("City not found.");
      } else {
        setError("Unable to fetch weather data.");
      }

      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Search by Current Location
  const fetchCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const weatherData = await getWeatherByLocation(
            latitude,
            longitude
          );

          const forecastData = await getForecastByLocation(
            latitude,
            longitude
          );

          setWeather(weatherData);
          setForecast(forecastData);
        } catch (error) {
          console.error(error);

          setWeather(null);
          setForecast([]);

          setError("Unable to fetch your location weather.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setLoading(false);
        setError("Location permission denied.");
      }
    );
  };

  return (
    <div
  className={`min-h-screen bg-gradient-to-br ${backgroundTheme} transition-all duration-1000`}
>
      <Navbar />

      <main className="flex flex-col items-center px-4 py-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            🌤 Smart Weather App
          </h1>

          <p className="text-white/90 mt-3 text-lg">
            Real-Time Weather Information
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 w-full max-w-md"
        >
          <SearchBox
            onSearch={fetchWeather}
            onLocationSearch={fetchCurrentLocationWeather}
            loading={loading}
          />
        </motion.div>

        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 w-full max-w-md rounded-2xl bg-red-500/20 border border-red-300 backdrop-blur-xl p-4 text-center"
          >
            <p className="text-white font-medium">
              ❌ {error}
            </p>
          </motion.div>
        )}

        {/* Weather Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 w-full max-w-5xl"
        >
          <WeatherCard weather={weather} />
        </motion.div>

        {/* Forecast */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 w-full max-w-6xl"
        >
          <Forecast forecast={forecast} />
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 w-full max-w-6xl"
        >
          <Highlights weather={weather} />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl px-4"
        >
          <Footer />
        </motion.div>
      </main>
    </div>
  );
}

export default Home;