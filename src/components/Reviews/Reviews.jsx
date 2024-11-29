import React from "react";
import styles from "./Reviews.module.css";
import Carousel from "../ui/Carousel/Carousel";
import ReviewCard from "../ui/ReviewCard/ReviewCard";
import { reviews } from "../../constants/reviews";
import { infoText } from "../../constants/infoText";

function Reviews() {
  const renderReview = (review) => (
    <ReviewCard key={review.id} text={review.text} author={review.author} />
  );

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          What renters are saying about Room A Week:
        </h2>

        <div className={styles.contentWrapper}>
          <Carousel items={reviews} renderItem={renderReview} />

          <div className={styles.infoBox}>
            <h3 className={styles.infoHeading}>
              Why renters Love Room A Week:
            </h3>
            <p className={styles.infoText}>{infoText}</p>
            <a href="/search" className={styles.viewOptions}>
              VIEW ROOM A WEEK OPTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
