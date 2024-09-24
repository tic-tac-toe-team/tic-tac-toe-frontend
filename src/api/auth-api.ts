import axiosClient from './axios-client';
import {RegisterRequest} from "../types/dtos/register-request-dto";
import {RegisterResponse} from "../types/dtos/register-response-dto";
import {LoginRequest} from "../types/dtos/login-request-dto";
import {LoginResponse} from "../types/dtos/login-response-dto";

export const register = async (data: RegisterRequest): Promise<RegisterResponse> => {
    const client = axiosClient();
    const response = await client.post<RegisterResponse>('/auth/register', data);

    return response.data;
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
    const client = axiosClient();
    const response = await client.post<LoginResponse>('/auth/login', data);

    return response.data;
};