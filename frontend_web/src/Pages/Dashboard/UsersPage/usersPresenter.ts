import type { ChangeEvent } from "react";
import UsersModel from "../../../models/users";
import type { DeleteResponse, User, UserRequest, UserResponse, UsersResponse } from "../../../types";

interface Props {
    view: View
}
interface View {
    setLoading: Function,
    setUsers: Function,
    setUserId: Function,
    setUserIds: Function,
    setUser: Function,
    setShow: Function,
    setIsUpdate: Function
}
const usersModel = new UsersModel();

export default class UsersPresenter {
    #view;
    constructor({ view }: Props) {
        this.#view = view;
    }
    async getUsers(): Promise<void> {
        try {
            const res: UsersResponse = await usersModel.getUsers();
            console.log(res);
            this.#view.setUsers(res.data);
        } catch (err) {
            console.error(err);
        }
    }
    async createUser(request: UserRequest): Promise<void> {
        this.#view.setLoading(true);
        try {
            console.log(request);
            const res: UserResponse = await usersModel.createUser(request);
            console.log(res);
            this.#view.setUsers((prev: User[]) => [res.data, ...prev]);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async updateUser(id: string, request: UserRequest): Promise<void> {
        this.#view.setLoading(true);
        try {
            const res: UserResponse = await usersModel.updateUser(id, request);
            console.log(res);
            this.#view.setUsers((prev: User[]) => prev.map(val => {
                if (val.id === id) {
                    val = res.data;
                }
                return { ...val };
            }))
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
    async deleteUser(id: string): Promise<void> {
        if (!confirm("Apakah anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await usersModel.deleteUser(id);
            console.log(res.message);
            this.#view.setUsers((prev: User[]) => prev.filter(val => val.id !== id));
        } catch (err) {
            console.error(err);
        }
    }
    async deleteUsers(ids: string[]): Promise<void> {
        if (!confirm("Apakah anda yakin ingin menghapusnya?")) return;
        try {
            const res: DeleteResponse = await usersModel.deleteUsers(ids);
            console.log(res);
            this.getUsers();
        } catch (err) {
            console.error(err);
        }
    }
    handleInput(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        this.#view.setUser((prev: UserRequest) => ({
            ...prev,
            [name]: value
        }));
    }
    handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        const name = e.target.name;
        this.#view.setUser((prev: UserRequest) => ({
            ...prev,
            [name]: value
        }));
    }
    handleUpdate(users: User[], ids: string[], id?: string) {
        this.#view.setShow(true);
        this.#view.setIsUpdate(true);
        if (id) {
            const findUser: User | undefined = users.find(user => user.id === id);
            if (findUser) {
                this.#view.setUserId(id);
                return this.#view.setUser({
                    username: findUser.username,
                    email: findUser.email,
                    role: findUser.role,
                    password: ""
                });
            }
        }
        const findUser: User | undefined = users.find(user => user.id === ids[0]);
        if (findUser) {
            this.#view.setUser({
                username: findUser.username,
                email: findUser.email,
                role: findUser.role,
                password: ""
            });
            this.#view.setUserId(ids[0])
        }
    }
    handleCreate() {
        this.#view.setUser({
            username: "",
            password: "",
            email: "",
            role: ""
        });
        this.#view.setIsUpdate(false);
        this.#view.setShow(true);
    }
    handleChecked(id: string) {
        this.#view.setUserIds((prev: string) => [...prev, id]);
    }
}