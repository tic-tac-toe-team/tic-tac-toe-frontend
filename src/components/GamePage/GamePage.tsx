import React, { useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from "../Player/Player";
import LeaveGameButton from "../LeaveGameButton/LeaveGameButton";
import styles from './GamePage.module.css';

const GamePage: React.FC = () => {
    const generateInitialCells = () => {
        return Array(9).fill('');
    };

    const [cells, setCells] = useState<('X' | 'O' | '')[]>(generateInitialCells);
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

    const players = [
        { name: 'Player2', symbol: 'O' },
        { name: 'Player1', symbol: 'X' },
    ];

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
        <div className={styles.game}>
            <div className={styles.players}>
                {players.map((player, index) => (
                    <Player key={index} player={player}/>
                ))}
            </div>
            <div className={styles.board}>
                <Info currentPlayer={currentPlayer}/>
                <Board cells={cells} onCellClick={handleCellClick}/>
            </div>
            <div className={styles.container}>
                <LeaveGameButton/>
            </div>
        </div>
    );
};

export default GamePage;
