import React from 'react';
import './GameRoom.css';
import { RoomProps } from '../../types/room-props';

const GameRoom: React.FC<RoomProps> = ({ id, playersCount }) => (
    <div className="game-room">
        <p>Room {id}</p>
        <p>Players: {playersCount}</p>
    </div>
);

export default GameRoom;