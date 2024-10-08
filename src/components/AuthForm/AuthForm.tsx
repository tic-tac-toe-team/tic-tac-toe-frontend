import React from "react";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";

interface Field {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AuthFormProps {
    title: string;
    fields: Field[];
    submitButtonText: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    footerText: string;
    footerLinkText: string;
    footerLinkHref: string;
    error?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({title, fields, submitButtonText, onSubmit, footerText,
                                               footerLinkText, footerLinkHref, error,}) => {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.formHeader}>{title}</h2>
            <form className={styles.form} onSubmit={onSubmit}>
                {fields.map((field) => (
                    <div key={field.id} className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor={field.id}>
                            {field.label}
                        </label>
                        <input
                            className={styles.formInput}
                            id={field.id}
                            type={field.type}
                            value={field.value}
                            onChange={field.onChange}
                            required
                        />
                    </div>
                ))}
                <button className={styles.formSubmitBtn} type="submit">
                    {submitButtonText}
                </button>
            </form>
            <p className={styles.authText}>
                {footerText}
                <Link to={footerLinkHref} className={styles.authTextLink}>
                    {footerLinkText}
                </Link>
            </p>
            {error && <div className={styles.error}>{error}</div>}
        </div>
    );
};

export default AuthForm;
