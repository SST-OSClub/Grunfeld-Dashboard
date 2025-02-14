import React, { useState, ChangeEvent } from "react";
import styles from "@/styles/AttendanceButton.module.css";

const AttendanceButton: React.FC = () => {
  const [inputCode, setInputCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isHappy, setIsHappy] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const funnyMessages: string[] = ["Asking the security hamsters to verify..."];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCode(e.target.value);
    setIsHappy(e.target.value.length > 5);
  };

  const handleValidate = () => {
    setLoading(true);
    setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);

    setTimeout(() => {
      setLoading(false);
      setMessage(
        inputCode.length > 5
          ? "Attendance marked successfully! 🎉"
          : "Invalid code! Please check and try again. ❌"
      );      
    }, 2000);
  };

  return (
    <div className={styles.card}>

      {/* Input Section */}
      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={inputCode}
            onChange={handleInputChange}
            placeholder="Enter your attendance code"
            className={styles.input}
          />
        </div>

        <button
          onClick={handleValidate}
          disabled={loading}
          className={`${styles.button} ${loading ? styles.pulse : ""}`}
        >
          {loading ? (
            <div className={styles.buttonContent}>
              <div className={styles.spinner}></div>
              <span>Validating...</span>
            </div>
          ) : (
            "Mark Attendance"
          )}
        </button>
      </div>

      {/* Message Section */}
      {message && (
        <div
          className={`${styles.message} ${
            loading
              ? styles.textBlue
              : isHappy
              ? styles.textGreen
              : styles.textRed
          } ${styles.fadeIn}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AttendanceButton;
