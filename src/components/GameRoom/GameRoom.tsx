import React from 'react';
import { RoomProps } from '../../types/room-props';
import styles from './GameRoom.module.css';

const GameRoom: React.FC<RoomProps> = ({ id, playersCount }) => (
    <button className={styles.button}>
        <p>Room {id}</p>
        <p>Players: {playersCount}</p>
    </button>
);

export default GameRoom;