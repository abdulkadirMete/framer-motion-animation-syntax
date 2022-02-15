import React from "react";
import { motion } from "framer-motion";

export const Box2 = () => {
  const boxVariant = {
    lion: {
      // x: 100,
      // scale: 1.5,
    },
    elephant: {
      // x: 1000,
      // scale: 0.3,
      // backgroundColor:'yellow'
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="elephant"
        initial="lion"
        transition={{duration:2}}
      ></motion.div>
    </div>
  );
};
