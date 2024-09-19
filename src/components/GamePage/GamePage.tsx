import React, { useState } from 'react';
import './GamePage.css';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from "../Player/Player";
import LeaveGameButton from "../LeaveGameButton/LeaveGameButton";

const GamePage: React.FC = () => {
    const generateInitialCells = () => {
        return Array(9).fill('');
    };

    const [cells, setCells] = useState<('X' | 'O' | '')[]>(generateInitialCells);
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
    const [playerName, setPlayerName] = useState('Player1');

    const handleCellClick = (index: number) => {
        const selectedCell = cells[index];
        const isCellEmpty = selectedCell === '';
        const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (isCellEmpty) {
            const newCells = [...cells];
            newCells[index] = currentPlayer;
            setCells(newCells);
            setCurrentPlayer(nextPlayer);
        }
    };

    return (
        <div className="game-page">
            <Player playerName={playerName} />
            <Info currentPlayer={currentPlayer} />
            <Board cells={cells} onCellClick={handleCellClick} />
            <Player playerName={playerName} />
            <LeaveGameButton />
        </div>
    );
};

export default GamePage;
