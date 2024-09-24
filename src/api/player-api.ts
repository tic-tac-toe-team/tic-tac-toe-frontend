import axiosClient from './axios-client';
import { PlayerResponseDto } from '../types/dtos/player-response-dto';

const client = axiosClient();

export const getPlayerById = async (id: number): Promise<PlayerResponseDto> => {
    const response = await client.get(`/players/${id}`);

    return response.data;

};

export const getAllPlayers = async (): Promise<PlayerResponseDto[]> => {
    const response = await client.get('/players');

    return response.data;
};