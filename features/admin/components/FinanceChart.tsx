"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <Image src="/moreDark.png" alt="more icon" width={20} height={20} />
      </div>{" "}
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={20} />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "20px" }}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#C3ebfa"
              activeDot={{ r: 8 }}
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="#cfceff"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default FinanceChart;
