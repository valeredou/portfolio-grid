import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import LoremIpsum from "react-lorem-ipsum";

export const ContentPlaceholder = () => {
  return (
    <motion.div
      className="content-container"
      style={{ originY: 0, originX: 0 }}
    >
      <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </motion.div>
  );
};
