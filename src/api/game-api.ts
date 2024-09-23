import axiosClient from './axios-client';
import { JoinPlayerDto } from '../types/dtos/join-player-dto';
import { GameResponseDto } from '../types/dtos/game-response-dto';
import { MakeMoveDto } from '../types/dtos/make-move-dto';
import { LeaveGameDto } from '../types/dtos/leave-game-dto';

const client = axiosClient();

export const getAllGames = async () => {
    const response = await client.get('/games');

    return response.data;
};

export const getGameById = async (gameId: string) => {
    const response = await client.get(`/games/${gameId}`);

    return response.data;
};

export const createGame = async (dto: JoinPlayerDto): Promise<GameResponseDto> => {
    const response = await client.post<GameResponseDto>('/games', dto);

    return response.data;
};

export const joinGame = async (gameId: string ,dto: JoinPlayerDto): Promise<GameResponseDto> => {
    const response = await client.post<GameResponseDto>(`/games/${gameId}/join`, dto);

    return response.data;
};

export const makeMove = async (gameId: string, dto: MakeMoveDto): Promise<GameResponseDto> => {
    const response = await client.post(`/games/${gameId}/move`, dto);

    return response.data;
};

export const leaveGame = async (gameId: string, dto: LeaveGameDto): Promise<void> => {
    return await client.post(`/games/${gameId}/leave`, dto);
};
