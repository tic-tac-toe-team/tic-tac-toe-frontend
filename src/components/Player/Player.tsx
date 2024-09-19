import React from 'react';
import LeaveGameButton from '../LeaveGameButton/LeaveGameButton';
import './Player.css';
import { PlayerProps } from '../../types/player-props';

const Player: React.FC<PlayerProps> = ({ playerName }) => {
    return (
        <div className="player">
            <div className="player-name">{playerName}</div>
        </div>
    );
};

export default Player;
