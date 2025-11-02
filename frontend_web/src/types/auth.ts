
export interface LoginRequest {
    username: string,
    password: string
}

export interface RegisterRequest {
    username: string,
    email: string,
    password: string
}
export interface AuthResponse {
    token?: string,
    message: string
}

export interface TokenPayload {
    id: number,
    username: string, 
    email: string,
    role: string,
    createdAt: string,
    exp: number,
    iat: number,
}

