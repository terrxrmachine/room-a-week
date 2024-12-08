import { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, children, containerClassName = "" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.scrollWrapper}>
        <div
          className={`${styles.container} ${containerClassName}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
