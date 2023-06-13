import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";

export const ContentPlaceholder = () => {
  return (
    <motion.div
      layout
      className="content-container"
      style={{ originY: 0, originX: 0 }}
    >
      CARD
    </motion.div>
  );
};
