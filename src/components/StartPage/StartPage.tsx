import React from "react";
import "../../App.css"
import "./StartPage.css"

const StartPage = () => {
    return (
        <div className="start-page__container">
            <div className="auth__buttons">
                <button className="auth__button auth__button_sign-up">Sign up</button>
                <button className="auth__button auth__button_login">Login</button>
            </div>

            <button className="start__button">Start Game</button>
            <p className="auth__text">
                <a href="/" className="auth__text_link">Sign up</a> or
                <a href="/" className="auth__text_link"> Login</a> if you have already registered
            </p>
        </div>
    );
}

export default StartPage;
