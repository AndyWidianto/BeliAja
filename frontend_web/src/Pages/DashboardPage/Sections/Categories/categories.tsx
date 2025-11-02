import { useEffect, useState, type ChangeEvent } from "react";
import Table from "../../../../components/table";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import Thead from "../../../../components/thead";
import type { CategoryRequest, Category } from "../../../../types";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import GroupTextArea from "../../../../components/GroupTextArea";
import CategoriesPresenter from "./categoriesPresenter";
import { Edit2, Trash2 } from "lucide-react";

export default function Categories() {
    const [show, setShow] = useState<boolean>(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [listCategories, setListCategories] = useState<string[]>([]);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [category, setCategory] = useState<CategoryRequest>({
        name: "",
        description: ""
    });

    const presenter: CategoriesPresenter = new CategoriesPresenter({
        view: {
            setLoading: setLoading,
            setCategories: setCategories,
            setCategory: setCategory,
            setListCategories: setListCategories,
            setIsUpdate: setIsUpdate,
            setShow: setShow
        }
    });

    async function handleActions(isUpdate : boolean) {
        if (isUpdate) {
            return await presenter.updateCategory(category, listCategories[0]);
        }
        await presenter.createCategory(category);
    }

    useEffect(() => {
        presenter.getCategories();
    }, []);
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={presenter.handleClose}>
                        <InputGroup name="Name" value={category.name} onChange={(e : ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <GroupTextArea name="Description" value={category.description} onChange={(e : ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Categories</h2>
                    <button onClick={() => presenter.handleCreate()} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">Create New</button>
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
                            Categories
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
                <Table Edit={() => presenter.handleEdit(categories, listCategories[0])}>
                    <Thead>
                        <tr>
                            <ThCheckAll onClick={() => alert("Hallo")} />
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th className="w-30">Actions</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {categories.map((data, index) => (
                            <tr className={`${(index + 1) % 2 !== 0 ? 'bg-gray-100' : ''}`} key={data?.id}>
                                <td className="py-1 border-b-1 border-gray-200">
                                    <div className="flex w-full items-center h-full">
                                        <input type="checkbox" name="" checked={data?.checked} onChange={(e) => presenter.handleAddList(e, data?.id)} className="w-[16px] h-[16px] rounded-sm" id="" />
                                    </div>
                                </td>
                                <td className="py-1 border-b-1 border-gray-200">{data?.name}</td>
                                <td className="py-1 border-b-1 border-gray-200">{presenter.handleShortDescription(data?.description)}</td>
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
            </div >
        </>
    );
}