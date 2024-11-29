import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";
import styles from "./Input.module.css";
import Button from "../../ui/Buttons/Button";
import Input from "../../ui/Input/Input";

function InputForm() {
  const location = useLocation();
  const formType = location.pathname === "/host" ? "host" : "rent";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    moveInDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <Input
          label="Name"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter First Name"
        />

        <Input
          label="Email"
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <Input
          label={formType === "rent" ? "Your Move In Date" : "Available From"}
          type="date"
          name="moveInDate"
          value={formData.moveInDate}
          onChange={handleChange}
          icon={Calendar}
        />

        <p className={styles.terms}>
          By clicking the button below you agree with our Terms & Conditions and
          Privacy Statement
        </p>

        <Button
          variant={formType === "rent" ? "primary" : "secondary"}
          type="submit"
          fullWidth
        >
          {formType === "rent" ? "FIND A ROOM A WEEK" : "LIST YOUR PROPERTY"}
        </Button>
      </form>
    </div>
  );
}

export default InputForm;
