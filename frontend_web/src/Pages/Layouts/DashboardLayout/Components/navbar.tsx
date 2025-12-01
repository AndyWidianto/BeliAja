import { Bell, Search, Settings } from "lucide-react";

export default function Navbar() {

    return (
        <>
            <header className="flex gap-5 items-center justify-between pr-10 pl-5 sticky top-0 bg-gray-50 rounded-lg">
                <div className="">
                    <h2 className="text-lg font-semibold">Hallo, Sarah</h2>
                    <p className="text-sm">today in monday,20 october 2025</p>
                </div>
                <div className="flex items-center gap-1">
                        <form className="flex items-center w-80 relative m-2">
                            <input type="text" name="search" className="p-2 border-1 w-full border-gray-300 rounded-l-md focus:border-blue-500" id="search" />
                            <button className="bg-gray-300 rounded-r-md h-full p-[11px]">
                                <Search size={20} />
                            </button>
                        </form>
                    <button className="rounded-md p-2">
                        <Bell size={20} />
                    </button>
                    <button className="rounded-md p-2">
                        <Settings size={20} />
                    </button>
                </div>
            </header>
        </>
    )
}