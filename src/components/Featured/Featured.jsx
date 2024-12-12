import styles from "./Featured.module.css";
import { useEffect, useState } from "react";
import { logos } from "../../constants/logos";

function Featured() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Проверить изначальное состояние
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.highlight}>Co-Living</span> AS FEATURED ON
        </h2>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <a
              key={logo.alt}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                style={{
                  width: isMobile
                    ? logo.mobileWidth || "auto"
                    : logo.width || "auto",
                  height: isMobile
                    ? logo.mobileHeight || "20px"
                    : logo.height || "30px",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
