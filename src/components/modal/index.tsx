import { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./estilo.module.css";

import DarkButton from "../button/darkButton";
import LightButton from "../button/lightButtons";

export interface ModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(
  ({ title, message, onConfirm }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
      setIsOpen(false);
    };

    const handleConfirm = () => {
      onConfirm();
      handleClose();
    };

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: handleClose,
    }));

    if (!isOpen) {
      return null;
    }

    return (
      <div
        className={styles.popupCleanVerificationContainer}
        onClick={handleClose}
      >
        <div className={styles.box} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <hr />
          <p>{message}</p>
          <div className={styles.buttonsArea}>
            <LightButton onClick={handleConfirm}>Sim</LightButton>
            <DarkButton onClick={handleClose}>Não</DarkButton>
          </div>
        </div>
      </div>
    );
  }
);

export default Modal;
