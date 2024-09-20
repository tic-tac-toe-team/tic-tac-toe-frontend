import React from "react";
import styles from "./StartPage.module.css";
import {Link} from "react-router-dom";

const StartPage = () => {
    return (
        <div className={styles.startPageContainer}>
            <div className={styles.authButtons}>
                <Link to="/signup" className={`${styles.authButton} ${styles.authButtonSignUp}`}>
                    Sign up
                </Link>
                <Link to="/login" className={`${styles.authButton} ${styles.authButtonLogin}`}>
                    Login
                </Link>
            </div>

            <Link to="/rooms" className={styles.startButton}>Start Game</Link>
            <p className={styles.authText}>
                <Link to="/signup" className={styles.authTextLink}>
                    Sign up
                </Link>{" "}
                or
                <Link to="/login" className={styles.authTextLink}>
                    {" "}
                    Login
                </Link>{" "}
                if you have already registered
            </p>
        </div>
    );
}

export default StartPage;
