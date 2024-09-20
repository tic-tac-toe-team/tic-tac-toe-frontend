import React from "react";
import styles from "./Modal.module.css";

const Modal: React.FC<{ isOpen: boolean; onQuit: () => void; onNewRound: () => void; message: string }> =
    ({ isOpen, onQuit, onNewRound, message }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Game Over</h2>
                <p>{message}</p>
                <div className={styles.modalButtons}>
                    <button className={styles.modalBtn} onClick={onQuit}>Quit</button>
                    <button className={styles.modalBtn} onClick={onNewRound}>Take New Round</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
