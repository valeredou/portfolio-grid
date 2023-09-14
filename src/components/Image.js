import * as React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { closeSpring } from "./Animations";
import Image from "next/image";

export const Img = ({ id, isSelected, backgroundColor, website, logo }) => {
  useEffect(() => {
    console.log(id, logo);
  }, []);

  return (
    <motion.div
      className={`card-image-container ${isSelected ? "open" : ""}`}
      style={{ backgroundColor, originX: 0, originY: 0 }}
    >
      {isSelected ? (
        <img className="card-image" src={`/images/${id}.png`} alt="" />
      ) : (
        <div>{logo !== "" ? "logo" : website}</div>
      )}
    </motion.div>
  );
};
