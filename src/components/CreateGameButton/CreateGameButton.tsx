import React from 'react';
import styles from './CreateGameButton.module.css';

interface CreateGameButtonProps {
    onClick: () => void;
}

const CreateGameButton: React.FC<CreateGameButtonProps> = ({ onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>+</button>
    );
}

export default CreateGameButton;
