import { motion, useMotionValue } from "framer-motion";
import Overlay from "./Overlay";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { useInvertedBorderRadius } from "@/utils/use-inverted-border-radius";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";
import { Image } from "./Image";
import { useRef } from "react";
import { Title } from "./Title";

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

const Card = ({
  className,
  isSelected,
  setCardSelected,
  children,
  id,
  title,
  category,
  history,
  pointOfInterest,
  backgroundColor,
}) => {
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
  const inverted = useInvertedBorderRadius(20);

  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    y.get() > dismissDistance && history.push("/");
  }

  function checkZIndex(latest) {
    if (isSelected) {
      zIndex.set(2);
    } else if (!isSelected && latest.scaleX < 1.01) {
      zIndex.set(0);
    }
  }

  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);
  // useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected);

  return (
    <div
      className={`card ${className}`}
      ref={cardRef}
      onClick={() => setCardSelected(id)}
    >
      <Overlay isSelected={isSelected} />
      <motion.div className={`card-content-container ${isSelected && "open"}`}>
        <motion.div className="card-content">
          <Image
            id={id}
            alt="image"
            isSelected={isSelected}
            pointOfInterest={pointOfInterest}
            backgroundColor={backgroundColor}
          />
          <Title title={title} category={category} isSelected={isSelected} />
          <ContentPlaceholder />
        </motion.div>
      </motion.div>
      {!isSelected && (
        <div className="card-open-link" onClick={setCardSelected(null)}></div>
      )}
    </div>
  );
};

export default Card;
