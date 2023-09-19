"use client";

//Libraries
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { UilEnvelope } from "@iconscout/react-unicons";
import Lottie from "lottie-react";
import linkedinAnimation from "/public/linkedin-json.json";
import workingAnimation from "/public/working-json.json";
import githubAnimation from "/public/github-json.json";

//Custom
import Card from "@/components/Card";
import { useTranslation } from "../i18n/client";
import { cardData } from "@/Cardlist";
import CardExpandable from "@/components/CardExpandable";
import CardToExtend from "@/components/CardToExtend";
import CardHero from "@/components/CardHero";
import Link from "next/link";
import ReactLogo from "@/components/ReactLogo";
import { Contact } from "@/components/Contact";
import { CardExtended } from "@/components/CardExtended";
import i18next from "i18next";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng);
  const [cardSelected, setCardSelected] = useState(null);

  return (
    <motion.div layout className={`wrapper ${isMobile && "mobile"}`}>
      {/* Card showing my picture + name with effect */}

      <CardHero t={t} />

      {/******************************************************
          
          Hello card 
          
          ******************************************************/}
      <Card className="hello" id="hello" animation="right">
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

      {/* Links card  */}
      <Card className="links" id="links" animation="right" delay={0.2}>
        <motion.div
          className="links-container"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <a target="_blank" href="mailto:valere.douille@gmail.com" alt="mail">
            <UilEnvelope className="link mail" />
          </a>

          <a
            href="https://www.linkedin.com/in/val%C3%A8re-douill%C3%A9-78b267a8/"
            target="__blank"
            alt="linkedin"
          >
            <Lottie
              className="link linkedin"
              animationData={linkedinAnimation}
            />
          </a>
          <a href="https://github.com/valeredou" target="__blank">
            <Lottie className="link github" animationData={githubAnimation} />
          </a>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flags-container"
        >
          <Image
            alt="fr"
            onClick={() => {
              i18next.changeLanguage("fr");
            }}
            className="flag"
            width={50}
            height={20}
            src="/fr.png"
          />
          {"|"}

          <Image
            alt="en"
            onClick={() => {
              i18next.changeLanguage("en");
            }}
            className="flag"
            width={50}
            height={20}
            src="/en.png"
          />
          {/* <img src="fr.png" />
          <img src="en.png" /> */}
        </motion.div>
      </Card>

      {/******************************************************
          
          ABOUT 
          
          ******************************************************/}

      <Card
        className={"about"}
        title={t("about.title")}
        animation="left"
        delay={0.2}
      >
        <div className="text">
          {t("about.text1")}
          <br />
          <br />
          {t("about.text2")}
          <br />
          <br />
          {t("about.text3")}
        </div>
      </Card>

      <Card className={"react"} tag={t("skills")} animation="top" delay={0.25}>
        <ReactLogo />
      </Card>

      <Card className={"htmlcssjs"} tag={t("skills")} animation="bottom">
        <div className="language">
          <Image
            alt="html"
            title="html"
            className="html"
            width={100}
            height={20}
            src="/images/html.png"
          />
          <div className="name">HTML</div>
        </div>

        <div className="language">
          <Image
            alt="css"
            className="css"
            title="css"
            width={100}
            height={20}
            src="/images/css.png"
          />
          <div className="name">CSS</div>
        </div>
        <div className="language">
          <Image
            alt="javascript"
            title="javascript"
            className="js"
            width={100}
            height={20}
            src="/images/js.png"
          />
          <div className="name">JavaScript</div>
        </div>
      </Card>

      <Card className={"php"} tag={t("skills")} animation="right" delay={0.27}>
        <Image
          alt="php"
          className="php"
          title="php"
          width={100}
          height={20}
          src="/images/php.png"
        />
      </Card>

      <Card className={"sql"} tag={t("skills")} animation="right" delay={0.1}>
        <Image
          alt="sql"
          title="sql"
          className="sql"
          width={100}
          height={20}
          src="/images/sql.png"
        />
        <Image
          title="couchbase"
          alt="nosql"
          className="nosql"
          width={100}
          height={20}
          src="/images/couchbase.png"
        />
      </Card>

      {/******************************************************
          
          WORK 
          
          ******************************************************/}

      <Card className={"work"} title={t("work.title")} animation="right">
        <div className="text" style={{ marginBottom: "10px" }}>
          {t("work.intro1")}
        </div>
        <div className="text">{t("work.intro2")}</div>
        <Lottie className="working" animationData={workingAnimation} />
      </Card>

      <AnimatePresence>
        {cardSelected !== null && (
          <CardExtended
            id={cardSelected}
            isSelected={true}
            key="item"
            setCardSelected={setCardSelected}
            t={t}
          />
        )}
      </AnimatePresence>

      {cardData.map((card) => {
        return (
          <CardToExtend
            key={card.id}
            {...card}
            isSelected={cardSelected === card.id}
            setCardSelected={setCardSelected}
            className={card.id}
            category={t("work.tag")}
          />
        );
      })}

      {/******************************************************
          
          CONTACT 
          
          ******************************************************/}

      <Card className={"contact"} animation="bottom">
        <Contact lng={lng} />
      </Card>
    </motion.div>
  );
}
