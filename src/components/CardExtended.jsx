import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { LoremIpsum } from "react-lorem-ipsum";
import { cardData } from "@/Cardlist";
import { UilTimes } from "@iconscout/react-unicons";
import { Interweave } from "interweave";

export function CardExtended({ id, setCardSelected, isSelected, t }) {
  const { category, title, website, tags } = cardData.find(
    (item) => item.id === id
  );

  return (
    <>
      {/* <motion.div
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
      ></motion.div> */}
      <div className="card-content-container open">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <a href={website} alt={title} target="__blank">
              <img className="card-image" src={`images/${id}.png`} alt="" />
            </a>
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div>
          {isSelected && (
            <div className="close-button" onClick={() => setCardSelected(null)}>
              <UilTimes className="cross" />
            </div>
          )}
          <motion.div className="content-container" animate>
            <div className="presentation">
              <h3>{t("work.presentation")}</h3>
              <div className="text">
                <Interweave content={t(id + ".presentation")} />
              </div>
            </div>

            <div className="tech">
              <h3>{t("work.tech")}</h3>
              <div className="text">
                <Interweave content={t(id + ".technique")} />
              </div>
            </div>

            <div className="techstack">
              <h3>{t("work.techno_utilise")}</h3>

              <div className="tags-container">
                {tags.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className={`tag ${
                        tag === "Laravel" || tag === "Couchbase" ? "back" : ""
                      } `}
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <LoremIpsum
              p={10}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            /> */}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
