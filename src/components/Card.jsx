import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const Card = ({ className, children }) => {
  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);

  return (
    <div className={`card ${className ? className : ""}`} ref={containerRef}>
      {children}
    </div>
  );
};

export default Card;
