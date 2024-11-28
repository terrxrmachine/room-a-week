import { NavLink } from "react-router-dom";
import { Home, Search } from "lucide-react";
import styles from "./MobileNav.module.css";
import { AuthButton } from "../../ui/Button/AuthButton";

export function MobileNav({ isOpen, onClose }) {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={onClose}
        >
          <Home size={20} />
          Host A Room
        </NavLink>
        <NavLink
          to="/rent"
          className={({ isActive }) => (isActive ? styles.active : "")}
          onClick={onClose}
        >
          <Search size={20} />
          Find A Room
        </NavLink>
      </nav>
      <AuthButton />
    </div>
  );
}
