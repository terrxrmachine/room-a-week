import React, { useState } from "react";
import Input from "../../ui/Input/Input";
import Modal from "../../ui/Modal/Modal";
import styles from "./ExploreModal.module.css";
import Button from "../../ui/Buttons/Button";
import { Link } from "react-router-dom";


function ExploreModal({ selectedCity, onClose, handleChange }) {
  // Состояния для инпутов
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [moveInDate, setMoveInDate] = useState(""); // New state for move-in date
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      firstName: firstName,
      email: email,
      city: selectedCity.name,
      pricePerWeek: selectedCity.price,
      type: "rent", // Добавленный фиксированный параметр
      moveInDate: moveInDate, // Use the state variable here
    };

    console.log("Submitting form data:", submissionData);

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/e999b749-2c7c-4bbd-9bb8-9d7bd32735c6",
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
      <div>
        <h2 className={styles.title}>
          {selectedCity.name} Rooms From ${selectedCity.price} Per Week
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <h5>Name</h5>
              <Input
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <h5>Email</h5>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <h5>Move in date</h5>
              <Input
                label="Your Move In Date"
                type="date"
                name="moveInDate"
                value={moveInDate || ""} // Use the state variable here
                onChange={(e) => setMoveInDate(e.target.value)} // Update moveInDate state
                placeholder="Your Move In Date"
              />
            </div>
            <div>
              <p className={styles.terms}>
                By signing up, you agree that you have reviewed and accept <Link to="/terms">Terms & Conditions </Link>
                and <Link to="/privacy">Privacy Statement</Link>
              </p>
            </div>
            <Button type="submit" className={styles.submitButton}>
              Find a Room a Week
            </Button>
          </form>
        ) : (
          <div className={styles.successMessage}>
            <h3>Success!</h3>
            <p>Your form has been submitted successfully.</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ExploreModal;
