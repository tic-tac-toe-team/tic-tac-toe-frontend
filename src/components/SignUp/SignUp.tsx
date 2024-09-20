import React, { useState } from "react";
import "../../App.css";
import styles from "./SignUp.module.css";

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Registration info: Username:", username, "Password:", password);
    };

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.registerHeader}>Register</h2>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="username">Username:</label>
                    <input
                        className={styles.formInput}
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="password">Password:</label>
                    <input
                        className={styles.formInput}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        className={styles.formInput}
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button className={styles.formSubmitBtn} type="submit">Register</button>
            </form>
            <p className={styles.authText}>
                Have already registered?
                <a href="/" className={styles.authTextLink}> Login</a>
            </p>
        </div>
    );
};

export default SignUp;
