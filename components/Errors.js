import React from "react";
import styles from "../styles/Index.module.scss";
const Errors = ({ errors }) => {
  return (
    <div className={styles.errorsContainer}>
      {errors.map((err, index) => (
        <span key={index}>{err}</span>
      ))}
    </div>
  );
};

export default Errors;
