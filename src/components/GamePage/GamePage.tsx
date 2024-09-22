import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from "../Player/Player";
import LeaveGameButton from "../LeaveGameButton/LeaveGameButton";
import styles from './GamePage.module.css';
import { useParams } from 'react-router-dom';
import { GameResponseDto } from '../../types/dtos/game-response-dto';
import { getGameById, makeMove } from '../../api/game-api';
import { MakeMoveDto } from '../../types/dtos/make-move-dto';

const GamePage: React.FC = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const [game, setGame] = useState<GameResponseDto | null>(null);
    // const [cells, setCells] = useState<CellType[]>([]);
    // const [currentPlayer, setCurrentPlayer] = useState<PlayerType | null>(null);
    // const [players, setPlayers] = useState<PlayerType[]>([]);
    const cells = game?.cells || [];
    const players = game?.players || [];
    const currentPlayer = game?.players.find(player => player.isCurrent);
    const storedPlayerId = Number(localStorage.getItem('playerId'));

    useEffect(() => {
        fetchGame();
    }, [players]);

    const fetchGame = async () => {
        try {
            if (gameId) {
                const response: GameResponseDto = await getGameById(gameId);
                setGame(response);
                // setCells(response.cells);
                // setPlayers(response.players);
                // setCurrentPlayer(currentPlayer || null);
            }
        } catch (error) {
            console.error('Failed to fetch game', error);
        }
    }

    const handleCellClick = async (index: number) => {
        try {
            if (currentPlayer?.playerId !== storedPlayerId) {
                alert('It is not your turn to make a move.');
                return;
            }

            if (gameId) {
                const moveDto: MakeMoveDto = { position: index, playerId: storedPlayerId};
                const response = await makeMove(gameId, moveDto);
                setGame(response);
            }
        } catch (error) {
            console.error('Failed to make move', error);
        }
    };

    return (
        <div className={styles.game}>
            <div className={styles.players}>
                {players.map((player) => (
                    <Player
                        key={player.playerId}
                        name={player.playerId.toString()}
                        symbol={player.symbol}
                    />
                ))}
            </div>
            <div className={styles.board}>
                <Info currentPlayer={currentPlayer?.symbol} />
                <Board cells={cells} onCellClick={handleCellClick} />
            </div>
            <div className={styles.container}>
                <LeaveGameButton />
            </div>
        </div>
    );
};

export default GamePage;
