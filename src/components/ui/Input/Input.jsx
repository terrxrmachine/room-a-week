import styles from "./Input.module.css";

function Input({
  label,
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
      {label && (
        <label>
          {label}
          {required && <span className={styles.required}>(Required)</span>}
        </label>
      )}
      <div className={styles.inputContainer}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={Icon ? styles.withIcon : ""}
        />
        {Icon && <Icon size={20} className={styles.icon} />}
      </div>
    </div>
  );
}

export default Input;
