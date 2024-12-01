import React from "react";
import styles from "./EngageCard.module.css";
import { infoText } from "../../../constants/infoText";

const EngageCard = () => {
  return (
    <div className={styles.infoBox}>
      <h3 className={styles.infoHeading}>Why renters Love Room A Week:</h3>
      <p className={styles.infoText}>{infoText}</p>
      <a href="/search" className={styles.viewOptions}>
        VIEW ROOM A WEEK OPTIONS
      </a>
    </div>
  );
};

export default EngageCard;
