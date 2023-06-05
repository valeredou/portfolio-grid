"use client";

import Image from "next/image";
import Tile from "@/components/Tile";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useTranslation } from "../i18n/client";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng);

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

    timeline.to(job.current, {
      opacity: 1,
      duration: 0.5,
    });
  });

  return (
    <div className={"wrapper"}>
      <Tile className="first">
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
      </Tile>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  );
}
