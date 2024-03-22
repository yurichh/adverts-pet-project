import React, { useEffect } from 'react';
import styles from './styles.module.css';
import ModalPortal from 'components/ModalPortal/ModalPortal';

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  return (
    <ModalPortal>
      <div onClick={handleBackdropClick} className={styles.modal}>
        {children}
      </div>
    </ModalPortal>
  );
};

export default Modal;
