import React from "react";
import { motion } from "framer-motion";

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
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
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
