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
  };

  const handleValidate = async () => {
    setLoading(true);
    setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
    setIsHappy(false); 

    try {
      const response = await fetch("/api/validateCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: inputCode.trim() }),
      });

      const data = await response.json();

      setLoading(false);
      setMessage(data.message || "Attendance marked successfully! 🎉");

      setIsHappy(data.valid);
    } catch (error) {
      setLoading(false);
      setMessage("Something went wrong. Please try again later." + error);
      setIsHappy(false); 
    }
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
            // placeholder="Enter your attendance code"
            placeholder="Under Construction 🚧"
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
