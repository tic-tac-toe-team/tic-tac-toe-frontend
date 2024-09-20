import React from 'react';
import styles from './CreateGameButton.module.css';

const CreateGameButton: React.FC = () => {
    return (
        <button className={styles.button}>+</button>
    );
}

export default CreateGameButton;