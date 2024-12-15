import React, { useState } from "react";
import Input from "../../ui/Input/Input";
import Modal from "../../ui/Modal/Modal";
import styles from "./ExploreModal.module.css";

function ExploreModal({ selectedCity, onClose }) {
  // Состояния для инпутов
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      city: selectedCity.name,
      pricePerWeek: selectedCity.price,
      type: "rent", // Добавленный фиксированный параметр
    };

    console.log("Submitting form data:", submissionData);

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/bbcbcda8-3941-4b79-b337-b84399428d27",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      if (response.ok) {
        console.log("Form successfully submitted!");
        setIsSubmitted(true); // Флаг успешной отправки
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <h2>
        {selectedCity.name} Rooms From ${selectedCity.price} Per Week
      </h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <h5>
            Name <span className={styles.reqText}>(Required)</span>
          </h5>
          <div className={styles.inputGroup}>
            <Input
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <h5>
            Email <span className={styles.reqText}>(Required)</span>
          </h5>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div>
            <p className={styles.terms}>
              By signing up, you agree that you have reviewed and accept Terms
              of Use and Privacy Policy
            </p>
          </div>
          <button type="submit" className={styles.submitButton}>
            Find a Room a Week
          </button>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <h3>Success!</h3>
          <p>Your form has been submitted successfully.</p>
        </div>
      )}
    </Modal>
  );
}

export default ExploreModal;
