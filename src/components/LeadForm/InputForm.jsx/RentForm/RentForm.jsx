import { Mail, User } from "lucide-react";
import Input from "../../../ui/Input/Input";
import CityInput from "../../../ui/CityInput/CityInput";
import styles from "../Input.module.css";

function RentForm({ formData, handleChange, setFormData }) {
  return (
    <>
      <Input
        label="Name"
        required
        name="name"
        value={formData.name || ""} // Ensure value is always defined
        onChange={handleChange}
        placeholder="Enter First Name"
        icon={User}
      />
      <Input
        label="Email"
        type="email"
        required
        name="email"
        value={formData.email || ""} // Ensure value is always defined
        onChange={handleChange}
        placeholder="Enter Email"
        icon={Mail}
      />

      <div className={styles.inputGroupRow}>
        <Input
          label="Your Move In Date"
          type="date"
          name="moveInDate"
          value={formData.moveInDate || ""} // Ensure value is always defined
          onChange={handleChange}
        />
        <CityInput
          value={formData.city || ""} // Ensure value is always defined
          onChange={(value) => setFormData({ ...formData, city: value })}
        />
      </div>
    </>
  );
}

export default RentForm;
