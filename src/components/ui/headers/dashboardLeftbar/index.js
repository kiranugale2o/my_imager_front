"use client";
import { dashboardMenu } from "@/utils";
import { LogOut, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardLeftNavbar({ setPage, user }) {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div
        className="btn p-5 absolute top-[56px] right-[10px] lg:static lg:hidden "
        onClick={() => setNav(!nav)}
      >
        {nav ? <X /> : <MenuIcon />}
      </div>
      <div
        className={`${
          !nav ? "hidden" : "flex"
        } absolute  lg:static mt-[60px] lg:mt-0 w-full p-10 lg:p-0 h-[600px]  bg-white lg:bg-black lg:min-h-screen text-white lg:flex  border-r   border-gray-400 flex-col`}
      >
        <ul className="flex flex-col px-2 ">
          <strong className="  p-2 text-gray-400 ">Projects</strong>
        </ul>
        <ul className="flex flex-col px-2 p-1 border-b  border-gray-400">
          {dashboardMenu.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "Projects" ? (
                  <li className="grid-col-4">
                    <p
                      onClick={() => {
                        setPage(d?.id);
                        setNav(!nav);
                      }}
                      className="block  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-600"
                    >
                      {d.name}
                    </p>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <ul className="flex flex-col px-2 ">
          <strong className=" p-2 text-gray-400 ">Organizations</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {dashboardMenu.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "Organizations" ? (
                  <li className="grid-col-4">
                    <p
                      onClick={() => {
                        setPage(d?.id);
                        setNav(!nav);
                      }}
                      className="block  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-600"
                    >
                      {user?.organization_name}
                    </p>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b h-[1px] border-gray-400"></div>
        <ul className="flex flex-col px-2 ">
          <strong className=" p-2 text-gray-400 ">Account</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {dashboardMenu.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "Account" ? (
                  <li className="grid-col-4">
                    <p
                      onClick={() => {
                        setPage(d?.id);
                        setNav(!nav);
                      }}
                      className="block  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-600"
                    >
                      {d.name}
                    </p>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b h-[1px] border-gray-400"></div>

        <Link
          href={"/"}
          className="flex gap-2 mt-5  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-600"
        >
          Back <LogOut />
        </Link>
      </div>
    </>
  );
}
