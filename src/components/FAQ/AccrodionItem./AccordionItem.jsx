import React from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./AccordionItem.module.css";

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={onClick}>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        <span className={styles.question}>{question}</span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          <p>{answer}</p>
          {question === "What are the benefits of Co-living?"}
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
