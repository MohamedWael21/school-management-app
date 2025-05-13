import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <section className="md:flex p-4">
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />

          <UserCard type="teacher" />

          <UserCard type="parent" />

          <UserCard type="stuff" />
        </div>
      </div>
      <div className="w-full lg:w-1/3"></div>
    </section>
  );
}
