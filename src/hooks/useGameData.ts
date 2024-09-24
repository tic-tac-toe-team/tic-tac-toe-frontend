import { useState, useEffect } from 'react';
import { GameResponseDto } from '../types/dtos/game-response-dto';
import { getGameById } from '../api/game-api';

const useGameData = (gameId: string | undefined) => {
    const [game, setGame] = useState<GameResponseDto | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchGame = async () => {
            try {
                if (gameId) {
                    const response: GameResponseDto = await getGameById(gameId);

                    if (isMounted) {
                        setGame(response);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch game', error);
            }
        };

        fetchGame();

        const interval = setInterval(fetchGame, 1000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [gameId]);

    return game;
};

export default useGameData;
