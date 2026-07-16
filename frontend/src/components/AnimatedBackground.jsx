import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/10 blur-3xl"
      />
    </div>
  );
}