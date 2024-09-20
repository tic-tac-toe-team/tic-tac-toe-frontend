import React from 'react';
import styles from './GameRoom.module.css';
import {Link} from "react-router-dom";

interface GameRoomProps {
    id: number;
    playersCount: number;
}

const GameRoom: React.FC<GameRoomProps> = ({ id, playersCount }) => (
    <Link className={styles.button} to={'/game'}>
        <p>Room {id}</p>
        <p>Players: {playersCount}</p>
    </Link>
);

export default GameRoom;