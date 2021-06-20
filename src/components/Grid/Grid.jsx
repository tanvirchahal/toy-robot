import React from "react";
import styles from "./Grid.module.css";

function Grid({ children }) {
  return (
    <div className={styles.grid}>
      <div className={`${styles.cell} ${styles.cell_1}`}></div>
      <div className={`${styles.cell} ${styles.cell_2}`}></div>
      <div className={`${styles.cell} ${styles.cell_3}`}></div>
      <div className={`${styles.cell} ${styles.cell_4}`}></div>
      <div className={`${styles.cell} ${styles.cell_5}`}></div>
      <div className={`${styles.cell} ${styles.cell_6}`}></div>
      <div className={`${styles.cell} ${styles.cell_7}`}></div>
      <div className={`${styles.cell} ${styles.cell_8}`}></div>
      <div className={`${styles.cell} ${styles.cell_9}`}></div>
      <div className={`${styles.cell} ${styles.cell_10}`}></div>
      <div className={`${styles.cell} ${styles.cell_11}`}></div>
      <div className={`${styles.cell} ${styles.cell_12}`}></div>
      <div className={`${styles.cell} ${styles.cell_13}`}></div>
      <div className={`${styles.cell} ${styles.cell_14}`}></div>
      <div className={`${styles.cell} ${styles.cell_15}`}></div>
      <div className={`${styles.cell} ${styles.cell_16}`}></div>
      <div className={`${styles.cell} ${styles.cell_17}`}></div>
      <div className={`${styles.cell} ${styles.cell_18}`}></div>
      <div className={`${styles.cell} ${styles.cell_19}`}></div>
      <div className={`${styles.cell} ${styles.cell_20}`}></div>
      <div className={`${styles.cell} ${styles.cell_21}`}></div>
      <div className={`${styles.cell} ${styles.cell_22}`}></div>
      <div className={`${styles.cell} ${styles.cell_23}`}></div>
      <div className={`${styles.cell} ${styles.cell_24}`}></div>
      <div className={`${styles.cell} ${styles.cell_25}`}></div>

      {children}
    </div>
  );
}

export default Grid;
