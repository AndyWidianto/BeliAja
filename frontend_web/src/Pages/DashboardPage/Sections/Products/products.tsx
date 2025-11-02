import Table from "../../../../components/table";
import Thead from "../../../../components/thead";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import type { Product, ProductRequest } from "../../../../types";
import { Edit2, Trash2 } from "lucide-react";
import Td from "../../../../components/td";
import { useState } from "react";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import GroupTextArea from "../../../../components/GroupTextArea";
import ProductPresenter from "./productsPresenter";

export default function Products() {
    const [product, setProduct] = useState<ProductRequest>({
        name: "",
        description: "",
        category_id: ""
    });
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);
    const presenter : ProductPresenter = new ProductPresenter({
        view: {
            setProducts: setProducts,
            setShow: setShow,
            setLoading: setLoading,
            setProduct: setProduct,
            setIsUpdate: setIsUpdate
        }
    })
    async function handleActions() {
    }
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={presenter.handleClose}>
                        <InputGroup name="Name" value={product.name} onChange={presenter.handleInput} />
                        <GroupTextArea name="Description" value={product.description} onChange={presenter.handleInput} />
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Products</h2>
                    <button onClick={presenter.handleCreate} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">Create New</button>
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
                            Products
                        </h2>
                        <select name="" className="w-full p-2 rounded-md border-1 border-gray-600" id="">
                            <option value="">data</option>
                        </select>
                    </div>
                    <button className="p-2 px-5 bg-orange-600 text-white rounded-md">
                        Search
                    </button>
                </div>
                <Table>
                    <Thead>
                        <tr>
                            <ThCheckAll onClick={() => alert("Hallo")} />
                            <Th>Name</Th>
                            <Th>Category</Th>
                            <Th>Description</Th>
                            <Th className="w-30">Actions</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {products.map((data, index) => (
                            <tr className={`${(index + 1) % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                <Td>
                                    <div className="flex w-full items-center justify-center h-full">
                                        <input type="checkbox" name="" className="w-[16px] h-[16px] rounded-sm" id="" />
                                    </div>
                                </Td>
                                <Td>{data.name}</Td>
                                <Td>{data.category.name}</Td>
                                <Td>{data.description}</Td>
                                <Td>
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 px-3 rounded-md bg-yellow-600 text-white"><Edit2 size={16} /></button>
                                        <button className="p-2 px-3 rounded-md bg-red-600 text-white"><Trash2 size={16} /></button>
                                    </div>
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}