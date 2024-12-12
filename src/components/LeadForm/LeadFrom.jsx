import InputForm from "./InputForm.jsx/InputForm";
import { VideoForm } from "./VideoForm/VideoForm";
import styles from "./Leadform.module.css";
import ScrollButton from "../ui/Buttons/ScrollButton/ScrollButton";

function LeadForm() {
  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <InputForm />
        <VideoForm />
      </div>
      <ScrollButton />
    </div>
  );
}

export default LeadForm;
