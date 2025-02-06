"use client";

import { usePathname } from "next/navigation";
import Header from "../headers";
import LeftNavbar from "../headers/leftbar";
import { Toaster } from "../toaster";

export default function CommonLayout({ user, children }) {
  const pathname = usePathname();
  console.log(user, "myuser");

  return (
    <div className="flex flex-col min-h-screen">
      <Header user={user} />

      <div
        className={`w-full absolute lg:w-[230px] ${
          pathname.includes("docs") ? "block" : "hidden"
        }`}
      >
        <LeftNavbar />
      </div>

      <main className="flex-grow">{children}</main>
      <Toaster />
      <footer className="bg-black text-gray-500 py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MyImager. All rights reserved.</p>
          <p className="text-sm">
            A simple solution for image uploading and management with easily.
          </p>
        </div>
      </footer>
    </div>
  );
}
