import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

const axiosClient = (token: string | null = null): AxiosInstance => {
    const headers = token
        ? {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
        : {
            "Content-Type": "multipart/form-data",
        };

    const client = axios.create({
        baseURL: "http://localhost:3000",
        headers,
        withCredentials: false,
    });

    client.interceptors.request.use((config: any) => {
        const token = 'localStorage.getItem("ACCESS_TOKEN")';
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
