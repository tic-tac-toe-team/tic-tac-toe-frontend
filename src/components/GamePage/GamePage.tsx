import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from "../Player/Player";
import LeaveGameButton from "../LeaveGameButton/LeaveGameButton";
import styles from './GamePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GameResponseDto } from '../../types/dtos/game-response-dto';
import {getGameById, leaveGame, makeMove, restartGame} from '../../api/game-api';
import { MakeMoveDto } from '../../types/dtos/make-move-dto';
import { LeaveGameDto } from '../../types/dtos/leave-game-dto';
import Modal from "../Modal/Modal";

const GamePage: React.FC = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const [game, setGame] = useState<GameResponseDto | null>(null);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');
    const navigate = useNavigate();
    // const [cells, setCells] = useState<CellType[]>([]);
    // const [currentPlayer, setCurrentPlayer] = useState<PlayerType | null>(null);
    // const [players, setPlayers] = useState<PlayerType[]>([]);
    const cells = game?.cells || [];
    const players = game?.players || [];
    const currentPlayer = game?.players.find(player => player.isCurrent);
    const storedPlayerId = Number(localStorage.getItem('playerId'));

    const [winner, setWinner] = useState<string | null>(null);

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

                if (response.state === 'win' && !winner) {
                    const winningPlayer = response.players.find(player => player.isCurrent)?.symbol;
                    setWinner(winningPlayer || null);
                    setModalMessage(`Player ${winningPlayer} wins!`);
                    setIsGameOver(true);
                } else if (response.state === "draw") {
                    setModalMessage('It\'s a draw!');
                    setIsGameOver(true);
                }
            }
        } catch (error) {
            console.error('Failed to fetch game', error);
        }
    }

    const handleMakeMove = async (index: number) => {
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

    const handleLeaveGame = async () => {
        try {
            if (gameId) {
                const leaveGameDto: LeaveGameDto = {playerId: storedPlayerId};
                await leaveGame(gameId, leaveGameDto);
                navigate(`/rooms`);
            }
        } catch (error) {
            console.error('Failed to leave game', error);
        }
    }

    const handleNewRound = async () => {
        try {
            if (gameId) {
                await restartGame(gameId);
                setIsGameOver(false);
                setModalMessage('');
                setWinner(null);
                await fetchGame();
            }
        } catch (error) {
            console.error('Failed to restart game', error);
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
                <Board cells={cells} onClick={handleMakeMove} />
            </div>
            <div className={styles.container}>
                <LeaveGameButton onClick={handleLeaveGame}/>
            </div>
            <Modal
                isOpen={isGameOver}
                onQuit={handleLeaveGame}
                onNewRound={handleNewRound}
                message={modalMessage}
            />
        </div>
    );
};

export default GamePage;
