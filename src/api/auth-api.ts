import axiosClient from './axios-client';

interface RegisterRequest {
    username: string;
    password: string;
}

interface RegisterResponse {
    id: number;
    username: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    id: number;
    username: string;
    accessToken: string;
}

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