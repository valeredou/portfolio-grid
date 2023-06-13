"use client";

import Image from "next/image";
import Card from "@/components/Card";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/client";
import { gsap } from "gsap";
import SplitType from "split-type";
import { isMobile } from "react-device-detect";
import { cardData } from "@/Cardlist";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng);
  const [cardSelected, setCardSelected] = useState(null);

  const title = useRef();
  const job = useRef();
  const name = "Valère Douillé";

  /*   useLayoutEffect(() => {
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
  }); */

  console.log(cardSelected);

  return (
    <div className={`wrapper ${isMobile && "mobile"}`}>
      {/* <Card
        className="first"
        id="VD"
        isSelected={cardSelected === "VD"}
        setCardSelected={setCardSelected}
      >
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
          {"Développeur Web"}
        </div>
      </Card>
      <Card
        id="test"
        isSelected={cardSelected === "VD"}
        setCardSelected={setCardSelected}
      >
        {" "}
        CARD SELECTED : {cardSelected}
      </Card> */}
      {cardData.map((card) => {
        return (
          <Card
            key={card.id}
            isSelected={cardSelected === card.id}
            setCardSelected={setCardSelected}
            {...card}
          />
        );
      })}
    </div>
  );
}
