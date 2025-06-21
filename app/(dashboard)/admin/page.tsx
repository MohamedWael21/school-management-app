import Announcements from "@/components/Announcements";
import AttendanceChart from "@/features/admin/components/AttendanceChart";
import CountChart from "@/features/admin/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/features/admin/components/FinanceChart";
import UserCard from "@/features/admin/components/UserCard";

export default function AdminPage() {
  return (
    <section className="md:flex-row p-4 gap-4 flex flex-col">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />

          <UserCard type="teacher" />

          <UserCard type="parent" />

          <UserCard type="stuff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </section>
  );
}
