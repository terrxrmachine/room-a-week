import React from "react";
import FAQCard from "./FAQCard/FAQCard";
import InfoCard from "./InfoCard/InfoCard";
import styles from "./FAQ.module.css";

function FAQ({id}) {
  return (
    <div  id={"faqs"} className={styles.container}>
      <div className={styles.forms}>
        <FAQCard />
        <InfoCard />
      </div>
    </div>
  );
}

export default FAQ;
