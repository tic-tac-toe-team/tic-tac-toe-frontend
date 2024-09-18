import React from 'react';
import './GameRoom.css';
import { Room } from '../../types/room';

const GameRoom: React.FC<Room> = ({ id, playersCount }) => (
    <div className="game-room">
        <p>Room {id}</p>
        <p>Players: {playersCount}</p>
    </div>
);

export default GameRoom;
