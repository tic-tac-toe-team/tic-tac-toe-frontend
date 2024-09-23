import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import {login} from "../../api/auth-api";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
            console.log("Logging in successful:", response);
            localStorage.setItem("ACCESS_TOKEN", response.accessToken);
            localStorage.setItem("playerId", String(response.id));
            localStorage.setItem("username", response.username);
            navigate("/rooms");
        } catch (err: any) {
            console.error("Logging in error: ", err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred while logging in.");
            }
        }
    };

    const fields = [
        {
            id: "username",
            label: "Username:",
            type: "text",
            value: username,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
        },
        {
            id: "password",
            label: "Password:",
            type: "password",
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        },
    ];

    return (
        <AuthForm
            title="Login"
            fields={fields}
            submitButtonText="Login"
            onSubmit={handleSubmit}
            footerText="Don’t have an account? "
            footerLinkText="Register now"
            footerLinkHref="/signup"
            error={error || undefined}
        />
    );
};

export default Login;
