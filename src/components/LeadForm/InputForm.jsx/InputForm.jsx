import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./Input.module.css";
import Button from "../../ui/Buttons/Button";
import HostForm from "./HostForm/HostForm";
import RentForm from "./RentForm/RentForm";
import MessageSent from "../../Modals/MessageSent/MessageSent";

function InputForm() {
  const location = useLocation();
  const formType = location.pathname === "/host" ? "host" : "rent";

  const [formData, setFormData] = useState(
    formType === "host"
      ? {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          city: "",
        }
      : {
          firstName: "",
          email: "",
          moveInDate: "",
          city: "",
        }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Синхронизация `formData` при изменении `formType`
  useEffect(() => {
    setFormData({
      firstName: formType === "host" ? "" : formData.firstName || "",
      lastName: formType === "host" ? "" : formData.lastName || "",
      email: "",
      phoneNumber: formType === "host" ? "" : formData.phoneNumber || "",
      city: formType === "host" ? "" : formData.city || "",
      name: formType === "rent" ? "" : formData.name || "",
      moveInDate: formType === "rent" ? "" : formData.moveInDate || "",
    });
  }, [formType]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sheetType = formType === "host" ? "host" : "rent";
    const apiUrl = `https://api.sheetbest.com/sheets/bbcbcda8-3941-4b79-b337-b84399428d27?sheet=${sheetType}`;

    console.log("Submitting form data:", formData);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form successfully submitted!");
        setIsModalOpen(true);
      } else {
        console.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value || "",
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {formType === "host"
            ? "Host a Room - Room A Week"
            : "Find a Room - Room A Week"}
        </title>
        <meta
          name="description"
          content={
            formType === "host"
              ? "List your property for weekly rentals and earn money easily."
              : "Find secure, affordable weekly rental rooms starting at $142 per week."
          }
        />
        <meta
          name="keywords"
          content={
            formType === "host"
              ? "host a room, weekly rentals, list property"
              : "weekly rentals, find a room, affordable rooms"
          }
        />
      </Helmet>

      <div className={styles.formContainer}>
        <h1 className={styles.title}>
          {formType === "rent"
            ? "Rent a secure, clean, individual room by the week."
            : "List your property for weekly rentals"}
        </h1>
        <p className={styles.subtitle}>
          {formType === "rent"
            ? "Find Weekly Rental Stays Starting at $142 per week"
            : "Earn money by hosting weekly renters"}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {formType === "host" ? (
            <HostForm
              formData={formData}
              handleChange={handleChange}
              setFormData={setFormData}
            />
          ) : (
            <RentForm formData={formData} handleChange={handleChange} />
          )}

          <p className={styles.terms}>
            By clicking the button below you agree with our Terms & Conditions
            and Privacy Statement
          </p>

          <Button
            variant={formType === "rent" ? "primary" : "primary"}
            type="submit"
            fullWidth
          >
            {formType === "rent" ? "FIND A ROOM A WEEK" : "LIST YOUR PROPERTY"}
          </Button>
        </form>

        {isModalOpen && <MessageSent onClose={closeModal} />}
      </div>
    </>
  );
}

export default InputForm;
