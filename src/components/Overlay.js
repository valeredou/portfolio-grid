import { motion } from "framer-motion";

const Overlay = ({ isSelected, setCardSelected }) => (
  <motion.div
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >
    <div className="close" onClick={() => setCardSelected(null)} />
  </motion.div>
);

export default Overlay;
