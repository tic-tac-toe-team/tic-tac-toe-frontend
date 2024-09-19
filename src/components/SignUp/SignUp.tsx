import React, { useState } from "react";
import "../../App.css"
import "./SignUp.css"

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
        <div className="register-container">
            <h2 className="register-header">Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input
                        className="form-input"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input
                        className="form-input"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        className="form-input"
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="form-submit-btn" type="submit">Register</button>
            </form>
            <p className="auth-text">
                Have already registered?
                <a href="/" className="auth-text-link"> Login</a>
            </p>
        </div>
    );
};

export default SignUp;
