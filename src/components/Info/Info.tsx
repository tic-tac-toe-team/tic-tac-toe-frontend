import React from 'react';
import { InfoProps } from '../../types/info-props';
import styles from './Info.module.css';
const Info: React.FC<InfoProps> = ({ currentPlayer }) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.label}>{currentPlayer} turn</h3>
        </div>
    );
};

export default Info;
