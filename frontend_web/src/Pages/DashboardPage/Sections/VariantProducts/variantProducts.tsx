import Table from "../../../../components/table";
import Thead from "../../../../components/thead";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import type { VariantProduct } from "../../../../types";
import { Edit2, Trash2 } from "lucide-react";
import Td from "../../../../components/td";

export default function VariantProducts() {


    const products: VariantProduct[] = [
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
        { id: 1, product: { id: 1, name: "hanphone 16 pro max", description: "andy@gmail.com", category: { id: "1", name: "categori", description: "" } }, name_variant: "hanphone 16 pro max xl", sku: "HP16", stock: 14, price: 1500000 },
    ];


    return (
        <>
            {/* {show ?
                <>
                    <Form name="Create Categories" onSubmit={handleActions} isUpdate={isUpdate} loading={loading} Close={handleClose}>
                        <InputGroup name="Name" value={category.name} onChange={handleUpdateCategory} />
                        <GroupTextArea name="Description" value={category.description} onChange={handleUpdateCategory} />
                    </Form>
                </> : <></>} */}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Variant Products</h2>
                    <button onClick={() => {}} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">Create New</button>
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
                            <Th>Product</Th>
                            <Th>Category</Th>
                            <Th>SKU</Th>
                            <Th>Stock</Th>
                            <Th>Price</Th>
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
                                <Td>{data.name_variant}</Td>
                                <Td>{data.product.name}</Td>
                                <Td>{data.product.category.name}</Td>
                                <Td>{data.sku}</Td>
                                <Td>{data.stock}</Td>
                                <Td>{data.price}</Td>
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