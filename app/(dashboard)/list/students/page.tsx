import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  class: string;
  grade: number;
  address: string;
};
const columns = [
  { header: "Info", accessor: "info" },
  {
    header: "Student Id",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "actions", accessor: "action" },
];

export default function StudentListPage() {
  const renderRow = (student: Student) => {
    return (
      <tr
        key={student.studentId}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-custom-purple-light"
      >
        <td className="flex items-center gap-4 p-4">
          <Image
            src={student.photo}
            width={40}
            height={40}
            alt="personal photo"
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{student.name}</h3>
            <p className="text-sm text-gray-500">{student.class}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{student.studentId}</td>
        <td className="hidden md:table-cell">{student.grade}</td>
        <td className="hidden md:table-cell">{student.phone}</td>
        <td className="hidden lg:table-cell">{student.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/students/${student.studentId}`}>
              <button className="w-7 h-7 flex items-center rounded-full justify-center bg-custom-sky">
                <Image src="/view.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="w-7 h-7 flex items-center rounded-full justify-center bg-custom-purple">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <section className="bg-white rounded-md flex-1 p-4 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold  hidden md:block">All Students</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-yellow">
              <Image
                src="/filter.png"
                alt="filter icon"
                width={14}
                height={14}
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-yellow">
              <Image src="/sort.png" alt="plus icon" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-custom-yellow">
                <Image src="/plus.png" alt="plus icon" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      <Table<Student>
        columns={columns}
        renderRow={renderRow}
        data={studentsData}
      />

      <Pagination />
    </section>
  );
}
