import Table from "../../../../components/table";
import Thead from "../../../../components/thead";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import type { Category, Product, ProductRequest } from "../../../../types";
import { Camera, Edit2, Trash2 } from "lucide-react";
import Td from "../../../../components/td";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import GroupTextArea from "../../../../components/GroupTextArea";
import ProductPresenter from "./productsPresenter";


const imageUrl = "https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?cs=srgb&dl=pexels-julieaagaard-2294477.jpg&fm=jpg";
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
    const [categories, setCategories] = useState<Category[]>([]);
    const [productIds, setProductIds] = useState<string[]>([]);
    const [productId, setProductId] = useState<string | undefined>();
    const [image, setImage] = useState<string>(imageUrl);
    const refImage = useRef<HTMLInputElement | null>(null);
    const presenter : ProductPresenter = new ProductPresenter({
        view: {
            setProducts: setProducts,
            setShow: setShow,
            setLoading: setLoading,
            setProduct: setProduct,
            setIsUpdate: setIsUpdate,
            setProductIds: setProductIds,
            setProductId: setProductId,
            setCategories: setCategories,
            setImage: setImage
        }
    })
    async function handleActions() {
        if (isUpdate && productId) {
            return await presenter.updateProduct(product, productId);
        }
        await presenter.createProduct(product);
    }

    useEffect(() => {
        presenter.getCategories();
        presenter.getProducts();
    }, []);
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={() => presenter.handleClose()}>
                        <div className="flex flex-col gap-1 items-center justify-center w-full">
                            <label htmlFor="Logo Url" className="font-semibold">Image</label>
                            <button type="button" onClick={() => refImage.current?.click()} className="relative group transition-all duration-500 ease">
                                <img src={image} alt="logo" className="w-20 h-20 rounded-full group-hover:brightness(70)" />
                                <div className="absolute left-1/3 text-white bottom-1/3 hidden group-hover:flex">
                                    <Camera size={30} />
                                </div>
                                <input type="file" ref={refImage} name="logo_url" id="logo" onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleChangeImage(e)} hidden />
                            </button>
                        </div>
                        <InputGroup name="Name" value={product.name} onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <GroupTextArea name="Description" value={product.description} onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleInput(e)} />
                        <select name="" id="" required className="p-2 w-full rounded-md border-1 border-gray-500">
                            <option value="">Select Category</option>
                            {categories.map(data => (
                                <option value={data.id} key={data?.id}>{data.name}</option>
                            ))}
                        </select>
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Products</h2>
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
                <Table Edit={() => presenter.handleUpdate(products, productIds, productId)} Delete={() => presenter.deleteProducts(productIds)}>
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
                                        <input type="checkbox" name="" onChange={(e: ChangeEvent<HTMLInputElement>) => presenter.handleChecked(e, data?.id)} checked={data?.checked} className="w-[16px] h-[16px] rounded-sm" id="" />
                                    </div>
                                </Td>
                                <Td>{data.name}</Td>
                                <Td>{data.category.name}</Td>
                                <Td>{data.description}</Td>
                                <Td>
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 px-3 rounded-md bg-yellow-600 text-white" onClick={() => presenter.handleUpdate(products, productIds, data?.id)}><Edit2 size={16} /></button>
                                        <button className="p-2 px-3 rounded-md bg-red-600 text-white" onClick={() => presenter.deleteProduct(data?.id)}><Trash2 size={16} /></button>
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