import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useRafLoop } from "react-use";
import { useTranslation } from "../app/i18n/client";
//import { useWindowSize } from "@react-hook/window-size";

// utils/useWindowSize.js

const Text = ({ content, speed }) => {
  const item = useRef(null);
  const rect = useRef({});
  const x = useRef(0);

  const [width, height] = [1200, 800];

  const _ = {
    speed: 2,
    threshold: 0.014,
    wheelFactor: 1.8,
    dragFactor: 1.2,
  };

  const setX = () => {
    if (!item.current || !rect.current) return;
    const xPercentage = (x.current / rect.current.width) * 100;
    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rect.current.width;
    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;

    // if (x.current < -rect.current.width) x.current = 0;
    // if (x.current > 0) x.current = -rect.current.width;
    // item.current.style.transform = `translate3d(${x.current}px, 0, 0)`;
  };

  useEffect(() => {
    rect.current = item.current.getBoundingClientRect();
  }, [width, height]);

  // const buffer = useRef(0);
  const loop = (e) => {
    x.current -= speed.get();
    setX();

    // const delta = (e - buffer.current) / 1000;
    // const c = Math.max(1 / 60 / delta, 1);
    // buffer.current = e;
    // x.current -= speed.get() / c;
    // setX();
  };

  useRafLoop(loop, true);

  return (
    <div className="text" ref={item}>
      {content}
    </div>
  );
};

const InfiniteText = ({ lng }) => {
  const marquee = useRef(null);
  const slowDown = useRef(false);
  const isScrolling = useRef(false);
  const constraintsRef = useRef(null);

  const { t } = useTranslation(lng);
  const _ = {
    content: t("contact.title"),
    speed: 2,
    threshold: 0.014,
    wheelFactor: 1.8,
    dragFactor: 1.2,
  };

  const x = useRef(0);
  const w = useRef(window.innerWidth).current;
  const speed = useSpring(_.speed, {
    damping: 40,
    stiffness: 200,
    mass: 1,
  });
  const opacity = useTransform(speed, [-w * 0.25, 0, w * 0.25], [1, 0, 1]);
  const skewX = useTransform(speed, [-w * 0.25, 0, w * 0.25], [-25, 0, 25]);

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < _.threshold) return;
    x.current *= 0.66;
    if (x.current < 0) {
      x.current = Math.min(x.current, 0);
    } else {
      x.current = Math.max(x.current, 0);
    }
    speed.set(_.speed + x.current);
  };

  useRafLoop(loop, true);

  return (
    <>
      <motion.div className="infinite-text" ref={marquee} style={{ skewX }}>
        <Text content={_.content} speed={speed} />
        <Text content={_.content} speed={speed} />
        <Text content={_.content} speed={speed} />
        <Text content={_.content} speed={speed} />
      </motion.div>
    </>
  );
};

export default InfiniteText;

// export default function App() {
//   const [isFontAvailable, setIsFontAvailable] = useState(false);
//   useEffect(() => {
//     const font = new FontFaceObserver("Barlow Condensed");
//     font.load(null, 5000).then(() => setIsFontAvailable(true));
//   }, [setIsFontAvailable]);

//   return isFontAvailable ? (
//     <InteractiveMarquee />
//   ) : (
//     <div className="loader">Loading...</div>
//   );
// }
