import React, { useState } from "react";
import "../../App.css"
import "./Login.css"

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login info: Username:", username, "Password:", password);
    };

    return (
        <div className="login-container">
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button className="form-submit-btn" type="submit">Login</button>
            </form>
            <p className="auth-text">
                Don`t have an account?
                <a href="/" className="auth-text-link"> Register now</a>
            </p>
        </div>
    );
};

export default Login;
