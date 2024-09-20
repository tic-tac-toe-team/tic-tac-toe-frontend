import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

const axiosClient = (token: string | null = null): AxiosInstance => {
    const headers = token
        ? {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
        : {
            'Content-Type': 'application/json',
        };

    const client = axios.create({
        baseURL: "http://localhost:3000",
        headers,
        withCredentials: false,
    });

    client.interceptors.request.use((config: any) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFubmEiLCJzdWIiOjMsImlhdCI6MTcyNjgzOTY0NCwiZXhwIjoxNzI2OTI2MDQ0fQ.2pjjq5kOPg9KcClwx9hgWEvp8RDDUoZPS4ri1C8Iwek';
        config.headers = config.headers || {};
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    client.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError) => {
            const { response } = error;
            if (response?.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            }
            throw error;
        }
    );

    return client;
};

export default axiosClient;
