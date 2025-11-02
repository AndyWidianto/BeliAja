
export default function ThCheckAll({ onClick } : { onClick: Function }) {

    return (
        <th className="w-[30px]">
            <div className="flex w-full items-center justify-center h-full">
                <input type="checkbox" name="" onClick={() => onClick()} className="w-[16px] h-[16px] rounded-sm" id="" />
            </div>
        </th>
    );
}