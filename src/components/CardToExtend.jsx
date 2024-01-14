import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { isMobile } from "react-device-detect";
import { SFPro_bold } from "@/app/fonts";
import Image from "next/image";

const CardToExtend = ({
  id,
  title,
  category,
  isSelected,
  setCardSelected,
  className,
  animation,
  delay,
  image,
}) => {
  const initialVariants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    top: { y: -100, opacity: 0 },
  };

  const inViewVariants = {
    left: { x: 0, opacity: 1 },
    right: { x: 0, opacity: 1 },
    top: { y: 0, opacity: 1 },
  };

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [0.1, 1, 0.8]);

  return (
    <motion.li
      initial={!isMobile ? initialVariants[animation] : {}}
      whileInView={!isMobile ? inViewVariants[animation] : {}}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
      className={`card ${className ? className : ""}`}
      onClick={() => {
        if (isSelected === false) {
          if (isMobile) {
            document.body.style.overflow = "hidden";
          }
          //document.body.style.overflow = "hidden";
          setCardSelected(id);
        }
      }}
    >
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          {id === "esurvey" && (
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <motion.img
                className="e-survey-logo"
                src={`images/logo-esurvey-v2.png`}
                alt=""
              />
            </motion.div>
          )}
          <motion.div
            className="title-container"
            layout
            // layoutId={`title-container-${id}`}
          >
            <motion.span
              className="site-image-container"
              initial={{ opacity: 0, bottom: "-100px" }}
              whileInView={{ opacity: 1, bottom: "-50px" }}
              whileHover={{ bottom: "-70px", rotate: -20 }}
            >
              <Image
                src={image}
                className="site-image"
                alt="site-image"
                width={1200}
                height={700}
              />
            </motion.span>
            <span className="tag">{category}</span>

            {id !== "esurvey" && (
              <motion.h2 className={`title ${SFPro_bold.className}`}>
                {title}
              </motion.h2>
            )}
          </motion.div>
        </motion.div>
        {!isSelected && (
          <div className="open-button" onClick={() => setCardSelected(id)}>
            <UilAngleRightB className="chevron" />
          </div>
        )}
      </div>
      {/* {isSelected === false && (
        <div
          className="card-open-link"
          onClick={() => {
            if (isMobile) {
              document.body.style.overflow = "hidden";
            }
            //document.body.style.overflow = "hidden";
            setCardSelected(id);
          }}
        ></div>
      )} */}
      {/* <Link to={id} className={`card-open-link`} /> */}
    </motion.li>
  );
};

export default CardToExtend;
