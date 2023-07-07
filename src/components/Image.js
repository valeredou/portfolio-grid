import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring } from "./Animations";

export const Image = ({ id, isSelected, backgroundColor, website }) => {
  return (
    <motion.div
      layout
      className={`card-image-container ${isSelected ? "open" : ""}`}
      style={{ backgroundColor, originX: 0, originY: 0 }}
    >
      {isSelected ? (
        <motion.img
          className="card-image"
          src={`images/${id}.png`}
          alt=""
          initial={false}
          transition={closeSpring}
        />
      ) : (
        <div>{website}</div>
      )}
    </motion.div>
  );
};
