"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Card from "@/components/Card";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "../i18n/client";

import { isMobile } from "react-device-detect";
import { cardData } from "@/Cardlist";
import CardExpandable from "@/components/CardExpandable";
import CardHero from "@/components/CardHero";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng);
  const [cardSelected, setCardSelected] = useState(null);

  console.log(cardSelected);

  return (
    <motion.div layout className={`wrapper ${isMobile && "mobile"}`}>
      {/* Card showing my picture + name with effect */}
      <CardHero t={t} />

      {/* Hello card  */}
      <Card className="hello" id="hello">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {t("hello")}{" "}
          <span role="img" className="hello" aria-label="hello">
            👋
          </span>
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="intro"
        >
          {t("intro")}
        </motion.div>
      </Card>

      {/* List all cards from cardlist  */}
      {cardData.map((card) => {
        return (
          <CardExpandable
            expandable
            key={card.id}
            isSelected={cardSelected === card.id}
            setCardSelected={setCardSelected}
            {...card}
          />
        );
      })}
    </motion.div>
  );
}
