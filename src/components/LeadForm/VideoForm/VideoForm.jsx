import { Check, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import styles from "./Videoform.module.css";

export function VideoForm() {
  const location = useLocation();
  const formType = location.pathname === "/host" ? "host" : "rent";

  return (
    <div className={styles.container}>
      <div className={styles.benefits}>
        {formType === "rent" ? (
          // Benefits для арендаторов
          <>
            <div className={styles.benefit}>
              <Check size={20} strokeWidth={3} className={styles.checkIcon} />
              <span>One weekly payment</span>
            </div>
            <span className={styles.divider}>|</span>
            <div className={styles.benefit}>
              <Check size={20} strokeWidth={3} className={styles.checkIcon} />
              <span>Build Credit</span>
            </div>
            <span className={styles.divider}>|</span>
            <div className={styles.benefit}>
              <X size={20} strokeWidth={3} className={styles.xIcon} />
              <span>No down payments</span>
            </div>
          </>
        ) : (
          // Benefits для хозяев
          <>
            <div className={styles.benefit}>
              <Check size={20} strokeWidth={3} className={styles.checkIcon} />
              <span>Weekly payments</span>
            </div>
            <span className={styles.divider}>|</span>
            <div className={styles.benefit}>
              <Check size={20} strokeWidth={3} className={styles.checkIcon} />
              <span>Verified renters</span>
            </div>
            <span className={styles.divider}>|</span>
            <div className={styles.benefit}>
              <Check size={20} strokeWidth={3} className={styles.checkIcon} />
              <span>Secure income</span>
            </div>
          </>
        )}
      </div>

      <div className={styles.videoCard}>
        <img
          src="/api/placeholder/600/400"
          alt="Room a week video preview"
          className={styles.videoPreview}
        />
        <div className={styles.playButton}>
          <div className={styles.playIcon} />
        </div>
      </div>

      <div className={styles.callToAction}>
        {formType === "rent" ? (
          <>
            <h2>Instant approval.</h2>
            <h2>Move in today</h2>
          </>
        ) : (
          <>
            <h2>Start earning</h2>
            <h2>List your property today</h2>
          </>
        )}
        <div className={styles.underline} />
      </div>
    </div>
  );
}
