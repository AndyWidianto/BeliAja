import { useEffect, useRef, useState, type ChangeEvent } from "react";
import Table from "../../../../components/table";
import Th from "../../../../components/th";
import ThCheckAll from "../../../../components/thCheckAll";
import Thead from "../../../../components/thead";
import type { PaymentMethod, PaymentMethodRequest, Status } from "../../../../types";
import Form from "../../../../components/form";
import InputGroup from "../../../../components/inputGroup";
import GroupTextArea from "../../../../components/GroupTextArea";
import { Camera, Edit2, Trash2 } from "lucide-react";
import PaymentMethodPresenter from "./paymentMethodPresenter";

const logo = "https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?cs=srgb&dl=pexels-julieaagaard-2294477.jpg&fm=jpg";

export default function PaymentMethods() {

    const [show, setShow] = useState<boolean>(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethodRequest>({
        name: "",
        provider: "",
        logo_url: null,
        description: "",
        is_active: "",
        type: ""
    });
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
    const [logoUrl, setLogoUrl] = useState<string>(logo);
    const [loading, setLoading] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [paymentMethodIds, setPaymentMethodIds] = useState<string[]>([]);
    const [paymentMethodId, setPaymentMethodId] = useState<string>("");
    const refLogoUrl = useRef<HTMLInputElement | null>(null);
    const status: Status[] = [
        { id: 1, name: "Not Active", active: "0" },
        { id: 2, name: "Active", active: "1" }
    ]

    const presenter = new PaymentMethodPresenter({
        view: {
            setPaymentMethods: setPaymentMethods,
            setLoading: setLoading,
            setPaymentMethodIds: setPaymentMethodIds,
            setPaymentMethodId: setPaymentMethodId,
            setIsUpdate: setIsUpdate,
        }
    })

    function handleShortDescription(description: string) {
        if (description.length > 60) {
            return `${description.slice(0, 60)}...`
        }
        return description;
    }

    function handleClose() {
        setShow(false);
    }
    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setPaymentMethod(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setPaymentMethod(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
        const image: File | undefined = (e.target as HTMLInputElement).files?.[0];
        if (image) {
            setPaymentMethod(prev => ({
                ...prev,
                logo_url: image
            }));
            const urlImage = URL.createObjectURL(image);
            setLogoUrl(urlImage);
        }
    }
    async function handleActions() {
        if (isUpdate) {
            return await presenter.updatePaymentMethod(paymentMethod, paymentMethodId);
        }
        await presenter.createPaymentMethod(paymentMethod);
    }
    function handleCreate() {
        setShow(true);
        setIsUpdate(false);
        setPaymentMethodId("");
        setPaymentMethod({
            name: "",
            provider: "",
            logo_url: null,
            description: "",
            is_active: "",
            type: ""
        });
        setLogoUrl(logo);
    }
    function handleUpdate(id?: string) {
        setShow(true);
        setIsUpdate(true);
        if (!id) {
            id = paymentMethodIds[0];
        }
        const findPaymentMethod = paymentMethods.find((val: PaymentMethod) => val.id === id);
        if (findPaymentMethod) {
            setPaymentMethod({
                name: findPaymentMethod.name,
                provider: findPaymentMethod.provider,
                logo_url: null,
                description: findPaymentMethod.description,
                is_active: findPaymentMethod.is_active ? "1" : "0",
                type: findPaymentMethod.type
            });
            setLogoUrl(findPaymentMethod.logo_url);
        }
        setPaymentMethodId(id);
    }
    function handleChecked(e: ChangeEvent<HTMLInputElement>, id: string) {
        const checked = e.target.checked;
        if (checked) {
            const paymentMethod = paymentMethods.find(val => val.id === id);
            if (paymentMethod) {
                return setPaymentMethodIds((prev: string[]) => [...prev, id]);
            }
        }
        setPaymentMethodIds(prev => prev.filter(val => val === id));
    }
    useEffect(() => {
        presenter.getPaymentMethods();
    }, []);
    return (
        <>
            {show ?
                <>
                    <Form name="Create Categories" loading={loading} isUpdate={isUpdate} Close={handleClose} onSubmit={handleActions}>
                        <div className="flex flex-col gap-1 items-center justify-center w-full">
                            <label htmlFor="Logo Url" className="font-semibold">Logo</label>
                            <button type="button" onClick={() => refLogoUrl.current?.click()} className="relative group transition-all duration-500 ease">
                                <img src={logoUrl} alt="logo" className="w-20 h-20 rounded-full group-hover:brightness(70)" />
                                <div className="absolute left-1/3 text-white bottom-1/3 hidden group-hover:flex">
                                    <Camera size={30} />
                                </div>
                                <input type="file" ref={refLogoUrl} name="logo_url" id="logo" onChange={handleChangeImage} hidden />
                            </button>
                        </div>
                        <InputGroup value={paymentMethod.name} name="Name" onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)} />
                        <InputGroup value={paymentMethod.type} name="Type" onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)} />
                        <InputGroup value={paymentMethod.provider} name="Provider" onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)} />
                        <select name="is_active" id="" className="w-full p-2 rounded-md rounded-1 rounded-gray-500" onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelect(e)}>
                            <option value="">Select Status</option>
                            {status.map(val => (
                                <option value={val.active} key={val.id} selected={val.active === paymentMethod.is_active}>{val.name}</option>
                            ))}
                        </select>
                        <GroupTextArea value={paymentMethod.description} name="Description" onChange={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)} />
                    </Form>
                </> : <></>}
            <div className="p-2 grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Users</h2>
                    <button onClick={handleCreate} className="p-2 px-5 rounded-md bg-orange-600 text-white text-sm">CREATE NEW</button>
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
                <Table Edit={() => handleUpdate()} Delete={() => presenter.deletePaymentMethods(paymentMethodIds)}>
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
                            <tr className={`${(index + 1) % 2 === 0 ? 'bg-gray-100' : ''}`} key={data?.id}>
                                <td><div className="flex w-full items-center justify-center h-full">
                                    <input type="checkbox" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChecked(e, data?.id)} name="" className="w-[16px] h-[16px] rounded-sm" id="" />
                                </div>
                                </td>
                                <td className="py-1 border-b-1 border-gray-200">{data?.name}</td>
                                <td className="py-1 border-b-1 border-gray-200">
                                    <div className="flex items-center justify-start w-full h-full">
                                        <img src={data?.logo_url} alt={data.name} className="h-10 w-10 rounded-md" />
                                    </div>
                                </td>
                                <td className="py-1 border-b-1 border-gray-200">{data?.type}</td>
                                <td className="py-1 border-b-1 border-gray-200">{data?.provider}</td>
                                <td className="py-1 border-b-1 border-gray-200">{handleShortDescription(data?.description)}</td>
                                <td className="py-1 border-b-1 border-gray-200">{data?.is_active ? <><div className="text-green-600">Active</div></> :
                                    <><div className="text-red-600">Not Active</div></>}</td>
                                <td className="py-1 border-b-1 border-gray-200">
                                    <div className="flex items-center gap-1">
                                        <button className="p-2 px-3 rounded-md bg-yellow-600 text-white" onClick={() => handleUpdate(data?.id)}><Edit2 size={16} /></button>
                                        <button className="p-2 px-3 rounded-md bg-red-600 text-white" onClick={() => presenter.deletePaymentMethod(data?.id)}><Trash2 size={16} /></button>
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