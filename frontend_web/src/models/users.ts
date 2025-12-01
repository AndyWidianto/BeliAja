import type { AxiosResponse } from "axios";
import type { DeleteResponse, UserRequest, UserResponse, UsersResponse } from "../types";
import { ApiPrivate } from ".";

export default class UsersModel {

    async getUsers(): Promise<UsersResponse> {
        const res: AxiosResponse = await ApiPrivate.get<UsersResponse>(`/users`);
        return res.data;
    }
    async createUser(request: UserRequest): Promise<UserResponse> {
        const res: AxiosResponse = await ApiPrivate.post<UserResponse>("/user", request);
        return res.data;
    }
    async updateUser(id: string, request: UserRequest): Promise<UserResponse> {
        const res: AxiosResponse = await ApiPrivate.post<UserResponse>(`/user/${id}`, request);
        return res.data;
    }
    async deleteUser(id: string): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.delete<DeleteResponse>(`/user/${id}`);
        return res.data;
    }
    async deleteUsers(ids: string[]): Promise<DeleteResponse> {
        const res: AxiosResponse = await ApiPrivate.post<DeleteResponse>("/delete/users", { ids });
        return res.data;
    }
}