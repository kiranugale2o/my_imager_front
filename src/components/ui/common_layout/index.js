"use client";

import { usePathname } from "next/navigation";
import Header from "../headers";
import Navbar from "../headers";
import LeftNavbar from "../headers/leftbar";

export default function CommonLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <Header />
      <div
        className={`w-full absolute lg:w-[230px]     ${
          pathname.includes("docs") ? "block" : "hidden"
        }`}
      >
        <LeftNavbar />
      </div>
      <main>{children}</main>
    </>
  );
}
