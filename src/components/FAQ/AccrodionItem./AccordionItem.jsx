import React from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./AccordionItem.module.css";

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.active : ""}`}
        onClick={onClick}
      >
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        <span className={styles.question}>{question}</span>
      </button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.contentInner}>
          <p>{answer}</p>
          {question === "What are the benefits of Co-living?"}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
