import styles from "./Button.module.css";

function Button({
  children,
  variant = "default",
  onClick,
  type = "button",
  fullWidth,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        fullWidth ? styles.fullWidth : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
