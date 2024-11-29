import React, { useState } from "react";
import { CarouselButton } from "../Buttons/CarouselButton";
import styles from "./Carousel.module.css";

function Carousel({ items, renderItem }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.content}>{renderItem(items[currentSlide])}</div>

      <div className={styles.controls}>
        <CarouselButton direction="prev" onClick={prevSlide} />
        <div className={styles.dots}>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                currentSlide === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <CarouselButton direction="next" onClick={nextSlide} />
      </div>
    </div>
  );
}

export default Carousel;
