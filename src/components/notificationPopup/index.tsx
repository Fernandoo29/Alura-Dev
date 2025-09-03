import styles from "./estilo.module.css";

import React, { useEffect, useState } from "react";

export interface INotificationPopupProps {
  message: string;
  type: "success" | "error" | "warning";
  onClose?: () => void;
  duration?: number; // in milliseconds
}

const NotificationPopup: React.FC<INotificationPopupProps> = ({
  message,
  type,
  onClose = () => {},
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 500); // Allow time for exit animation
    }, duration);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration / 100); // Increment every 100ms
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);

  const getTypeClass = () => {
    switch (type) {
      case "success":
        return styles.success;
      case "error":
        return styles.error;
      case "warning":
        return styles.warning;
      default:
        return "";
    }
  };

  return (
    <div
      className={`${styles.popupContainer} ${
        isVisible ? styles.visible : styles.exiting
      } ${getTypeClass()}`}
    >
      <p className={styles.message}>{message}</p>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default NotificationPopup;
