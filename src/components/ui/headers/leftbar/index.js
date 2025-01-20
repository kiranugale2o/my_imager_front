"use client";
import { docsItems } from "@/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function LeftNavbar() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="btn p-5 lg:hidden" onClick={() => setNav(!nav)}>
        <MenuIcon />
      </div>
      <div
        className={`${
          !nav ? "hidden" : "flex"
        } mt-10 lg:mt-0 w-full bg-white  lg:flex border  flex-col`}
      >
        <ul className="flex flex-col ">
          <strong className=" p-2 text-black">Getting Started</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {docsItems.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "started" ? (
                  <li key={i} className="grid-col-4">
                    <a
                      href={d?.path}
                      className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {d.name}
                    </a>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b h-[1px] "></div>
        <ul className="flex flex-col ">
          <strong className=" p-2 text-black">Installation</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {docsItems.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "installation" ? (
                  <li key={i} className="grid-col-4">
                    <a
                      href={d?.path}
                      className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {d.name}
                    </a>
                  </li>
                ) : null}
              </div>
            );
          })}
        </ul>
        <div className="w-full border-b h-[1px] "></div>
        <ul className="flex flex-col ">
          <strong className=" p-2 text-black">function</strong>
        </ul>
        <ul className="flex flex-col p-1 ">
          {docsItems.map((d, i) => {
            return (
              <div key={i}>
                {d.type === "function" ? (
                  <li key={i} className="grid-col-4">
                    <a
                      href={d?.path}
                      className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
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
