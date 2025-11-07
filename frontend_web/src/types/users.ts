
export interface User {
    id: string,
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

export interface UsersResponse {
    data: User[],
    message: string
}

export interface UserResponse {
    data: User,
    message: string
}
export interface Role {
    id: number,
    name: string,
    role: string
}