import styles from "./Featured.module.css";
import { logos } from "../../constants/logos";

function Featured() {
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
              <img src={logo.src} alt={logo.alt} className={styles.logo} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
