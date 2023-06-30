import { motion, useMotionValue } from "framer-motion";
import Overlay from "./Overlay";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { useInvertedBorderRadius } from "@/utils/use-inverted-border-radius";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";
import { Image } from "./Image";
import { useRef } from "react";
import { Title } from "./Title";
import { closeSpring, openSpring } from "./Animations";

// Distance in pixels a user has to scroll a cardExpandable down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 150;

const CardExpandable = ({
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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, delay: 1 }}
      className={`card expandable ${className ? className : ""}`}
      ref={containerRef}
    >
      <Overlay isSelected={isSelected} setCardSelected={setCardSelected} />
      <motion.div
        layout
        className={`card-content-container ${isSelected && "open"}`}
      >
        <motion.div
          className="card-content"
          layout
          ref={cardRef}
          style={{ borderRadius: 20, zIndex }}
          onUpdate={checkZIndex}
        >
          <Image
            id={id}
            alt="image"
            isSelected={isSelected}
            backgroundColor={backgroundColor}
          />
          <Title title={title} category={category} isSelected={isSelected} />
          {isSelected && <ContentPlaceholder />}
        </motion.div>
      </motion.div>
      {!isSelected && (
        <div
          className="card-open-link"
          onClick={() => setCardSelected(id)}
        ></div>
      )}
    </motion.div>
  );
};

export default CardExpandable;
