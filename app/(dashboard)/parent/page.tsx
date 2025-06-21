import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
export default function ParentPage() {
  return (
    <section className="xl:flex-row p-4 gap-4 flex flex-col flex-1">
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md p-4">
          <h2 className="text-xl font-semibold">Schedule (John doe)</h2>
          <BigCalendar />
        </div>
      </div>

      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </section>
  );
}
