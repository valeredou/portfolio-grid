import { motion, useMotionValue } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import Card from "./Card";
import { gsap } from "gsap";

const CardHero = ({ t }) => {
  // When this card is selected, attach a wheel event listener
  const containerRef = useRef(null);

  const title = useRef();
  const job = useRef();
  const name = "Valère Douillé";

  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    console.log(title); // { current: div.box }teste
    // then we can animate them like so...
    var timeline = gsap.timeline();

    timeline.to(".char", {
      y: "0",
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    timeline.to(
      job.current,
      {
        opacity: 1,
        duration: 0.5,
      },
      ">0.5"
    );
  });
  return (
    <Card className="hero" id="VD">
      <div ref={title} id="title" className="title">
        {name.split("").map((letter) => {
          return (
            <div key={letter} className="char">
              {letter === " " ? <span>&nbsp;</span> : letter}
            </div>
          );
        })}
      </div>
      <div ref={job} className="job">
        {t("developpeur")}
      </div>
    </Card>
  );
};

export default CardHero;