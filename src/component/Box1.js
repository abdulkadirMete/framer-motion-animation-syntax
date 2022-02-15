import React, { useState } from "react";
import { motion } from "framer-motion";

export const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        // onClick={() => setIsAnimating(!isAnimating)}
        onHoverStart={() => setIsAnimating(true)}
        onHoverEnd={() => setIsAnimating(false)}
        className="box"
        // animate={{ x: isAnimating ? 1000 : 0, opacity: isAnimating ? 1 : 0.5 , rotate: isAnimating ? 360:0 }}
        animate={{
          scale: isAnimating ? 1.2 : 1,
          opacity: isAnimating ? 1 : 0.5,
        }}
        whileDrag={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          right: 20,
        }}
        transition={{ ease: "easeOut", duration: 1 }}
      ></motion.div>
    </div>
  );
};
