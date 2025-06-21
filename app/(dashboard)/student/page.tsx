import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
export default function StudentPage() {
  return (
    <section className="xl:flex-row p-4 gap-4 flex flex-col">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h2 className="text-xl font-semibold">Schedule(4A)</h2>
          <BigCalendar />
        </div>
      </div>

      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </section>
  );
}
