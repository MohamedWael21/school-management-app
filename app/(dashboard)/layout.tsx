import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  h-screen">
      <aside className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-1/6 p-4 overflow-auto scrollbar">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School</span>
        </Link>
        <Menu />
      </aside>
      <main className="md:w-[92%] lg:w-[84%] w-5/6 xl:w-5/6 bg-[#f7f8fa] overflow-auto scrollbar flex flex-col">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
