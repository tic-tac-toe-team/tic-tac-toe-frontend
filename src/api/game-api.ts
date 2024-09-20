import axiosClient from './axios-client';

export const getAllGames = async () => {
    const client = axiosClient();
    const response = await client.get('/games');

    return response.data;
};

export const createGame = async (playerId: number) => {
    const client = axiosClient();
    const response = await client.post('/games', { playerId });

    return response.data;
};

export const makeMove = async (gameId: number, position: number) => {
    const client = axiosClient();
    const response = await client.post(`/games/${gameId}/move`, { position });

    return response.data;
};