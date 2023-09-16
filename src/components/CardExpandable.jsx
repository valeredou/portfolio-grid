import { useScroll, motion, useMotionValue } from "framer-motion";
import Overlay from "./Overlay";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";
import { Image, Img } from "./Image";
import { useRef } from "react";
import { Title } from "./Title";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { openSpring, closeSpring } from "./Animations";

const CardExpandable = ({
  className,
  isSelected,
  setCardSelected,
  children,
  logo,
  id,
  title,
  category,
  history,
  pointOfInterest,
  backgroundColor,
  website,
}) => {
  //const y = useMotionValue(0);
  const y = useMotionValue(0);
  const zIndex = useMotionValue(isSelected ? 2 : 0);

  // Distance in pixels a user has to scroll a card down before we recognise
  // a swipe-to dismiss action.
  const dismissDistance = 150;

  // We'll use the opened card element to calculate the scroll constraints
  const cardRef = useRef(null);
  const constraints = useScrollConstraints(cardRef, isSelected);

  function checkSwipeToDismiss() {
    y.get() > dismissDistance && setCardSelected(null);
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
      layout
      className={`card expandable ${className ? className : ""}`}
      ref={containerRef}
    >
      <Overlay isSelected={isSelected} setCardSelected={setCardSelected} />
      <motion.div
        layout
        className={`card-content-container ${isSelected && "open"}`}
      >
        <motion.div
          layout
          ref={cardRef}
          className="card-content"
          style={{ zIndex, y }}
          layoutTransition={isSelected ? openSpring : closeSpring}
          drag={isSelected ? "y" : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onUpdate={checkZIndex}
        >
          <Img
            id={id}
            logo={logo}
            alt="image"
            isSelected={isSelected}
            backgroundColor={backgroundColor}
            website={website}
          />
          <Title title={title} category={category} isSelected={isSelected} />
          {/* {isSelected && <ContentPlaceholder />} */}
          <ContentPlaceholder />
          {isSelected && (
            <div className="close-button" onClick={() => setCardSelected(null)}>
              <UilTimes className="cross" />
            </div>
          )}
        </motion.div>

        {!isSelected && (
          <div className="open-button" onClick={() => setCardSelected(id)}>
            <UilAngleRightB className="chevron" />
          </div>
        )}
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
