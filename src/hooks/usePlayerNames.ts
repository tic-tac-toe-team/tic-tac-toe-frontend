import { useState, useEffect } from 'react';
import { getPlayerById } from '../api/player-api';
import { PlayerResponseDto } from '../types/dtos/player-response-dto';
import { PlayerType } from '../types/player-type';

const usePlayerNames = (players: PlayerType[], playerCount: number) => {
    const [playerNames, setPlayerNames] = useState<{ [key: number]: string }>({});

    useEffect(() => {
        const fetchPlayerNames = async () => {
            const newPlayerNames: { [key: number]: string } = {};

            for (const player of players) {
                const playerData: PlayerResponseDto = await getPlayerById(player.playerId);
                newPlayerNames[player.playerId] = playerData.username;
            }

            setPlayerNames(newPlayerNames);
        };

        const hasPlayers = players.length > 0;

        if (hasPlayers) {
            fetchPlayerNames();
        }
    }, [playerCount]);

    return playerNames;
};

export default usePlayerNames;
