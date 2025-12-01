import Table from "../../../components/table";
import Thead from "../../../components/thead";
import Th from "../../../components/th";
import ThCheckAll from "../../../components/thCheckAll";
import type { Product, VariantProduct, VariantProductRequest } from "../../../types";
import { Camera, Edit2, Trash2 } from "lucide-react";
import Td from "../../../components/td";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Form from "../../../components/form";
import InputGroup from "../../../components/inputGroup";
import VariantProductPresenter from "./variantProductPresenter";

const imageUrl = "";
export default function VariantProducts() {

    const [show, setShow] = useState<boolean>(false);
    const [showImage, setShowImage] = useState<string>(imageUrl);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [variantProductId, setVariantProductId] = useState<string>("");
    const [variantProductIds, setVariantProductIds] = useState<string[]>([]);
    const [variantProduct, setVariantProduct] = useState<VariantProductRequest>({
        product_id: "",
        variant_name: "",
        price: 0,
        stock: 0,
        image: null
    })
    const [variantsProduct, setVariantsProduct] = useState<VariantProduct[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const limit = 10;
    const refImage = useRef<HTMLInputElement | null>(null);
    const presenter = new VariantProductPresenter({
        view: {
            setLoading: setLoading,
            setVariantsProduct: setVariantsProduct,
            setIsUpdate: setIsUpdate,
            setShow: setShow,
            setVariantProductId: setVariantProductId,
            setVariantProductIds: setVariantProductIds,
            setPage: setPage,
            setHasMore: setHasMore,
            setVariantProduct: setVariantProduct,
            setProducts: setProducts,
            setShowImage: setShowImage
        }
    });

    async function handleActions() {
        console.log(variantProduct);
        if (isUpdate) {
            return await presenter.updateVariantProduct(variantProduct, variantProductId);
        }
        await presenter.createVariantProduct(variantProduct);
    }
    useEffect(() => {
        presenter.getVariantsProduct(limit, page);
        presenter.getProducts();
    }, []);
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={() => presenter.handleClose()}>
                        <div className="flex flex-col gap-1 items-center justify-center w-full">
                            <label htmlFor="image" className="font-semibold">Image</label>
                            <button type="button" onClick={() => refImage.current?.click()} className="relative group transition-all duration-500 ease">
                                <img src={showImage} alt="image" className="w-20 h-20 rounded-full group-hover:brightness(70)" />
                                <div className="absolute left-1/3 text-white bottom-1/3 hidden group-hover:flex">
                                    <Camera size={30} />
                                </div>
                                <input type="file" ref={refImage} name="image" id="logo" onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleChangeImage(e)} hidden />
                            </button>
                        </div>
                        <InputGroup name="Variant Name" value={variantProduct.variant_name} required onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <InputGroup name="Price" value={`${variantProduct.price}`} required onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <InputGroup name="Stock" value={`${variantProduct.stock}`} required onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <select name="product_id" id="product_id" className="p-2 px-5 rounded-md border-1" onChange={(e: ChangeEvent<HTMLSelectElement>) => presenter.handleSelect(e)}>
                            <option value="">Select Product</option>
                            {products.map(product => (
                                <option value={product?.id} key={product?.id}>{product?.name}</option>
                            ))}
                        </select>
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Variant Products</h2>
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
                                <Td>{data.variant_name}</Td>
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