import Table from "../../../../components/table";
import Thead from "../../../../components/thead";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import type { VariantProduct, VariantProductRequest } from "../../../../types";
import { Edit2, Trash2 } from "lucide-react";
import Td from "../../../../components/td";
import { useEffect, useState, type ChangeEvent } from "react";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import VariantProductPresenter from "./variantProductPresenter";

export default function VariantProducts() {

    const [show, setShow] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [variantProductId, setVariantProductId] = useState<string>("");
    const [variantProductIds, setVariantProductIds] = useState<string[]>([]);
    const [variantProduct, setVariantProduct] = useState<VariantProductRequest>({
        product_id: "",
        name_variant: "",
        sku: "",
        price: 0,
        stock: 0
    })
    const [variantsProduct, setVariantsProduct] = useState<VariantProduct[]>([]);
    const presenter = new VariantProductPresenter({
        view: {
            setLoading: setLoading,
            setVariantsProduct: setVariantsProduct,
            setIsUpdate: setIsUpdate,
            setShow: setShow,
            setVariantProductId: setVariantProductId,
            setVariantProductIds: setVariantProductIds
        }
    });

    async function handleActions() {
        if (isUpdate) {
            return await presenter.updateVariantProduct(variantProduct, variantProductId);
        }
        await presenter.createVariantProduct(variantProduct);
    }
    function handleClose() {
        setShow(false);
    }
    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setVariantProduct((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    function handleUpdate() {

    }
    useEffect(() => {
        presenter.getVariantsProduct();
    }, []);
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={handleClose}>
                        <InputGroup name="Name Variant" value={variantProduct.name_variant} required onChange={handleInput} />
                        <InputGroup name="Price" value={`${variantProduct.price}`} required onChange={handleInput} />
                        <InputGroup name="Stock" value={`${variantProduct.stock}`} required onChange={handleInput} />
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Variant Products</h2>
                    <button onClick={() => { }} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">Create New</button>
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
                <Table Edit={() => presenter.handleUpdate(variantsProduct, variantProductIds, variantProductId)} Delete={() => presenter.deleteVariantsProduct(variantProductIds)}>
                    <Thead>
                        <tr>
                            <ThCheckAll onClick={() => alert("Hallo")} />
                            <Th>Name</Th>
                            <Th>Product</Th>
                            <Th>Category</Th>
                            <Th>SKU</Th>
                            <Th>Stock</Th>
                            <Th>Price</Th>
                            <Th className="w-30">Actions</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {variantsProduct.map((data, index) => (
                            <tr className={`${(index + 1) % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                <Td>
                                    <div className="flex w-full items-center justify-center h-full">
                                        <input type="checkbox" name="" className="w-[16px] h-[16px] rounded-sm" id="" />
                                    </div>
                                </Td>
                                <Td>{data.name_variant}</Td>
                                <Td>{data.product.name}</Td>
                                <Td>{data.product.category.name}</Td>
                                <Td>{data.sku}</Td>
                                <Td>{data.stock}</Td>
                                <Td>{data.price}</Td>
                                <Td>
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 px-3 rounded-md bg-yellow-600 text-white" onClick={() => presenter.handleUpdate(variantsProduct, variantProductIds, variantProductId)}><Edit2 size={16} /></button>
                                        <button className="p-2 px-3 rounded-md bg-red-600 text-white" onClick={() => presenter.deleteVariantProduct(data.id)}><Trash2 size={16} /></button>
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