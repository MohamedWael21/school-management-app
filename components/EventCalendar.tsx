"use client";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum.",
  },
  {
    id: 2,
    title: "lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum.",
  },
  {
    id: 3,
    title: "lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold my-4">Events</h2>
        <Image src="/moreDark.png" alt="more icon" width={20} height={20} />
      </div>{" "}
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-custom-sky even:border-t-custom-purple"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-600">{event.title}</h2>
              <span className="text-xs text-gray-300">{event.time}</span>
            </div>
            <p className="text-sm mt-2 text-gray-400">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EventCalendar;
