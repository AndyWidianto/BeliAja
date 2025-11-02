import { ChevronLeft, ChevronRight } from "lucide-react"
import type React from "react"

interface TableProps { 
    children: React.ReactNode,
    className?: string,
    Edit?: Function,
    Delete?: Function
}
export default function Table({ children, className, Edit, Delete } : TableProps) {

    function handleEdit(e : React.MouseEvent) {
        if (Edit) {
            Edit(e);
        }
    }

    function handleDelete(e : React.MouseEvent) {
        if (Delete) {
            Delete(e);
        }
    }
    return (
        <div className="bg-white p-2 rounded-sm overflow-x-auto">
            <table className={`${className ? className : 'table-auto'} w-full`}>
                {children}
            </table>
            <div className="flex justify-between p-2 pr-10">
                <div className="flex items-center gap-3 text-white">
                    <button onClick={handleEdit} className="p-2 px-4 rounded-md bg-yellow-500">Edit</button>
                    <button onClick={handleDelete} className="p-2 px-4 rounded-md bg-red-600">Delete</button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-1">
                        <div className="w-10"></div>
                        <button className="p-1 border-1 rounded-sm border-gray-300">
                            <ChevronLeft size={16} />
                        </button>
                        <div className="p-1">1</div>
                        <button className="p-1 border-1 rounded-sm border-gray-300">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                    <p>halaman dari 1-6 halaman</p>
                </div>
            </div>
        </div>
    )
}