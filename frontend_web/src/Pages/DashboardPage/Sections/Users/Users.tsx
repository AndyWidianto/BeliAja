import Table from "../../../../components/table";
import Thead from "../../../../components/thead";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import type { User, UserRequest } from "../../../../types";
import { Edit2, Trash2 } from "lucide-react";
import { useState } from "react";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import GroupTextArea from "../../../../components/GroupTextArea";

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
    const users: User[] = [
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
        { id: 1, username: "Andy", email: "andy@gmail.com", role: "admin" },
    ];

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
    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const name = e.target.name;
        setUser((prev: UserRequest) => ({
            ...prev,
            [name]: value
        }));
    }
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={handleClose}>
                        <InputGroup name="Username" value={user.username} onChange={handleInput} />
                        <InputGroup name="Username" value={user.email} onChange={handleInput} />
                        <InputGroup name="Username" value={user.password} onChange={handleInput} />
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
                        SEARCH
                    </button>
                </div>
                <Table>
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
                                        <button className="p-2 px-3 rounded-md bg-yellow-600 text-white"><Edit2 size={16} /></button>
                                        <button className="p-2 px-3 rounded-md bg-red-600 text-white"><Trash2 size={16} /></button>
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