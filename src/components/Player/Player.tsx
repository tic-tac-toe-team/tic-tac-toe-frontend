import React from 'react';
import './Player.module.css';
import styles from './Player.module.css';

interface PlayerProps {
    name: string;
    symbol: string;
}

const Player: React.FC<PlayerProps> = ({ name, symbol }) => {
    const playerBackgroundColor = symbol === 'X' ? '#31c4be' : '#E89B30';

    return (
        <div className={styles.player}>
            <p className={styles.label} style={{ backgroundColor: playerBackgroundColor }}>
                {name} - {symbol}
            </p>
        </div>
    );
};

export default Player;
