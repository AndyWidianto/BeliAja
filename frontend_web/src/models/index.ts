import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import type { AuthResponse, TokenPayload } from "../types";
import { jwtDecode } from "jwt-decode";

let token: string = "";

export const ApiPublic: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
});

export const ApiPrivate: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
});

export const updateToken: Function = (newToken: string) => {
    token = newToken;
}

export const Payload = () => {
    if (token === "") return null;
    const decode: TokenPayload = jwtDecode(token);
    return decode;
}

export const isToken: Function = () => {
    if (token === "") return false;
    const payload: TokenPayload | null = Payload();
    if (payload) {
        if (payload.exp / 1000 / 60 > 60) {
            return true;
        }
    }
    return false;
}

ApiPrivate.interceptors.request.use(async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    try {
        console.log("token :", token);
        config.headers.Authorization = `Bearer ${token}`;
        if (!isToken) {
            await updateAccessToken();
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (err) {
        console.error(err);
        location.href = "/login";
    }
    return config;
});

export const updateAccessToken: Function = async () => {
    try {
        const res = await ApiPublic.get("/refresh", {
            withCredentials: true
        });
        console.log(res.data);
        if (res.data.token) {
            updateToken(res.data.token);
        }
    } catch (err) {
        console.error(err);
    }
}

