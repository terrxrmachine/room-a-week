import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, User } from "lucide-react";
import styles from "./Input.module.css";
import Button from "../../ui/Buttons/Button";
import Input from "../../ui/Input/Input";
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
          name: "",
          email: "",
          moveInDate: "",
        }
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(true); // Открываем модальное окно
    // Здесь можно добавить логику отправки данных на сервер
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
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
          <>
            <div className={styles.inputGroupRow}>
              <Input
                label="First Name"
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
              <Input
                label="Last Name"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </div>

            <div className={styles.inputGroupRow}>
              <Input
                label="Phone Number"
                type="tel"
                required
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                icon={Phone}
                placeholder="Enter Phone Number"
              />
              <Input
                label="Email"
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                icon={Mail}
              />
            </div>

            <Input
              label="City"
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
              icon={MapPin}
              placeholder="Enter City"
            />
          </>
        ) : (
          <>
            <Input
              label="Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter First Name"
              icon={User}
            />
            <Input
              label="Email"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              icon={Mail}
            />
            <Input
              label="Your Move In Date"
              type="date"
              name="moveInDate"
              value={formData.moveInDate}
              onChange={handleChange}
            />
          </>
        )}

        <p className={styles.terms}>
          By clicking the button below you agree with our Terms & Conditions and
          Privacy Statement
        </p>

        <Button
          variant={formType === "rent" ? "primary" : "primary"}
          type="submit"
          fullWidth
        >
          {formType === "rent" ? "FIND A ROOM A WEEK" : "LIST YOUR PROPERTY"}
        </Button>
      </form>

      {/* Отображение модального окна */}
      {isModalOpen && <MessageSent onClose={closeModal} />}
    </div>
  );
}

export default InputForm;
