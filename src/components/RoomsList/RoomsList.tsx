import React, {useState} from 'react';
import GameRoom from '../GameRoom/GameRoom';
import CreateGameButton from '../CreateGameButton/CreateGameButton';
import styles from './RoomsList.module.css';
import { createGame } from '../../api/game-api';
import { GameResponseDto } from "../../types/dtos/game-response-dto";
import { JoinPlayerDto } from "../../types/dtos/join-player-dto";

const RoomList: React.FC = () => {
    const [game, setGame] = useState<GameResponseDto | null>(null);

    const rooms = [
        { id: 1, playersCount: 2 },
        { id: 2, playersCount: 1 },
        { id: 3, playersCount: 1 },
        { id: 4, playersCount: 1 },
        { id: 5, playersCount: 2 },
        { id: 6, playersCount: 1 },
        { id: 7, playersCount: 1 },
        { id: 8, playersCount: 1 },
    ];

    const handleCreateGame = async () => {
        try {
            const dto: JoinPlayerDto = {
                playerId: 3,
            };

            const response: GameResponseDto = await createGame(dto);
            setGame(response);
            console.log('Game created:', response);
        } catch (error) {
            console.error('Failed to create game', error);
        }
    };

    return (
        <div className={styles.list}>
            <div className={styles.label}>
                <h1>tic-tac-toe rooms</h1>
                <p className={styles.symbol}>XO</p>
            </div>
            <div className={styles.container}>
                {rooms.map((room) => (
                    <GameRoom
                        key={game?.gameId}
                        id={game?.gameId}
                        playersCount={room.playersCount}
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
