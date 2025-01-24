"use client";
import { docsItems } from "@/utils";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function LeftNavbar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div
        className="btn text-white p-5 absolute lg:static top-[70px] right-[10px] lg:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <X /> : <MenuIcon />}
      </div>
      <div
        className={`${
          !nav ? "hidden" : "flex"
        } mt-20 lg:mt-20 w-full min-h-screen  lg:flex border-r border-gray-700 bg-black  flex-col`}
      >
        <ul className="flex flex-col ">
          <strong className=" p-2 text-white">Getting Started</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {docsItems.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "started" ? (
                  <li key={i} className="grid-col-4">
                    <a
                      href={d?.path}
                      className="block rounded-lg hover:bg-white hover:text-black px-4 py-2 text-sm font-medium text-white"
                    >
                      {d.name}
                    </a>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b border-gray-700 h-[1px] "></div>
        <ul className="flex flex-col ">
          <strong className=" p-2 text-white">Installation</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {docsItems.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "installation" ? (
                  <li key={i} className="grid-col-4">
                    <a
                      href={d?.path}
                      className="block rounded-lg hover:bg-white hover:text-black px-4 py-2 text-sm font-medium text-white"
                    >
                      {d.name}
                    </a>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b border-gray-700 h-[1px] "></div>
        <ul className="flex flex-col ">
          <strong className=" p-2 text-white">function</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {docsItems.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "function" ? (
                  <li key={i} className="grid-col-4">
                    <a
                      href={d?.path}
                      className="block rounded-lg  hover:bg-white hover:text-black px-4 py-2 text-sm font-medium text-white"
                    >
                      {d.name}
                    </a>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
  div;
}
