import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function Chart({ data }: any) {

    return (
        <div className="w-[70%]">
            <div className="bg-white rounded-sm p-2">
                <div className="flex justify-end gap-2 px-4">
                    <button className="bg-blue-500 p-2 px-4 rounded-md text-white">Tanggal</button>
                    <button className="bg-gray-200 p-2 px-4 rounded-md">Bulan</button>
                    <button className="bg-gray-200 p-2 px-4 rounded-md">Tahun</button>
                </div>
                <div className="overflow-x-auto scroll-hidden">
                    <div style={{ width: `${data.length * 80}px`, minWidth: "600px" }}>
                        <LineChart width={data.length * 80} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="total"
                                stroke="#3b82f6"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </div>
                </div>
            </div>
        </div>
    )
}