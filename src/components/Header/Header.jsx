import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.css";
import { DesktopNav } from "./DesktopNav/DesktopNav";
import { MobileNav } from "./MobileNav/MobileNav";
import { AuthButton } from "../ui/Button/AuthButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link to="/">ROOM a week</Link>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={styles.desktopMenu}>
            <DesktopNav />
            <div className={styles.authButtons}>
              <AuthButton type="signin" />
              <AuthButton type="signup" />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Header;
