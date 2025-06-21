import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex gap-2  text-xs ring-[1.5px] ring-gray-300 rounded-full p-2">
      <Image src="/search.png" alt="search icon" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent focus:outline-none"
      />
    </div>
  );
};
export default TableSearch;
