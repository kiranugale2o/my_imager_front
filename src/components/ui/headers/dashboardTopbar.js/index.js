"use client";
import { usePathname } from "next/navigation";

export default function DashboardTopbar({ mypage }) {
  const pathname = usePathname();

  let result = pathname.substring(1);

  return (
    <>
      <div className="border-b w-full flex border-gray-400 ">
        <div className="flex  text-[18px] border-gray-200 p-3 text-gray-200 w-[248px] ">
          Dashboard
        </div>

        <div className="hidden lg:flex border-r w-[1px] border-gray-400 h-[50px]"></div>
        <div className="hidden lg:flex text-[15px] font-bold text-gray-200 p-3">
          {mypage === "project" ? "Project" : "Kiran's Orgainization"}
        </div>
      </div>
    </>
  );
}
