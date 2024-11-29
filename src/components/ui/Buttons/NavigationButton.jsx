import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Button.module.css";

export function NavigationButton({ to, children, variant = "default" }) {
  return (
    <Link to={to} className={styles.navLink}>
      <Button variant={variant}>{children}</Button>
    </Link>
  );
}
