import React, { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import {useNavigate} from 'react-router-dom';
import {register} from '../../api/auth-api';

const SignUp: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match!');

            return;
        }
        try {
            const response = await register({ username, password });
            console.log("Registration successful: ", response);
            navigate("/login");
        } catch (err: any) {
            console.error("Registering error: ", err);

            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred while registering.");
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
            error={error || undefined}
        />
    );
};

export default SignUp;
