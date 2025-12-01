import { Grid2X2Icon, LayoutDashboard, LogOut, Menu, ShoppingBag, Users, Wallet2 } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import { Payload } from "../../../../models";

interface Props {
    show: boolean,
    setShow: Function
}
interface SideBar {
    id: number,
    name: string,
    url: string,
    icon: React.ReactNode
}
export default function Sidebar({ show, setShow }: Props) {

    const [sideBars, setSideBars] = useState<SideBar[]>([
        { id: 1, url: "/dashboard", name: "Dashboard", icon: <LayoutDashboard size={16} /> },
        { id: 2, url: "/dashboard/users", name: "Users", icon: <Users size={16} /> },
        { id: 3, url: "/dashboard/categories", name: "Categories", icon: <Grid2X2Icon size={16} /> },
        { id: 4, url: "/dashboard/products", name: "Products", icon: <ShoppingBag size={16} /> },
        { id: 5, url: "/dashboard/variant-products", name: "Variant Product", icon: <ShoppingBag size={16} /> },
        { id: 6, url: "/dashboard/payment-methods", name: "Payment Method", icon: <Wallet2 size={16} /> }
    ]);
    const payload = Payload();
    function handleSideBar() {
        if (payload?.role !== "super_admin") {
            const newSideBars = sideBars.filter(side => side.name !== "User");
            setSideBars(newSideBars);
        }
    }
    useEffect(() => {
        handleSideBar();
    });
    return (
        <>
            <div className={`fixed left ${show ? 'w-60' : 'w-10'} h-full transition-all duration-300 ease overflow-hidden`}>
                <ul className="relative h-full">
                    <li className={`absolute top-0 right-0`}>
                        <button onClick={() => setShow()} className="p-2">
                            <Menu size={20} />
                        </button>
                    </li>
                    <li className="h-5"></li>
                    <li className="w-full text-2xl text-center mt-2 font-semibold">
                        <div className="h-10">
                            {show ? 'Beli  Aja' : ''}
                        </div>
                    </li>
                    <li className="h-5"></li>
                    <li className="flex w-full justify-center">
                        <div className="w-15 h-15">
                            <img src="https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475.png" className={`rounded-full object-cover ${show ? 'w-15 h-15' : 'w-10 h-10'}`} alt="" />
                        </div>
                    </li>
                    {show ? <li className="flex flex-col items-center h-15">
                        <h2>Andy Widianto</h2>
                        <p className="text-sm">andy@gmail.com</p>
                    </li> : <div className="h-15" />}
                    <li>
                        <ul className={`overflow-y-scroll h-84 scroll-hidden ${show ? 'p-2 px-4 ' : 'p-1'}`}>
                            {sideBars.map(side => (
                                <li>
                                    <NavLink to={side.url} end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                        {show ? side.name : side.icon}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={`absolute left-0 bottom-2 bg-white w-full border-t-1 border-gray-200 ${show ? 'p-2' : 'p-1'}`}>
                        <button className="bg-red-600 rounded-md text-white p-2 w-full">
                            {show ? 'Logout' : <LogOut size={16} />}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}