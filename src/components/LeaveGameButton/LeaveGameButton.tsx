import React from 'react';
import './LeaveGameButton.module.css'
import styles from './LeaveGameButton.module.css'

const LeaveGameButton = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Leave the game</button>
        </div>
    );
}

export default LeaveGameButton;