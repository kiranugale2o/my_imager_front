"use client";
import { dashboardMenu } from "@/utils";
import { LogOut, MenuIcon } from "lucide-react";
import { useState } from "react";

export default function DashboardLeftNavbar({ setPage }) {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div
        className="btn p-5 absolute top-[56px] right-[10px] lg:static lg:hidden "
        onClick={() => setNav(!nav)}
      >
        <MenuIcon />
      </div>
      <div
        className={`${
          !nav ? "hidden" : "flex"
        } mt-10 lg:mt-0 w-full bg-black min-h-screen text-white lg:flex  border-r   border-gray-800 flex-col`}
      >
        <ul className="flex flex-col px-2 ">
          <strong className="  p-2 text-gray-400 ">Projects</strong>
        </ul>
        <ul className="flex flex-col px-2 p-1 border-b  border-gray-800">
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
                      className="block  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-500"
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
                      className="block  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-500"
                    >
                      {d.name}
                    </p>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b h-[1px] border-gray-800"></div>
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
                      className="block  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-500"
                    >
                      {d.name}
                    </p>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b h-[1px] border-gray-800"></div>

        <button className="flex gap-2 mt-5  hover:text-gray-300 px-4 py-2 text-md font-medium text-gray-500">
          Log Out <LogOut />
        </button>
      </div>
    </>
  );
}
