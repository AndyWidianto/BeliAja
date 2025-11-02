import { Grid2X2CheckIcon, Grid2X2Icon, LayoutDashboard, List, LogOut, Menu, ShoppingBag, ShoppingCart, TruckElectric, Users, Wallet2 } from "lucide-react"
import { NavLink } from "react-router-dom"

interface sidebar {
    show: boolean,
    setShow: Function
}
export default function Sidebar({ show, setShow }: sidebar) {

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
                            <li>
                                <NavLink to="/dashboard" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Dashboard' : <LayoutDashboard size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/products" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Products' : <ShoppingBag size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/variant-products" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Variant Products' : <ShoppingBag size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/categories" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Categories' : <Grid2X2Icon size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/users" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Users' : <Users size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/items" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Items' : <List size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/cart-items" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Cart Items' : <ShoppingCart size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/orders" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Orders' : <ShoppingBag size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/payment-methods" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Payment Methods' : <Wallet2 size={16} />}
                                </NavLink>
                            </li>
                            <li className="w-full">
                                <NavLink to="/dashboard/courir" end className={({ isActive }) => `${isActive ? 'bg-orange-500 text-white' : ''} transition-all duration-300 p-2 w-full block text-center rounded-md`}>
                                    {show ? 'Courier' : <TruckElectric size={16} />}
                                </NavLink>
                            </li>
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