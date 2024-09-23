import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Info from '../Info/Info';
import Player from "../Player/Player";
import LeaveGameButton from "../LeaveGameButton/LeaveGameButton";
import styles from './GamePage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { GameResponseDto } from '../../types/dtos/game-response-dto';
import { getGameById, leaveGame, makeMove } from '../../api/game-api';
import { MakeMoveDto } from '../../types/dtos/make-move-dto';
import { LeaveGameDto } from '../../types/dtos/leave-game-dto';
import { PlayerType } from '../../types/player-type';

const GamePage: React.FC = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const [game, setGame] = useState<GameResponseDto | null>(null);
    const navigate = useNavigate();
    // const [currentPlayer, setCurrentPlayer] = useState<PlayerType | null>(null);
    const cells = game?.cells || [];
    const players = game?.players || [];
    const storedPlayerId = Number(localStorage.getItem('playerId'));
    const currentPlayer = game?.players.find(player => player.isCurrent);
    // const [cells, setCells] = useState<CellType[]>([]);
    // const [players, setPlayers] = useState<PlayerType[]>([]);

    useEffect(() => {
        fetchGame();
    }, []);

    const fetchGame = async () => {
        try {
            if (gameId) {
                const response: GameResponseDto = await getGameById(gameId);
                setGame(response);

                // const current = response.players.find(player => player.isCurrent);
                // if (current) {
                //     setCurrentPlayer(current);
                // }
                // setCells(response.cells);
                // setPlayers(response.players);
                // setCurrentPlayer(currentPlayer || null);
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

                // const current = response.players.find(player => player.isCurrent);
                //
                // if (current) {
                //     setCurrentPlayer(current);
                // }
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
        </div>
    );
};

export default GamePage;
