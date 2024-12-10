import { Mail, Phone } from "lucide-react";
import Input from "../../../ui/Input/Input";
import CityInput from "../../../ui/CityInput/CityInput";
import styles from "../Input.module.css";

function HostForm({ formData, handleChange, setFormData }) {
  const formatPhoneNumber = (phone) => {
    let cleaned = phone.replace(/\D/g, "");

    if (cleaned.length > 10) cleaned = cleaned.slice(0, 10);

    if (cleaned.length > 6) {
      cleaned = `(${cleaned.slice(0, 3)}) ${cleaned.slice(
        3,
        6
      )}-${cleaned.slice(6, 10)}`;
    } else if (cleaned.length > 3) {
      cleaned = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}`;
    } else if (cleaned.length > 0) {
      cleaned = `(${cleaned.slice(0, 3)}`;
    }

    return cleaned;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Update the phone number with formatted value
    setFormData({ ...formData, phoneNumber: formatPhoneNumber(value) });
  };

  return (
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
          onChange={handlePhoneChange} // Using the custom handlePhoneChange
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

      <CityInput
        value={formData.city}
        onChange={(value) => setFormData({ ...formData, city: value })}
      />
    </>
  );
}

export default HostForm;
