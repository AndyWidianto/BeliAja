import type React from "react";

interface TheadProps {
    children: React.ReactNode
}
export default function Thead({ children }: TheadProps) {

    return (
        <thead className="py-2 border-b-1 border-gray-200 rounded-md">
            {children}
        </thead>
    )
}