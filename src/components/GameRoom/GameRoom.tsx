import React from 'react';
import styles from './GameRoom.module.css';

interface GameRoomProps {
    id: string;
    playersCount: number;
    onClick: (id: string) => void;
}

const GameRoom: React.FC<GameRoomProps> = ({ id, playersCount, onClick }) => (
    <button className={styles.button} onClick={() => onClick(id)}>
        <p>Room {id}</p>
        <p>Players: {playersCount}</p>
    </button>
);

export default GameRoom;
