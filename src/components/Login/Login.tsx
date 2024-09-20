import React, { useState } from "react";
import "../../App.css"
import styles from "./Login.module.css"

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login info: Username:", username, "Password:", password);
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginHeader}>Login</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
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
                <button className={styles.formSubmitBtn} type="submit">Login</button>
            </form>
            <p className={styles.authText}>
                Don’t have an account?
                <a href="/" className={styles.authTextLink}> Register now</a>
            </p>
        </div>
    );
};

export default Login;
