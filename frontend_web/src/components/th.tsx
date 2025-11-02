
interface Props {
    children: React.ReactNode,
    className?: string
}
export default function Th({ children, className } : Props) {

    return (
        <th className={`text-start p-1 md:p-0 py-2 ${className}`}>{children}</th>
    );
}