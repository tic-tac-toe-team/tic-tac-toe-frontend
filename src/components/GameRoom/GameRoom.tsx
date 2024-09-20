import React from 'react';
import styles from './GameRoom.module.css';

interface GameRoomProps {
    id: number;
    playersCount: number;
}

const GameRoom: React.FC<GameRoomProps> = ({ id, playersCount }) => (
    <button className={styles.button}>
        <p>Room {id}</p>
        <p>Players: {playersCount}</p>
    </button>
);

export default GameRoom;