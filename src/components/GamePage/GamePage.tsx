import React, {useEffect, useState} from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from '../Player/Player';
import LeaveGameButton from '../LeaveGameButton/LeaveGameButton';
import Modal from '../Modal/Modal';
import usePlayerNames from '../../hooks/usePlayerNames';
import styles from './GamePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getGameById, leaveGame, makeMove, restartGame } from '../../api/game-api';
import { MakeMoveDto } from '../../types/dtos/make-move-dto';
import { LeaveGameDto } from '../../types/dtos/leave-game-dto';
import { GameState } from '../../types/enums/game-state-enum';
import { GameResponseDto } from '../../types/dtos/game-response-dto';

const GamePage: React.FC = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const navigate = useNavigate();
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<string>('');
    const [winner, setWinner] = useState<string | null>(null);
    const [game, setGame] = useState<GameResponseDto | null>(null);
    const cells = game?.cells || [];

    const players = game?.players || [];
    const playerCount = players.length;
    const playerNames = usePlayerNames(players, playerCount);
    const storedPlayerId = Number(localStorage.getItem('playerId'));
    const currentPlayer = players.find(player => player.isCurrent);

    useEffect(() => {
        const fetchGame = async () => {
            try {
              if (gameId) {
                  const response: GameResponseDto = await getGameById(gameId);
                  setGame(response);

                  if (game?.state === GameState.WIN && !winner) {
                      const winningPlayer = game.players.find(player => player.isCurrent)?.symbol;
                      setWinner(winningPlayer || null);
                      setModalMessage(`Player ${winningPlayer} wins!`);
                      setIsGameOver(true);
                  } else if (game?.state === GameState.DRAW) {
                      setModalMessage('It\'s a draw!');
                      setIsGameOver(true);
                  }
              }
            } catch (error) {
                console.error('Failed to fetch game', error);
            }
        };

        fetchGame();

        const interval = setInterval(fetchGame, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [gameId]);

    const handleMakeMove = async (index: number) => {
        try {
            if (currentPlayer?.playerId !== storedPlayerId) {
                return;
            }

            if (gameId) {
                const moveDto: MakeMoveDto = { position: index, playerId: currentPlayer.playerId };
                await makeMove(gameId, moveDto);
            }
        } catch (error) {
            console.error('Failed to make move', error);
        }
    };

    const handleLeaveGame = async () => {
        try {
            if (gameId) {
                const leaveGameDto: LeaveGameDto = { playerId: storedPlayerId };
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
                        name={playerNames[player.playerId]}
                        symbol={player.symbol}
                    />
                ))}
            </div>
            <div className={styles.board}>
                <Info currentPlayer={currentPlayer?.symbol} />
                <Board cells={cells} onClick={handleMakeMove} />
            </div>
            <div className={styles.container}>
                <LeaveGameButton onClick={handleLeaveGame} />
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