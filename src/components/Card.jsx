import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const Card = ({ className, children, tag, title }) => {
  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);

  return (
    <div className={`card ${className ? className : ""}`} ref={containerRef}>
      {tag && <div className="tag">{tag}</div>}
      {title && <h1 className="title">{title}</h1>}
      {children}
    </div>
  );
};

export default Card;
