"use client";
import Image from "next/image";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#fae27c",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#c3ebfa",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <Image src="/moreDark.png" alt="more icon" width={20} height={20} />
      </div>
      <div className="w-full h-[75%] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] lg:w-[30px] lg:h-[30px] 2xl:w-[50px] 2xl:h-[50px] ">
          <Image
            src="/maleFemale.png"
            width={50}
            height={50}
            alt="male and female"
            className="max-w-full max-h-full"
          />
        </div>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 rounded-full bg-custom-sky" />
          <h3 className="font-bold">1,234</h3>
          <h4 className="text-xs text-gray-500">Boys {"50 %"}</h4>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 rounded-full bg-custom-yellow" />
          <h3 className="font-bold">1,353</h3>
          <h4 className="text-xs text-gray-500">Girls {"80 %"}</h4>
        </div>
      </div>
    </div>
  );
};
export default CountChart;
