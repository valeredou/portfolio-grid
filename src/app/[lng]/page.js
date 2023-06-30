"use client";

//Libraries
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
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
import CardHero from "@/components/CardHero";
import Link from "next/link";
import ReactLogo from "@/components/ReactLogo";
import { Contact } from "@/components/Contact";

export default function Home({ params: { lng } }) {
  const { t } = useTranslation(lng);
  const [cardSelected, setCardSelected] = useState(null);

  console.log(cardSelected);

  return (
    <motion.div layout className={`wrapper ${isMobile && "mobile"}`}>
      {/* Card showing my picture + name with effect */}
      <CardHero t={t} />

      {/******************************************************
          
          Hello card 
          
          ******************************************************/}
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

      {/* Links card  */}
      <Card className="links" id="links">
        <motion.div
          className="links-container"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <a href="mailto:valere.douille@gmail.com" alt="mail">
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
          <Link href="/fr">
            <Image
              alt="fr"
              className="flag"
              width={50}
              height={20}
              src="/fr.png"
            />
          </Link>
          {"|"}
          <Link href="/en">
            <Image
              alt="en"
              className="flag"
              width={50}
              height={20}
              src="/en.png"
            />
          </Link>
          {/* <img src="fr.png" />
          <img src="en.png" /> */}
        </motion.div>
      </Card>

      {/******************************************************
          
          ABOUT 
          
          ******************************************************/}

      <Card className={"about"} title={t("about.title")}>
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

      <Card className={"react"} tag={t("skills")}>
        <ReactLogo />
      </Card>

      <Card className={"htmlcssjs"} tag={t("skills")}>
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

      <Card className={"php"} tag={t("skills")}>
        <Image
          alt="php"
          className="php"
          title="php"
          width={100}
          height={20}
          src="/images/php.png"
        />
      </Card>

      <Card className={"sql"} tag={t("skills")}>
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

      <Card className={"work"} title={t("work.title")}>
        <div className="text">{t("work.intro")}</div>
        <Lottie className="working" animationData={workingAnimation} />
      </Card>

      <CardExpandable className={"esurvey"} tag={t("work.tag")}>
        <div className="text">
          {t("about.text1")}
          <br />
          <br />
          {t("about.text2")}
          <br />
          <br />
          {t("about.text3")}
        </div>
      </CardExpandable>

      {cardData.map((card) => {
        return (
          <CardExpandable
            {...card}
            expandable
            category={t("work.tag")}
            key={card.id}
            isSelected={cardSelected === card.id}
            setCardSelected={setCardSelected}
            className={card.id}
          />
        );
      })}

      <Card className={"contact"}>
        <Contact />
      </Card>
    </motion.div>
  );
}
