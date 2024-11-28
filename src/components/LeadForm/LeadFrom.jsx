import InputForm from "./InputForm.jsx/InputForm";
import { VideoForm } from "./VideoForm/VideoForm";
import styles from "./LeadForm.module.css";

function LeadForm() {
  return (
    <div className={styles.container}>
      <div className={styles.forms}>
        <InputForm />
        <VideoForm />
      </div>
    </div>
  );
}

export default LeadForm;
