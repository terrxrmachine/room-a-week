import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Button from "./Button";
import styles from "./Button.module.css";

export function AuthButton({ type = "signin" }) {
  const buttonProps = {
    signin: {
      to: "/sign-in",
      variant: "default",
      icon: <User size={20} />,
      text: "Sign in",
    },
    signup: {
      to: "/sign-up",
      variant: "primary",
      text: "Sign up",
    },
  };

  const { to, variant, icon, text } = buttonProps[type];

  return (
    <Link to={to} className={styles.authLink}>
      <Button variant={variant}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {text}
      </Button>
    </Link>
  );
}
