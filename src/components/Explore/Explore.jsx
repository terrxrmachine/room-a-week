import styles from "./Explore.module.css";
import Button from "../ui/Buttons/Button";

function Explore() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Find a Room A Week</h2>
        <p className={styles.text}>
          Flexible, affordable room rentals in shared housing, providing clean,
          comfortable living options with amenities designed for professionals,
          students, and anyone seeking quality housing without long-term
          commitments.
        </p>
        <Button
          variant="primary"
          onClick={() => {
            /* handle click */
          }}
        >
          EXPLORE OPTIONS
        </Button>
      </div>
    </div>
  );
}

export default Explore;
