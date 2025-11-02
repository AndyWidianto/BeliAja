import { useState } from "react";
import Table from "../../../../components/table";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import Thead from "../../../../components/thead";
import type { PaymentMethod, PaymentMethodRequest } from "../../../../types";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import GroupTextArea from "../../../../components/GroupTextArea";
import { Edit2, Trash2 } from "lucide-react";

export default function PaymentMethods() {

    const [show, setShow] = useState<boolean>(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodRequest>({
        name: "",
        provider: "",
        logo_url: "",
        description: "",
        is_active: false,
        type: ""
    })
    const paymentMethods: PaymentMethod[] = [
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
        { id: 1, name: "BCA", type: "bank_transfer", provider: "bca", description: "Teknologi terus berkembang pesat dan membawa perubahan besar dalam berbagai aspek kehidupan manusia. Dari cara kita berkomunikasi hingga bagaimana bisnis dijalankan, inovasi digital telah menjadi bagian penting dari peradaban modern. Kecerdasan buatan, komputasi awan, dan Internet of Things (IoT) menjadi beberapa contoh teknologi yang mendorong efisiensi, kemudahan, serta peluang baru di berbagai sektor. Transformasi ini tidak hanya menciptakan kenyamanan, tetapi juga tantangan bagi individu dan organisasi untuk terus beradaptasi dengan perubahan.", is_active: true, logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8jDZyFseRpKC5HAeNqInUF96uCUpjzApWQnnRsORNt_1zd8YwrWz7vw-lyGjJ4awtvw&usqp=CAU" },
    ];

    function handleShortDescription(description: string) {
        if (description.length > 60) {
            return `${description.slice(0, 60)}...`
        }
        return description;
    }

    function handleClose() {
        setShow(false);
    }
    function hanldeShow() {
        setShow(true);
    }
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" loading={false} Close={handleClose}>
                        <InputGroup value={paymentMethod.name} name="Name" onChange={() => { }} />
                        <InputGroup value={paymentMethod.name} name="Type" onChange={() => { }} />
                        <InputGroup value={paymentMethod.name} name="Provider" onChange={() => { }} />
                        <InputGroup value={paymentMethod.name} name="Logo Url" onChange={() => { }} />
                        <select name="" id="" className="w-full p-2 rounded-md">
                            <option value="true">Active</option>
                            <option value="false">No Active</option>
                        </select>
                        <GroupTextArea value={paymentMethod.description} name="Description" onChange={() => { }} />
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Users</h2>
                    <button onClick={hanldeShow} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">CREATE NEW</button>
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
                            <Th>Logo</Th>
                            <Th>Type</Th>
                            <Th>Provider</Th>
                            <Th>Description</Th>
                            <Th>Active</Th>
                            <Th className="w-30">Actions</Th>
                        </tr>
                    </Thead>
                    <tbody>
                        {paymentMethods.map((data, index) => (
                            <tr className={`${(index + 1) % 2 === 0 ? 'bg-gray-100' : ''}`}>
                                <td><div className="flex w-full items-center justify-center h-full">
                                    <input type="checkbox" name="" className="w-[16px] h-[16px] rounded-sm" id="" />
                                </div>
                                </td>
                                <td className="py-1 border-b-1 border-gray-200">{data.name}</td>
                                <td className="py-1 border-b-1 border-gray-200"><div className="text-blue-600">logo</div></td>
                                <td className="py-1 border-b-1 border-gray-200">{data.type}</td>
                                <td className="py-1 border-b-1 border-gray-200">{data.provider}</td>
                                <td className="py-1 border-b-1 border-gray-200">{handleShortDescription(data.description)}</td>
                                <td className="py-1 border-b-1 border-gray-200">{data.is_active ? <><div className="text-green-600">Active</div></> :
                                    <><div className="text-red-600">Not Active</div></>}</td>
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