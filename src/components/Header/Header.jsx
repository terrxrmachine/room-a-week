import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { Home, Search } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <Helmet>
        <title>Room A Week - Secure Weekly Rentals</title>
        <meta
          name="description"
          content="Room A Week offers secure and affordable weekly rental options. List your property or find a room starting at $142 per week."
        />
      </Helmet>

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
    </>
  );
}

export default Header;
