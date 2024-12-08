import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Home, Search } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/">
            ROOM
            <span className={styles.sublogo}>a week</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <Home size={20} />
            <span className={styles.desktopText}>Host A Room</span>
            <span className={styles.mobileText}>Host</span>
          </NavLink>
          <NavLink
            to="/rent"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <Search size={20} />
            <span className={styles.desktopText}>Find A Room</span>
            <span className={styles.mobileText}>Rent</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
