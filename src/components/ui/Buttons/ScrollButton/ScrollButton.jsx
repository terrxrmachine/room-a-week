import React from "react";
import styles from "./ScrollButton.module.css";

function ScrollButton() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scrollButtonContainer}>
      <button onClick={handleScroll} className={styles.scrollButton}>
        <span className={styles.span}>Explore Room-A-Week</span>
        <svg
          className={styles.icon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
}

export default ScrollButton;
