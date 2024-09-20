import axiosClient from './axios-client';
import { JoinPlayerDto } from "../types/dtos/join-player-dto";
import { GameResponseDto } from "../types/dtos/game-response-dto";

export const getAllGames = async () => {
    const client = axiosClient();
    const response = await client.get('/games');

    return response.data;
};

export const createGame = async (dto: JoinPlayerDto): Promise<GameResponseDto> => {
    const client = axiosClient();
    const response = await client.post<GameResponseDto>('/games', dto);

    return response.data;
};

export const makeMove = async (gameId: number, position: number) => {
    const client = axiosClient();
    const response = await client.post(`/games/${gameId}/move`, { position });

    return response.data;
};