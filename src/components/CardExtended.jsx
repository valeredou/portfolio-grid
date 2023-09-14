import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { cardData } from "@/Cardlist";
import { useWheelScroll } from "@/utils/use-wheel-scroll";
import { useScrollConstraints } from "@/utils/use-scroll-constraints";

export function CardExtended({ id, setCardSelected, isSelected }) {
  const { category, title } = cardData.find((item) => item.id === id);

  //   // Distance in pixels a user has to scroll a card down before we recognise
  //   // a swipe-to dismiss action.
  //   const dismissDistance = 150;

  //   function checkSwipeToDismiss() {
  //     y.get() > dismissDistance && setCardSelected(null);
  //   }
  //   // We'll use the opened card element to calculate the scroll constraints
  //   const cardRef = useRef(null);
  //   const constraints = useScrollConstraints(cardRef, isSelected);

  //   // When this card is selected, attach a wheel event listener
  //   const containerRef = useRef(null);
  //   const y = useMotionValue(0);
  //   useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, isSelected);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
        onClick={() => {
          //document.body.style.overflow = "auto";
          setCardSelected(null);
        }}
      ></motion.div>
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className="content-container" animate>
            <LoremIpsum
              p={10}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
