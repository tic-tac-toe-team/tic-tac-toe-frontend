import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from '../Player/Player';
import LeaveGameButton from '../LeaveGameButton/LeaveGameButton';
import styles from './GamePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GameResponseDto } from '../../types/dtos/game-response-dto';
import { getGameById, leaveGame, makeMove } from '../../api/game-api';
import { MakeMoveDto } from '../../types/dtos/make-move-dto';
import { LeaveGameDto } from '../../types/dtos/leave-game-dto';
import { getPlayerById } from '../../api/player-api';

const GamePage: React.FC = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const navigate = useNavigate();
    const [game, setGame] = useState<GameResponseDto | null>(null);
    const cells = game?.cells || [];
    const players = game?.players || [];
    const currentPlayer = players.find(player => player.isCurrent);
    const storedPlayerId = Number(localStorage.getItem('playerId'));
    const [playerNames, setPlayerNames] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const fetchGame = async () => {
            try {
                if (gameId) {
                    const response: GameResponseDto = await getGameById(gameId);

                    if (JSON.stringify(response) !== JSON.stringify(game)) {
                        setGame(response);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch game', error);
            }
        };

        fetchGame();

        const interval = setInterval(fetchGame, 1000);

        return () => clearInterval(interval);
    }, [game, gameId]);

    useEffect(() => {
        const fetchPlayerNames = async () => {
            const newPlayerNames: { [key: number]: string } = {};

            for (const player of players) {
                const playerData = await getPlayerById(player.playerId);
                newPlayerNames[player.playerId] = playerData.username;
            }

            setPlayerNames(newPlayerNames);
        };

        const hasPlayers = players.length > 0;

        if (hasPlayers) {
            fetchPlayerNames();
        }
    }, [players]);

    const handleMakeMove = async (index: number) => {
        try {
            if (currentPlayer?.playerId !== storedPlayerId) {
                alert('It is not your turn to make a move.');
                return;
            }

            if (gameId) {
                const moveDto: MakeMoveDto = { position: index, playerId: currentPlayer.playerId };
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
                const leaveGameDto: LeaveGameDto = { playerId: storedPlayerId };
                await leaveGame(gameId, leaveGameDto);
                navigate(`/rooms`);
            }
        } catch (error) {
            console.error('Failed to leave game', error);
        }
    }

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
        </div>
    );
};

export default GamePage;