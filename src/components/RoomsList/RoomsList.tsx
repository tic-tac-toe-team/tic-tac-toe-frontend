import React from 'react';
import GameRoom from '../GameRoom/GameRoom';
import CreateGameButton from '../CreateGameButton/CreateGameButton';
import styles from './RoomsList.module.css';

const RoomList: React.FC = () => {
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

    return (
        <div className={styles.list}>
            <div className={styles.label}>
                <h1>tic-tac-toe rooms</h1>
                <p className={styles.symbol}>XO</p>
            </div>
            <div className={styles.container}>
                {rooms.map((room) => (
                    <GameRoom
                        key={room.id}
                        id={room.id}
                        playersCount={room.playersCount}
                    />
                ))}
            </div>
            <div className={styles['create-button']}>
                <CreateGameButton/>
            </div>
        </div>
    );
}

export default RoomList;