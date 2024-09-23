import React, {useEffect, useState} from 'react';
import GameRoom from '../GameRoom/GameRoom';
import CreateGameButton from '../CreateGameButton/CreateGameButton';
import styles from './RoomsList.module.css';
import { createGame, getAllGames, joinGame } from '../../api/game-api';
import { GameResponseDto } from '../../types/dtos/game-response-dto';
import { JoinPlayerDto } from '../../types/dtos/join-player-dto';
import { useNavigate } from 'react-router-dom';

const RoomList: React.FC = () => {
    const [games, setGames] = useState<GameResponseDto[]>([]);
    const navigate = useNavigate();
    const storedPlayerId = Number(localStorage.getItem('playerId'));

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response: GameResponseDto[] = await getAllGames();
            setGames(response);
        } catch (error) {
            console.error('Failed to fetch games', error);
        }
    };

    const handleCreateGame = async () => {
        try {
            const dto: JoinPlayerDto = { playerId: storedPlayerId};
            const response = await createGame(dto);
            // setGames(prevGames => [...prevGames, response]);
            await fetchGames();

            if (storedPlayerId && Number(storedPlayerId) === dto.playerId) {
                navigate(`/game/${response.gameId}`);
            }

        } catch (error) {
            console.error('Failed to create game', error);
        }
    };

    const handleJoinGame = async (gameId: number) => {
        const dto: JoinPlayerDto = { playerId: storedPlayerId};
        const response = await joinGame(gameId, dto);

        if (response) {
            navigate(`/game/${response.gameId}`);
        }
    }

    return (
        <div className={styles.list}>
            <div className={styles.label}>
                <h1>tic-tac-toe rooms</h1>
                <p className={styles.symbol}>XO</p>
            </div>
            <div className={styles.container}>
                {games.map((game) => (
                    <GameRoom
                        key={game.gameId}
                        onClick={handleJoinGame}
                        id={game.gameId}
                        playersCount={game.players.length}
                    />
                ))}
            </div>
            <div className={styles['create-button']}>
                <CreateGameButton onClick={handleCreateGame}/>
            </div>
        </div>
    );
}

export default RoomList;
