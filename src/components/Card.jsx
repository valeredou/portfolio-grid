"use client";

import { SFPro_bold } from "@/app/fonts";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { isMobile } from "react-device-detect";

const Card = ({
  className,
  children,
  tag,
  title,
  animation = "left",
  delay = 0,
}) => {
  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);

  const initialVariants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
    bottom: { y: 100, opacity: 0 },
  };

  const inViewVariants = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    top: { y: 0, opacity: 1 },
    bottom: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={!isMobile ? initialVariants[animation] : {}}
      whileInView={!isMobile ? inViewVariants[animation] : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className={`card ${className ? className : ""}`}
      ref={containerRef}
    >
      {tag && <div className="tag">{tag}</div>}
      {title && (
        <h1 className={`title ${SFPro_bold.className}`}>
          {title.toUpperCase()}
        </h1>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
