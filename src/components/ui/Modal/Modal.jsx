import { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import Input from '../Input/Input';

const Modal = ({ isOpen, onClose, children, containerClassName = '' }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.scrollWrapper}>
        <div
          className={`${styles.container} ${containerClassName}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <Input
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Input
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Find a Room a Week
            </button>
          </form>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;