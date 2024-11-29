import React from "react";
import styles from "./Review.module.css";

function ReviewCard({ text, author }) {
  return (
    <div className={styles.review}>
      <p className={styles.text}>{text}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
}

export default ReviewCard;
