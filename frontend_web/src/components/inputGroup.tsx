
interface InputGroupProps {
    name: string,
    onChange: Function,
    value: string
}
export default function InputGroup({ name, onChange, value } : InputGroupProps) {

    return (
        <>
            <div className="grid grid-cols-1">
                <label htmlFor={name} className="text-sm font-semibold">{name}</label>
                <input type="text" name={name.toLowerCase()} defaultValue={value} id={name.toLowerCase()} onChange={(e) => onChange(e)} className="w-full p-2 rounded-md border-1 border-gray-500" />
            </div>
        </>
    );
}