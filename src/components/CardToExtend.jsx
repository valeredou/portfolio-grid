import React from "react";
import { motion } from "framer-motion";
import { UilAngleRightB } from "@iconscout/react-unicons";

const CardToExtend = ({
  id,
  title,
  category,
  isSelected,
  setCardSelected,
  className,
}) => {
  console.log(isSelected, id);
  return (
    <li className={`card ${className ? className : ""}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          {id === "esurvey" && (
            <motion.div
              className="card-image-container"
              layoutId={`card-image-container-${id}`}
            >
              <img
                className="card-image"
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
            <span className="tag">{category}</span>

            {id !== "esurvey" && (
              <motion.h2 className="title">{title}</motion.h2>
            )}
          </motion.div>
        </motion.div>
        {!isSelected && (
          <div className="open-button" onClick={() => setCardSelected(id)}>
            <UilAngleRightB className="chevron" />
          </div>
        )}
      </div>
      {isSelected === false && (
        <div
          className="card-open-link"
          onClick={() => {
            //document.body.style.overflow = "hidden";
            setCardSelected(id);
          }}
        ></div>
      )}
      {/* <Link to={id} className={`card-open-link`} /> */}
    </li>
  );
};

export default CardToExtend;
