import React from 'react';
import './Player.module.css';
import styles from './Player.module.css';

interface Player {
    player: {
        name: string;
        symbol: string;
    };
}

const Player: React.FC<Player> = ({ player }) => {
    const playerBackgroundColor = player.symbol === 'X' ? '#31c4be' : '#E89B30';

    return (
        <div className={styles.player}>
            <p className={styles.label} style={{ backgroundColor: playerBackgroundColor }}>
                {player.name} - {player.symbol}
            </p>
        </div>
    );
};

export default Player;
