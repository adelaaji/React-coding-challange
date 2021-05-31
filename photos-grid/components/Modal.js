import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Modal.module.scss";
import { RiCloseFill } from "react-icons/ri";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "15vh",
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: "0vh",
    opacity: 1,
    scale: 1,
    transition: { delay: 0.3 },
  },
};

const Modal = ({ showModal, photo, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className={styles.modalBackdrop}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div variants={modal}>
            <div className={styles.photoModalContainer}>
              <div className={styles.closePhoto}>
                <RiCloseFill size={40} onClick={() => setShowModal(false)} />
              </div>
              {photo != null ? <img src={photo} alt="large" /> : <h1>Loading</h1>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
