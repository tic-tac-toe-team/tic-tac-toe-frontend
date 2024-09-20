import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login info: Username:", username, "Password:", password);
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
        />
    );
};

export default Login;
