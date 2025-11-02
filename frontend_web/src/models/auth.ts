import { ApiPublic } from ".";
import type { LoginRequest, RegisterRequest, AuthResponse } from "../types";
export default class AuthModel {

    async Login(request : LoginRequest) : Promise<AuthResponse> {
        const res = await ApiPublic.post<AuthResponse>("/login", request, {
            withCredentials: true
        });
        return res.data;
    }

    async Register(request : RegisterRequest): Promise<AuthResponse> {
        const res = await ApiPublic.post<AuthResponse>("/register", request);
        return res.data;
    }
}