import React from "react";
import "../../App.css";
import styles from "./StartPage.module.css";

const StartPage = () => {
    return (
        <div className={styles.startPageContainer}>
            <div className={styles.authButtons}>
                <button className={`${styles.authButton} ${styles.authButtonSignUp}`}>Sign up</button>
                <button className={`${styles.authButton} ${styles.authButtonLogin}`}>Login</button>
            </div>

            <button className={styles.startButton}>Start Game</button>
            <p className={styles.authText}>
                <a href="/" className={styles.authTextLink}>Sign up</a> or
                <a href="/" className={styles.authTextLink}> Login</a> if you have already registered
            </p>
        </div>
    );
}

export default StartPage;
