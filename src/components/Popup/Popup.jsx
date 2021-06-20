import React from "react";
import styles from "./Popup.module.css";

function Popup({ gameState, startNewGame, heading, btnText }) {
  if (gameState === true) {
    return (
      <div className={styles.popup}>
        <h1>{heading}</h1>
        <button onClick={() => startNewGame()}>{btnText}</button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Popup;
