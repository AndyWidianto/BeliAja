
interface InputGroupProps {
    name: string,
    onChange: Function,
    value: string,
    required?: boolean
}
export default function InputGroup({ name, onChange, value, required } : InputGroupProps) {

    function handleName(name: string) {
        const nameSplit = name.split(" ");
        if (!nameSplit) {
            return name.toLowerCase()
        }
        const newName = name.replace(/\s+/g, "_");
        return newName;
    }
    return (
        <>
            <div className="grid grid-cols-1">
                <label htmlFor={name} className="text-sm font-semibold">{name}</label>
                <input type="text" name={handleName(name)} defaultValue={value} id={name.toLowerCase()} required={required ? required : false} onChange={(e) => onChange(e)} className="w-full p-2 rounded-md border-1 border-gray-500" />
            </div>
        </>
    );
}