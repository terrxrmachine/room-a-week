import React from "react";
import styles from "./Reviews.module.css";
import ReviewsCard from "./ReviewsCard/ReviewsCard";
import EngageCard from "./EngageCard/EngageCard";

function Reviews() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <ReviewsCard />
          <EngageCard />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
