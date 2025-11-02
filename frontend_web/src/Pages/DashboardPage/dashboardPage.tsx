import { useState } from "react"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/navbar";
import { Outlet } from "react-router-dom";

export default function DashboardPage() {
    const [showSide, setShowSide] = useState<boolean>(true);

    function handleShowSide() {
        setShowSide(!showSide);
    }
    return (
        <>
            <Sidebar show={showSide} setShow={handleShowSide} />
            <div className="flex justify-end w-full p-2">
                <div className={`${showSide ? 'w-[calc(100%-240px)]' : 'w-[calc(100%-35px)]'} bg-gray-50 transition-all rounded-l-lg duration-300 ease`}>
                    <Navbar />
                    <Outlet />
                    <footer>hallo</footer>
                </div>
            </div>
        </>
    )
}