import type React from "react";

interface Props {
    className?: string,
    children?: React.ReactNode
}

export default function Td({ className, children }: Props) {
    return (
        <>
        <td className={`py-1 border-b-1 border-gray-200 md:p-0 p-1 ${className}`}>{children}</td>
        </>
    );
}