import { X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState, type FormEventHandler } from "react";
import Loading from "./loading";

interface FormProps {
    name: string,
    className?: string,
    children: React.ReactNode,
    Close: Function,
    loading: boolean,
    onSubmit?: Function,
    isUpdate?: boolean
}

export default function Form({ name, className, children, Close, loading, onSubmit, isUpdate }: FormProps) {

    const refModal = useRef<HTMLFormElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function handleClickOutSide(e: MouseEvent) {
        if (refModal.current && !refModal.current.contains(e.target as Node)) {
            setIsOpen(false);
            setTimeout(() => Close(), 250);
        }
    }
    function handleClose() {
        setIsOpen(false);
        setTimeout(() => Close(), 250);
    }

    function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
        return () => document.removeEventListener("mousedown", handleClickOutSide);
    }, []);
    return (
        <>
            <div className="fixed left-0 top-0 w-full h-full bearer-modal"></div>
            <div className={`fixed left-0 w-full top-0 h-full transition-all duration-300 animate-in ease-out ${isOpen ? '' : '-translate-y-20 opacity-50'} overflow-auto scroll-hidden`}>
                <div className="flex items-center justify-center p-4 space-y-5 w-full">
                    <form action="" ref={refModal} onSubmit={handleSubmit} className={`${className ? className : 'w-full md:w-1/2'} grid grid-cols-1 gap-4 p-4 rounded-md bg-white shadow-md`}>
                        <div className="relative w-full">
                            <button type="button" onClick={handleClose} className="absolute right-0 p-2"><X size={16} /></button>
                        </div>
                        <h2 className="my-4 text-2xl font-semibold text-center">{name}</h2>
                        {children}
                        <div className="flex justify-end gap-3">
                            <button type="button" className="p-2 px-5 rounded-md border-1 border-gray-400">cancel</button>
                            <button type="submit" className="flex justify-center gap-2 p-2 px-5 rounded-md bg-orange-500 text-white">
                                {loading ? <Loading /> : <></>}
                                {isUpdate ? "Update" : "Create"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}