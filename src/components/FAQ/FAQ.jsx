import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Button from "../ui/Buttons/Button";
import styles from "./FAQ.module.css";

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
          {question === "What are the benefits of Co-living?" && (
            <Button variant="primary" className={styles.actionButton}>
              FIND A ROOM A WEEK
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What are the benefits of Co-living?",
      answer:
        "Shared housing redefines renting with all-inclusive, weekly payments covering a private, furnished room, utilities, and free credit reporting. No need for a minimum credit score or hefty deposit—plus, PadSplit partners with Esusu to help 95% of members boost their credit scores! Members save an average of $420 monthly, opening doors to financial goals like paying off debt or buying a car.",
    },
    {
      question: "How much can I save?",
      answer:
        "Members typically save an average of $420 per month compared to traditional housing options.",
    },
    {
      question: "Can I Live in shared housing with a felony conviction?",
      answer:
        "Each case is evaluated individually. Please contact our support team for more information.",
    },
    {
      question: "What's the minimum credit score to move in?",
      answer: "There is no minimum credit score requirement to move in.",
    },
    {
      question: "Can I see a room before I rent it?",
      answer:
        "Yes, virtual tours are available for all rooms, and in-person viewings can be arranged.",
    },
    {
      question: "What's the cost of moving in?",
      answer:
        "Move-in costs vary by location but are typically much lower than traditional rentals.",
    },
    {
      question: "Can I bring pets?",
      answer:
        "Pet policies vary by location. Please check individual listings for pet policies.",
    },
    {
      question: "How many people can stay in my room",
      answer:
        "Each room is designed for single occupancy unless otherwise specified.",
    },
    {
      question: "Are children allowed?",
      answer:
        "Policies regarding children vary by location. Please contact us for specific information.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.faqColumn}>
            <h2 className={styles.heading}>FAQS</h2>
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

          <div className={styles.infoColumn}>
            <div className={styles.missionInfo}>
              <h3>Room A Week's Mission</h3>
              <p>
                is to provide affordable, flexible housing solutions that
                empower individuals to achieve financial stability and
                independence. By creating a network of high-quality, shared
                living spaces, we aim to foster a sense of community while
                offering a pathway to economic opportunity for those who may
                face barriers to traditional rental markets. We are committed to
                making housing accessible for everyone, regardless of their
                financial background.
              </p>
            </div>

            <div className={styles.visionInfo}>
              <h3>Room A Week's Vision</h3>
              <p>
                is to create a world where shared housing provides an
                affordable, sustainable, and empowering solution to the housing
                crisis. We envision a future where everyone has access to clean,
                safe, and affordable housing, without the burden of excessive
                rent or long-term leases. Through our innovative approach, we
                are building a new model of living that combines affordability
                with flexibility, helping to bridge the gap for individuals and
                communities across the nation.
              </p>
            </div>

            <Button variant="primary" fullWidth>
              FIND A ROOM A WEEK
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
