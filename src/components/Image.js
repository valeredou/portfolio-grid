import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring } from "./Animations";

export const Image = ({ id, isSelected, backgroundColor }) => {
  return (
    <motion.div
      className="card-image-container"
      style={{ backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        transition={closeSpring}
      />
    </motion.div>
  );
};
