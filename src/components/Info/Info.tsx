import React from 'react';
import styles from './Info.module.css';

interface InfoProps {
    currentPlayer: string;
}

const Info: React.FC<InfoProps> = ({ currentPlayer }) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.label}>{currentPlayer} turn</h3>
        </div>
    );
};

export default Info;
