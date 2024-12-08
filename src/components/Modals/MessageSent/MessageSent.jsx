import { useEffect } from "react";
import Modal from "../../ui/Modal/Modal";

function MessageSent({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 7000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <p>
        Your request has been sent successfully!
        <br />
        Check your mailbox for an email with a confirmation.
      </p>
    </Modal>
  );
}

export default MessageSent;
