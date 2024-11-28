import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../ui/Button/Button";
import { Home, Search, User } from "lucide-react";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">ROOM a week</Link>
      </div>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Home size={20} className={styles.icon} />
          Host A Room
        </NavLink>
        <NavLink
          to="/rent"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Search size={20} className={styles.icon} />
          Find A Room
        </NavLink>
      </nav>
      <div className={styles["auth-buttons"]}>
        <Link to="/sign-in">
          <Button variant="default">
            <User size={20} className={styles.icon} />
            Sign in
          </Button>
        </Link>
        <Link to="/sign-up">
          <Button variant="primary">Sign up</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
