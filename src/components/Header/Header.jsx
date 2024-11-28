import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import Button from "../ui/Button/Button";
import { Home, Search, User, Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={styles.logo}>
          <Link to="/">ROOM a week</Link>
        </div>

        {/* Мобильное меню */}
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
        >
          <nav>
            <NavLink
              to="/host"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={20} className={styles.icon} />
              Host A Room
            </NavLink>
            <NavLink
              to="/rent"
              className={({ isActive }) => (isActive ? styles.active : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              <Search size={20} className={styles.icon} />
              Find A Room
            </NavLink>
          </nav>
          <div className={styles["auth-buttons"]}>
            <Link to="/sign-in" onClick={() => setIsMenuOpen(false)}>
              <Button variant="default">
                <User size={20} className={styles.icon} />
                Sign in
              </Button>
            </Link>
            <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary">Sign up</Button>
            </Link>
          </div>
        </div>

        {/* Десктопное меню */}
        <div className={styles.desktopMenu}>
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
        </div>
      </div>
    </header>
  );
}

export default Header;
