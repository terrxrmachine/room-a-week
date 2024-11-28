import { NavLink } from "react-router-dom";
import { Home, Search } from "lucide-react";
import styles from "./DesktopNav.module.css";

export function DesktopNav() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/host"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Home size={20} />
        Host A Room
      </NavLink>
      <NavLink
        to="/rent"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <Search size={20} />
        Find A Room
      </NavLink>
    </nav>
  );
}
