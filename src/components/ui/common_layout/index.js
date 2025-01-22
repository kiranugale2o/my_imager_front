"use client";

import { usePathname } from "next/navigation";
import Header from "../headers";
import Navbar from "../headers";
import LeftNavbar from "../headers/leftbar";
import DashboardLeftNavbar from "../headers/dashboardLeftbar";
import DashboardTopbar from "../headers/dashboardTopbar.js";

export default function CommonLayout({ user, children }) {
  const pathname = usePathname();
  console.log(user, "myuser");

  return (
    <>
      <Header user={user} />
      <div
        className={`w-full absolute lg:w-[230px]     ${
          pathname.includes("docs") ? "block" : "hidden"
        }`}
      >
        <LeftNavbar />
      </div>

      <main>{children}</main>
      <footer className="bg-black text-gray-500 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MyImager. All rights reserved.</p>
          <p className="text-sm">
            A simple solution for image uploading and management.
          </p>
        </div>
      </footer>
    </>
  );
}
