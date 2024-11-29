import React from "react";
import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";
import Logo from "../../assets/logo/Logo";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Logo />
          </div>
          <div className={styles.description}>
            <p>
              At RoomaWeek.com, we specialize in flexible weekly room rentals
              tailored to your lifestyle. Whether you need a short-term stay for
              work, travel, or personal reasons, our platform connects you with
              a variety of affordable room options across different locations.
            </p>
          </div>
          <div className={styles.subtitle}>
            <p>
              Room-A-Week an Online Resource For Rental Home Owners and Renters
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>© {currentYear} - Room-A-Week</div>

          <nav className={styles.links}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/do-not-sell">Do Not Sell My Personal Information</Link>
            <button className={styles.moreButton}>
              <MoreHorizontal size={20} />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
