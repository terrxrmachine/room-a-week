import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Button.module.css";

export function CarouselButton({ direction = "next", onClick }) {
  const Icon = direction === "next" ? ChevronRight : ChevronLeft;

  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={styles.carouselButton}
    >
      <Icon size={20} />
    </Button>
  );
}
