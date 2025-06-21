"use client";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.DAY);
  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  const getEarliestStartDate = () => {
    if (!calendarEvents.length) return new Date();
    return new Date(
      Math.min(
        ...calendarEvents.map((event) => new Date(event.start).getTime())
      )
    );
  };
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      defaultDate={getEarliestStartDate()}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};
export default BigCalendar;
