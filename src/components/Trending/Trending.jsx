import styles from "./Trending.module.css";

function Trending() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>QUICK STAY? SEARCH TRENDING CITIES</h2>
        <div className={styles.cities}>
          <span>MIAMI</span> | <span>TAMPA</span> | <span>AUSTIN</span> |
          <span>LAS VEGAS</span> | <span>BALTIMORE</span> | <span>ATLANTA</span>
        </div>
        <button className={styles.button}>SEARCH TRENDS</button>
      </div>
      <div className={styles.trending}>TRENDING</div>
    </div>
  );
}

export default Trending;
