import { AnimatePresence, motion } from "framer-motion";

function BackgroundLayer({ image }) {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,0.35),
                rgba(0,0,0,0.35)
              ),
              url(${image})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

export default BackgroundLayer;