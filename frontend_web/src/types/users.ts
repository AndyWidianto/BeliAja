
export interface User {
    id: number,
    username: string,
    email: string,
    role: string
}

export interface UserRequest {
    username: string,
    email: string,
    password: string,
    role: string
}

export interface UserResponse {
    data: User[],
    message: string
}