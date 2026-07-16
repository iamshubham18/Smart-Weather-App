import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { getWeatherTheme } from "../utils/weatherTheme";
import { getWeatherBackground } from "../utils/weatherBackground";
// import BackgroundLayer from "../components/BackgroundLayer";
import AnimatedBackground from "../components/AnimatedBackground";

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
import SkeletonCard from "../components/SkeletonCard";

function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const weatherCardRef = useRef(null);

  const backgroundTheme = getWeatherTheme(weather?.weather);
  const backgroundImage = getWeatherBackground(weather?.weather);
  
  console.log("Weather:", weather?.weather);
console.log("Background:", backgroundImage);

  // Search by city
  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

      setTimeout(() => {
        weatherCardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);

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

  // Search using current location
  const fetchCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
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

          setTimeout(() => {
            weatherCardRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 200);
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
  className={`relative min-h-screen overflow-hidden bg-gradient-to-br ${backgroundTheme} transition-colors duration-1000`}
>
   <img
  src={backgroundImage}
  alt="Background"
  className="fixed inset-0 w-full h-full object-cover z-0"
/>
<div className="fixed inset-0 bg-black/35 z-10"></div>

  
    
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Page Content */}
      <div className="relative z-20">
        <Navbar />

        <main className="flex flex-col items-center px-4 py-12">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
              Know the{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                Weather
              </span>
              <br />
              Before You Step Outside
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90">
              Real-time weather forecasts, 5-day predictions, and location-based
              updates—all in one beautiful dashboard.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 w-full max-w-lg"
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
              className="mt-6 w-full max-w-lg rounded-3xl border border-red-400/40 bg-red-500/20 backdrop-blur-xl p-4 text-center"
            >
              <p className="text-white font-semibold">
                ❌ {error}
              </p>
            </motion.div>
          )}

          {/* Weather Card */}
          <motion.div
            ref={weatherCardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 w-full max-w-5xl"
          >
            {loading ? (
              <SkeletonCard />
            ) : (
              <WeatherCard weather={weather} />
            )}
          </motion.div>

          {/* Forecast */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 w-full max-w-6xl"
          >
            <Forecast forecast={forecast} />
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 w-full max-w-6xl"
          >
            <Highlights weather={weather} />
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-16 w-full max-w-6xl px-4"
          >
            <Footer />
          </motion.div>

        </main>
      </div>
    </div>
  );
}

export default Home;