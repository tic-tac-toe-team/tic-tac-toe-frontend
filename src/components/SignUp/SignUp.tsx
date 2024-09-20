import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";

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
        {
            id: "confirmPassword",
            label: "Confirm Password:",
            type: "password",
            value: confirmPassword,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value),
        },
    ];

    return (
        <AuthForm
            title="Registration"
            fields={fields}
            submitButtonText="Register"
            onSubmit={handleSubmit}
            footerText="Have already registered? "
            footerLinkText="Login"
            footerLinkHref="/login"
        />
    );
};

export default SignUp;
