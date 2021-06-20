import React from "react";
import styles from "./Button.module.css";

function Button({ text, onClick, image }) {
  return (
    <button className={styles.controlBtn} onClick={onClick}>
      <img alt="arrow" src={image} width="30" />
    </button>
  );
}

export default Button;
