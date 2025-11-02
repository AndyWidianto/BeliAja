
interface GroupTextAreaProps {
    name: string,
    onChange: Function,
    value: string
}
export default function GroupTextArea({ name, onChange, value } : GroupTextAreaProps) {
    return (
        <>
            <div className="grid grid-cols-1">
                <label htmlFor={name} className="text-sm font-semibold">{name}</label>
                <textarea name={name.toLowerCase()} defaultValue={value} id={name.toLowerCase()} onChange={(e) => onChange(e)} className={`w-full h-20 p-2 rounded-md border-1 border-gray-500`}></textarea>
            </div>
        </>
    );
}