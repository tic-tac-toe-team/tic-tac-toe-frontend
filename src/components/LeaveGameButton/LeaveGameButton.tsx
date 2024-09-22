import React from 'react';
import './LeaveGameButton.module.css'
import styles from './LeaveGameButton.module.css'

interface LeaveGameButtonProps {
    onClick: () => void;
}

const LeaveGameButton: React.FC<LeaveGameButtonProps> = ({ onClick }) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onClick}>Leave the game</button>
        </div>
    );
}

export default LeaveGameButton;
