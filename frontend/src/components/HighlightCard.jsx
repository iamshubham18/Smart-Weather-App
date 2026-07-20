import { motion } from "framer-motion";

function HighlightCard({ icon, title, value, subtitle }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/15
        bg-white/10
        backdrop-blur-2xl
        p-7
        shadow-xl
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-400/10
          via-transparent
          to-blue-500/10
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />

      {/* Glass Shine */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-white/10
            text-5xl
            shadow-lg
          "
        >
          {icon}
        </motion.div>

        <p className="text-sm uppercase tracking-widest text-white/60">
          {title}
        </p>

        <h2 className="mt-3 text-4xl font-black text-white">
          {value}
        </h2>

        <p className="mt-2 text-white/70">
          {subtitle}
        </p>

      </div>
    </motion.div>
  );
}

export default HighlightCard;