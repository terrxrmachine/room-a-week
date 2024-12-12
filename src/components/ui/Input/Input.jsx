import styles from "./Input.module.css";

function Input({
  required,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputContainer}>
        {type === "date" ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`${styles.dateInput} ${Icon ? styles.withIcon : ""}`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={Icon ? styles.withIcon : ""}
          />
        )}
        {Icon && <Icon size={20} className={styles.icon} />}
      </div>
    </div>
  );
}

export default Input;
