import React, { useState } from "react";
import AccordionItem from "../AccrodionItem/AccordionItem";
import { faqItems } from "../../../constants/faqItems";
import styles from "./FAQCard.module.css";

function FAQCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.card}>
      <h2>FAQS</h2>
      <div className={styles.accordion}>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQCard;
