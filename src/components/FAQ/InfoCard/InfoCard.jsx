import React from "react";
import { Link } from "react-router-dom";
import styles from "./InfoCard.module.css";

function InfoCard() {
  return (
    <div className={styles.card}>
      <div className={styles.missionInfo}>
        <h3>Room A Week's Mission</h3>
        <p>
          is to provide affordable, flexible housing solutions that empower
          individuals to achieve financial stability and independence. By
          creating a network of high-quality, shared living spaces, we aim to
          foster a sense of community while offering a pathway to economic
          opportunity for those who may face barriers to traditional rental
          markets. We are committed to making housing accessible for everyone,
          regardless of their financial background.
        </p>
      </div>

      <div className={styles.visionInfo}>
        <h3>Room A Week's Vision</h3>
        <p>
          is to create a world where shared housing provides an affordable,
          sustainable, and empowering solution to the housing crisis. We
          envision a future where everyone has access to clean, safe, and
          affordable housing, without the burden of excessive rent or long-term
          leases. Through our innovative approach, we are building a new model
          of living that combines affordability with flexibility, helping to
          bridge the gap for individuals and communities across the nation.
        </p>
      </div>

      <Link to="/search" className={styles.link}>
        FIND A ROOM A WEEK
      </Link>
    </div>
  );
}

export default InfoCard;
