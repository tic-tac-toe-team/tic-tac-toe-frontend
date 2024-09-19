import React from 'react';
import GameRoom from '../GameRoom/GameRoom';
import './RoomsList.css';
import CreateGameButton from '../CreateGameButton/CreateGameButton';

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
        <div className="rooms-list">
            <h1>Game Rooms</h1>
            <div className="rooms-info">
                <CreateGameButton/>
            </div>
            <div className="rooms-container">
                {rooms.map((room) => (
                    <GameRoom
                        key={room.id}
                        id={room.id}
                        playersCount={room.playersCount}
                    />
                ))}
            </div>
        </div>
    );
}

export default RoomList;