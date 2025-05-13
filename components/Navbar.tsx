import Image from "next/image";

const Navbar = () => {
  return (
    <section className="p-4 flex items-center justify-end md:justify-between">
      <div className="hidden md:flex gap-2  text-xs ring-[1.5px] ring-gray-300 rounded-full p-2">
        <Image src="/search.png" alt="search icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-6">
        <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center cursor-pointer">
          <Image src="/message.png" alt="message icon" width={20} height={20} />
        </div>
        <div className="w-7 h-7 relative bg-white rounded-full flex justify-center items-center cursor-pointer">
          <Image
            src="/announcement.png"
            alt="message icon"
            width={20}
            height={20}
          />
          <span className="absolute -top-3 -right-3 rounded-full w-5 h-5 text-xs flex items-center justify-center text-white bg-purple-500">
            1
          </span>
        </div>
        <div className="flex flex-col">
          <p className="text-xs leading-3 font-medium">John Doe</p>
          <span className="text-[10px] text-gray-500 text-end">Student</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar picture"
          className="rounded-full"
          width={36}
          height={36}
        />
      </div>
    </section>
  );
};
export default Navbar;
