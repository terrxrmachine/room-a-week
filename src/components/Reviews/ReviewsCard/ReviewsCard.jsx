import React from "react";
import styles from "./ReviewsCard.module.css";
import Carousel from "../../ui/Carousel/Carousel";
import ReviewCard from "../../ui/ReviewCard/ReviewCard";
import { reviews } from "../../../constants/reviews";

const ReviewsCard = () => {
  const renderReview = (review) => (
    <ReviewCard key={review.id} text={review.text} author={review.author} />
  );

  return (
    <div className={styles.reviewsCard}>
      <h2 className={styles.heading}>
        What renters are saying about Room A Week
      </h2>
      <Carousel items={reviews} renderItem={renderReview} />
    </div>
  );
};

export default ReviewsCard;
