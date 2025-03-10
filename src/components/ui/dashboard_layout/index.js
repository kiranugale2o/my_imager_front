"use client";
import { useState } from "react";
import DashboardLeftNavbar from "../headers/dashboardLeftbar";
import DashboardTopbar from "../headers/dashboardTopbar.js";
import LeftNavbar from "../headers/leftbar";
import ProjectPageLayout from "./projectpage_layout";
import OrganizationLayout from "./organization_page";
import AccessTokenPage from "./access_token_page";
import SettingsPage from "./security_page";

export default function DashboardLayout({ user, project }) {
  const [Mypage, setPage] = useState("project");

  return (
    <>
      <div
        className="bg-black 
 text-white flex flex-col"
      >
        <div className="flex  w-full">
          <DashboardTopbar mypage={Mypage} />
        </div>
        <div className="flex w-full">
          <div className="flex   lg:static w-auto lg:w-[250px] ">
            <DashboardLeftNavbar setPage={setPage} user={user} />
          </div>
          <div className="flex  w-full p-5 lg:w-[900px]">
            {Mypage === "project" ? (
              <div className="flex">
                <ProjectPageLayout user={user} project={project} />
              </div>
            ) : null}
            {Mypage === "Organizations" ? (
              <div className="flex">
                <OrganizationLayout user={user} />
              </div>
            ) : null}
            {Mypage === "Account" ? (
              <div className="flex">Account page</div>
            ) : null}

            {Mypage === "Security" ? (
              <div className="flex w-full">
                <SettingsPage />
              </div>
            ) : null}
            {Mypage === "Access_Tokens" ? (
              <div className="flex">
                <AccessTokenPage user={user} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
