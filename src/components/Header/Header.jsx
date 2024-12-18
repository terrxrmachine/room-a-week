import { Helmet } from "react-helmet-async";
import { Link, NavLink } from "react-router-dom";
import { Home, Search, Telescope, Handshake, TableOfContents } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const scrollOptions = {
        behavior: "smooth",
        block: elementId === "faqs" ? "start" : "center", // from "start" only for FAQs for better view
      };
      element.scrollIntoView(scrollOptions);
    }
  };


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

          <div className="MenuButtonsWrapper">
            <div className="MenuItem">
              <Telescope size={20} />
              <button
                className={`${styles.MenuButtons}`}
                onClick={() => scrollToElement("explore")}
              >
                Explore
              </button>
            </div>

            <div className="MenuItem">
              <Handshake size={20} />
              <button
                className={`${styles.MenuButtons}`}
                onClick={() => scrollToElement("featured")}
              >
                Featured
              </button>
            </div>

            <div className="MenuItem">
              <TableOfContents size={20} />
              <button
                className={`${styles.MenuButtons}`}
                onClick={() => scrollToElement("faqs")}
              >
                FAQs
              </button>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
