import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function BackgroundLayer({ image }) {
  const [currentImage, setCurrentImage] = useState(image);

  useEffect(() => {
    if (!image) return;

    const img = new Image();

    img.src = image;

    img.onload = () => {
      setCurrentImage(image);
    };
  }, [image]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.3,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)),
              url(${currentImage})
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