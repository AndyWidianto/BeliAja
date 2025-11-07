import Table from "../../../../components/table";
import Thead from "../../../../components/thead";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import type { Role, User, UserRequest } from "../../../../types";
import { Edit2, Trash2 } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import UsersPresenter from "./usersPresenter";

export default function Users() {
    const [user, setUser] = useState<UserRequest>({
        username: "",
        password: "",
        email: "",
        role: ""
    });
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>("");
    const [userIds, setUserIds] = useState<string[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const roles: Role[] = [
        { id: 1, name: "Admin", role: "admin" },
        { id: 2, name: "Super Admin", role: "super_admin" },
        { id: 3, name: "User", role: "user" }
    ]
    const presenter = new UsersPresenter({
        view: {
            setLoading: setLoading,
            setUserId: setUserId,
            setUsers: setUsers,
            setUserIds: setUserIds,
            setShow: setShow,
            setIsUpdate: setIsUpdate,
            setUser: setUser
        }
    });
    function handleCreate() {
        setUser({
            username: "",
            password: "",
            email: "",
            role: ""
        });
        setIsUpdate(false);
        setShow(true);
    }
    function handleClose() {
        setShow(false);
    }
    async function handleActions() {
    }
    useEffect(() => {
        presenter.getUsers();
    }, []);
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={handleClose}>
                        <InputGroup name="Username" value={user.username} onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <InputGroup name="Email" value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <InputGroup name="Password" value={user.password} onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <select name="role" id="role" className="p-2 rounded-md px-4 border-1">
                            <option value="">Select Role</option>
                            {roles.map(role => (
                                <option value={role.role} key={role.id} selected={role.role === user.role}>{role.name}</option>
                            ))}
                        </select>
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Users</h2>
                    <button onClick={handleCreate} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">Create New</button>
                </div>
                <div className="flex justify-around items-end gap-5 mt-5">
                    <div className="w-full">
                        <h2 className="text-sm font-semibold">
                            What are you looking for?
                        </h2>
                        <input type="text" name="" className="w-full p-2 rounded-md border-1 border-gray-600" id="" />
                    </div>
                    <div className="w-80">
                        <h2 className="text-sm font-semibold">
                            categories
                        </h2>
                        <select name="" className="w-full p-2 rounded-md border-1 border-gray-600" id="">
                            <option value="">data</option>
                        </select>
                    </div>
                    <div className="w-80">
                        <h2 className="text-sm font-semibold">
                            Users
                        </h2>
                        <select name="" className="w-full p-2 rounded-md border-1 border-gray-600" id="">
                            <option value="">data</option>
                        </select>
                    </div>
                    <button className="p-2 px-5 bg-orange-600 text-white rounded-md">
                        Search
                    </button>
                </div>
                <Table Edit={() => presenter.handleUpdate(users, userIds)}>
                    <Thead>
                        <tr>
                            <ThCheckAll onClick={() => alert("Hallo")} />
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th className="w-30">Actions</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {users.map((data, index) => (
                            <tr className={`${(index + 1) % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                <td className="py-1 border-b-1 border-gray-200">
                                    <div className="flex w-full items-center justify-center h-full">
                                        <input type="checkbox" name="" className="w-[16px] h-[16px] rounded-sm" id="" />
                                    </div>
                                </td>
                                <td className="py-1 border-b-1 border-gray-200">{data.username}</td>
                                <td className="py-1 border-b-1 border-gray-200">{data.email}</td>
                                <td className="py-1 border-b-1 border-gray-200">{data.role}</td>
                                <td className="py-1 border-b-1 border-gray-200">
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 px-3 rounded-md bg-yellow-600 text-white" onClick={() => presenter.handleUpdate(users, userIds, data?.id)}><Edit2 size={16} /></button>
                                        <button className="p-2 px-3 rounded-md bg-red-600 text-white" onClick={() => {}}><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}