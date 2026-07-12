import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col items-center px-4 py-10">

        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            🌤 Smart Weather App
          </h1>

          <p className="text-white/90 mt-3 text-lg">
            Real-Time Weather Information
          </p>
        </motion.div>

        {/* Animated Search Box */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="mt-10 w-full max-w-md"
>
  <SearchBox />
</motion.div>
  
  {/* weather card */}

   <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="mt-10 w-full max-w-5xl"
>
  <WeatherCard />
</motion.div>

        {/* Forecast */}
        <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="mt-14 w-full max-w-6xl"
>
  <Forecast />
</motion.div>

{/* Highlights */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="mt-14 w-full max-w-6xl"
>
  <Highlights />
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