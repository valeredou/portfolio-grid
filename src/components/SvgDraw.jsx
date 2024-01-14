"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

const SvgDraw = (props) => {
  const svgRef = useRef(null);
  const inView = useInView(svgRef);

  const drawSvg = (scrollPosition) => {
    const svgElement = svgRef.current;
    const rect = svgElement.getBoundingClientRect();

    const svgTop = rect.top + window.scrollY;
    const svgHeight = rect.height;

    // Le point où le SVG est au milieu de la page
    const middleScreenPoint =
      props.reveal === "middle"
        ? window.innerHeight / 1.3
        : window.innerHeight / 1;

    // Calcul de la proportion du SVG à dessiner
    const proportion = Math.min(
      1,
      Math.max(0, (scrollPosition - svgTop + middleScreenPoint) / svgHeight)
    );

    // if (proportion === 1) {
    //   svgElement.style.right = `${rect.top}px`;
    // }

    // Ajustement des propriétés stroke-dasharray et stroke-dashoffset
    // Cela dépend de la longueur totale du chemin SVG
    const paths = Array.from(svgElement.getElementsByTagName("path"));

    paths.map((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length * (1 - proportion);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      drawSvg(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialiser le dessin
    drawSvg(window.scrollY);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.svg
      ref={svgRef}
      className={props.className}
      width="53px"
      height="53px"
      viewBox="0 0 24 24"
      stroke-width="1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#86868b"
    >
      {props.content === "dev" && (
        <>
          <path
            d="M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13 7L15 9.5L13 12"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5 7L3 9.5L5 12"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 6L8 13"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </>
      )}

      {props.content === "tools" && (
        <>
          <path
            d="M10.0503 10.6066L2.97923 17.6777C2.19818 18.4587 2.19818 19.7251 2.97923 20.5061V20.5061C3.76027 21.2872 5.0266 21.2872 5.80765 20.5061L12.8787 13.4351"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M17.1927 13.7994L21.071 17.6777C21.8521 18.4587 21.8521 19.7251 21.071 20.5061V20.5061C20.29 21.2872 19.0236 21.2872 18.2426 20.5061L12.0341 14.2977"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.73267 5.90381L4.61135 6.61092L2.49003 3.07539L3.90424 1.66117L7.43978 3.78249L6.73267 5.90381ZM6.73267 5.90381L9.5629 8.73404"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10.0503 10.6066C9.2065 8.45359 9.37147 5.62861 11.111 3.8891C12.8505 2.14958 16.0607 1.76778 17.8285 2.82844L14.7878 5.86911L14.5052 8.98015L17.6162 8.69754L20.6569 5.65686C21.7176 7.42463 21.3358 10.6349 19.5963 12.3744C17.8567 14.1139 15.0318 14.2789 12.8788 13.435"
            stroke="#86868b"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </>
      )}

      {/* <svg width="53px" height="53px" viewBox="0 0 24 24" stroke-width="1" fill="none"
    xmlns="http://www.w3.org/2000/svg" color="#86868b"> */}
    </motion.svg>
  );
};

export default SvgDraw;
