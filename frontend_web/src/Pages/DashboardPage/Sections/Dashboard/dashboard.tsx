import { ShoppingCart, Users2 } from "lucide-react";
import Chart from "../../../../components/chart";
import Card from "../../../../components/card";

interface data {
    name: string,
    total: number
}
export default function Dashboard() {

    const data : data[] = [
        { name: "senin" , total: 300 },
        { name: "selasa" , total: 10 },
        { name: "rabu" , total: 40 },
        { name: "kamis" , total: 500 },
        { name: "minggu" , total: 230 },
        { name: "senin" , total: 333 },
        { name: "selasa" , total: 130 },
        { name: "rabu" , total: 330 },
        { name: "kamis" , total: 200 },
        { name: "jumat" , total: 334 },
        { name: "sabtu" , total: 360 },
        { name: "senin" , total: 300 },
        { name: "selasa" , total: 10 },
        { name: "rabu" , total: 40 },
        { name: "kamis" , total: 500 },
        { name: "minggu" , total: 230 },
        { name: "senin" , total: 333 },
        { name: "selasa" , total: 130 },
        { name: "rabu" , total: 330 },
        { name: "kamis" , total: 200 },
        { name: "jumat" , total: 334 },
        { name: "sabtu" , total: 360 },
        { name: "senin" , total: 300 },
        { name: "selasa" , total: 10 },
        { name: "rabu" , total: 40 },
        { name: "kamis" , total: 500 },
        { name: "minggu" , total: 230 },
        { name: "senin" , total: 333 },
        { name: "selasa" , total: 130 },
        { name: "rabu" , total: 330 },
        { name: "kamis" , total: 200 },
        { name: "jumat" , total: 334 },
        { name: "sabtu" , total: 360 },
    ]
    return (
        <>
        <div className="flex flex-col gap-4 p-4">
            <div className="flex justify-around gap-4">
                <Chart data={data} />
                <div className="flex flex-col gap-3 w-full">
                    <Card title={"Total Orders"} total="200" icon={<ShoppingCart size={20} />} message={
                        <>orders <span className="text-green-500">+2%</span> dari bulan lalu</>
                    } />
                    <Card title={"Total Customers"} total="10000" icon={<Users2 size={20} />} message={
                        <>Customer <span className="text-green-500">+2%</span> dari bulan lalu</>
                    } />
                    <Card title={"Total Customers"} total="10000" icon={<Users2 size={20} />} message={
                        <>Customer <span className="text-green-500">+2%</span> dari bulan lalu</>
                    } />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="h-50 border-1"></div>
                <div className="h-50 border-1"></div>
            </div>
        </div>
        </>
    )
}