import { ShoppingCart } from "lucide-react";
import type React from "react";

interface CardProps {
    title: string,
    total: string,
    icon: React.ReactNode,
    message: React.ReactNode,
}
export default function Card({ title , total, icon, message } : CardProps) {
    return (
        <>
            <div className="w-full bg-white p-2 rounded-md">
                <div className="flex border-b-1 border-gray-300">
                    <div className="w-full">
                        <p className="text-sm text-gray-600">{title}</p>
                        <h2 className="text-lg font-semibold">{total}</h2>
                    </div>
                    <div className="flex items-center justify-center h-[40px] w-[40px] rounded-md bg-orange-500 text-white flex-shrink p-0">
                        {icon}
                    </div>
                </div>
                <div className="text-gray-500">
                    {message}
                </div>
            </div></>
    )
}