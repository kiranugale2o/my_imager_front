"use client";
import { docsItems } from "@/utils";
import {
  CalendarCog,
  ChartBarIncreasingIcon,
  ChartNoAxesCombined,
  ClipboardEditIcon,
  Code2Icon,
  Codesandbox,
  DivideSquare,
  FolderClosedIcon,
  Home,
  Image,
  LucideStepBack,
  MenuIcon,
  NotepadText,
  Settings,
  TriangleAlert,
  Tv2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import DocsCard from "@/components/ui/documents";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const imageData = {
  name: "",
  size: "",
  createdAt: "",
  updatedAt: "",
  url: "",
  type: "",
};
export default function ProjectDetailsPage() {
  const [MyContent, setContent] = useState("home");
  const [currentImgData, setCurrentImgData] = useState(imageData);

  const [nav, setNav] = useState(false);

  const ar = [1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5];

  return (
    <>
      <div
        className="btn absolute  right-[2px] text-white p-3 lg:hidden"
        onClick={() => setNav(!nav)}
      >
        <MenuIcon />
      </div>
      <div
        className={`  block lg:flex w-full    bg-black text-white min-h-screen`}
      >
        {/* Left Bar */}
        <div
          className={` leftbar w-[250px]  lg:flex flex-col border border-gray-700 bg-black min-h-screen ${
            !nav ? "hidden" : "flex"
          }  `}
        >
          <div className="flex w-full ">
            <div className="flex absolute top-1 left-[-2px] lg:left-[2px]">
              <img
                src="/logonew.png"
                className=""
                width={65}
                height={20}
                alt="logo"
              />
            </div>
            <div className="flex gap-0 mt-[-56px] ml-[30px]  ">
              <img
                src="/name.png"
                className=""
                width={200}
                height={60}
                alt="logo"
              />
            </div>
          </div>

          <ul className="flex flex-col grid gap-y-3 p-2 mt-[-40px] ">
            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("home");
                  setNav(false);
                }}
                className={`block flex gap-1 rounded-lg  hover:bg-white 
                  hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 ${
                    MyContent === "home" ? "bg-white text-gray-900" : ""
                  }`}
              >
                <Home /> Home
              </span>
            </li>
            <div className="w-full border border-gray-700" />
            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("integration");
                  setNav(false);
                }}
                className={`block flex gap-1 rounded-lg  hover:bg-white 
                  hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 ${
                    MyContent === "integration" ? "bg-white text-gray-900" : ""
                  }`}
              >
                <Codesandbox /> Project Integration
              </span>
            </li>
            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("storage");
                  setNav(false);
                }}
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 ${
                  MyContent === "storage" ? "bg-white text-gray-900" : ""
                }`}
              >
                <FolderClosedIcon /> Storage
              </span>
            </li>
            <div className="w-full border border-gray-700" />
            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("reports");
                  setNav(false);
                }}
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 ${
                  MyContent === "reports" ? "bg-white text-gray-900" : ""
                }`}
              >
                <ChartNoAxesCombined /> Reports
              </span>
            </li>
            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("docs");
                  setNav(false);
                }}
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 ${
                  MyContent === "docs" ? "bg-white text-gray-900" : ""
                }`}
              >
                <NotepadText /> Api Docs
              </span>
            </li>
            <div className="w-full border border-gray-700" />

            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("setting");
                  setNav(false);
                }}
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 ${
                  MyContent === "setting" ? "bg-white text-gray-900" : ""
                }`}
              >
                <Settings /> Project Setting
              </span>
            </li>
            <div className="w-full border border-gray-700" />
            <li className="grid-col-4">
              <Link href="/dashboard">
                <span
                  className={`block flex gap-2 rounded-lg hover:bg-white hover:text-gray-900 px-4 py-2 text-md font-medium text-gray-400 `}
                >
                  <LucideStepBack />
                  Exit
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full">
          {/* Top bar */}
          <div className="topbar w-full border-b flex lg:gap-5 border-gray-600 h-[50px]">
            <div className="organization_name text-sm text-gray-300  p-3 font-bold font-sans">
              Kiran's Organizations
            </div>
            <div className=" h-[26px] mt-3 border border-gray-600 "></div>
            <div className="project_name gap-1 lg:gap-4 flex text-sm text-gray-300  p-3 font-bold font-sans">
              studybuddy <Code2Icon />
            </div>
          </div>

          {/* Main Screen */}
          <div className="flex  p-5 lg:p-10 w-full ">
            {MyContent === "home" ? (
              <>
                <div className="flex flex-col w-full py-5 ">
                  <div className="block p-6 border-b lg:flex w-full justify-between">
                    <div className="text-3xl  font-bold font-normal font-extralight ">
                      Project Name{" "}
                    </div>
                    <div className="text-md border p-1 rounded-md border-gray-800 font-bold font-normal text-gray-600 ">
                      12 jan 2025
                    </div>
                  </div>

                  <div className="block lg:flex w-full mt-5 justify-between">
                    <div className="flex flex-col">
                      <div className="text-2xl py-10  font-bold font-normal font-light text-gray-200">
                        Welcome back, [User Name]! Ready to organize your latest
                        Project? .
                      </div>

                      <span className="text-[16px]  text-gray-300 font-sans font-extralight font-normal  ">
                        Myimager provide all access to manage your project as
                        your wish also add some more intractive features so
                        enjoy it ! MyImager is the all-in-one platform designed
                        specifically for developers to effortlessly manipulate,
                        store, and manage images. Whether you're looking to
                        resize, crop, compress, or perform complex operations on
                        images, MyImager provides a powerful and intuitive set
                        of tools to streamline your workflow.
                      </span>
                    </div>

                    <img
                      src="/project_home_ban1.png"
                      width={560}
                      height={200}
                      alt="banner1"
                    />
                  </div>
                  {/* section 2 */}
                  <div className="w-full flex">
                    <div className="w-full p-5">
                      <img src="/project_home_ban2.png" alt="banner2" />
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {MyContent === "integration" ? (
              <>
                <div className=" flex flex-col w-full lg:w-[960px] py-5">
                  <div className="text-3xl p-6 border-b font-sans fotn-extralight ">
                    Project Integration
                  </div>

                  {/* step1 */}
                  <div className="block lg:flex py-10  lg:p-5">
                    <div className="flex flex-col">
                      <div className="  border px-3 w-[35px] h-[35px] py-1 bg-gray-700 rounded-full ">
                        1
                      </div>
                      <div className="hidden lg:flex ml-4 mt-5 w-[1px] bg-gray-700 h-[130px]"></div>
                    </div>
                    <div className="ml-2  w-full text-lg lg:w-[400px] font-sans fotn-light text-gray-100">
                      First,step we can create a env.local file in your project
                      and Copy this on this env.local file so we can secure your{" "}
                      <b>PROJECT_KEY</b> and <b> MYIMAGER_CLIENT_KEY</b>.
                    </div>
                    <div className="flex mt-3 lg:mt-0 flex-col lg:w-[500px]  border rounded-lg text-gray-300">
                      <div className="p-5 grid gap-1 font-sans font-extralight">
                        {/* PROJECT_KEY Declaration */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          <span className="text-white">{`PROJECT_KEY`}</span>
                          <span className="text-red-500">{` = `}</span>
                          <span className="text-orange-500">{`"XXXXXXXXXXXXXXXXXXXXXXXXX"`}</span>
                          {`;`}
                        </code>

                        {/* MYIMAGER_CLIENT_KEY Declaration */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          <span className="text-white">{`MYIMAGER_CLIENT_KEY`}</span>
                          <span className="text-red-500">{` = `}</span>
                          <span className="text-orange-500">{`"XXXXXXXXXXXXXXXXXXXXX"`}</span>
                          {`;`}
                        </code>
                      </div>
                    </div>
                  </div>
                  {/* step2 */}
                  <div className="block lg:flex py-10  lg:p-5">
                    <div className="flex flex-col">
                      <div className="  border px-3 w-[35px] h-[35px] py-1 bg-gray-700 rounded-full ">
                        2
                      </div>
                      <div className="hidden lg:flex ml-4 mt-5 w-[1px] bg-gray-700 h-[190px]"></div>
                    </div>
                    <div className="ml-2 text-lg lg:w-[400px] font-sans fotn-light text-gray-100">
                      After , Creating env.local file and save this api keys in
                      env.local we can use all function off the MyImager. We can
                      simply call function and pass this two api keys in
                      function as arguments.
                    </div>
                    <div className="flex mt-5 lg:mt-0 ml-3 flex-col lg:w-[500px]  border rounded-lg text-gray-300">
                      <div className="p-5  grid gap-1 font-sans font-extralight">
                        {/* Import Statement */}
                        <code>
                          <span className="text-red-500">{`import `}</span>
                          <span className="text-white">{`{ uploadOnMyimagerAndGetUrl }`}</span>
                          <span className="text-red-500">{` from `}</span>
                          <span className="text-cyan-500">{`"myimager"`}</span>
                          {`;`}
                        </code>

                        {/* Function Declaration */}
                        <code>
                          <span className="text-red-500">{`function `}</span>
                          <span className="text-white">{`getImageUrl`}</span>
                          <span className="text-white">{`(event){`}</span>
                        </code>

                        {/* Variable Declaration */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          <span className="text-white">{`file = `}</span>
                          {`event.target.files[0];`}
                        </code>

                        {/* Method Call */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          <span className="text-white">{`url = `}</span>
                          <span className="text-cyan-500">{`uploadOnMyimagerAndGetUrl`}</span>
                          {`(file, `}
                          <span className="text-orange-500">{`MYIMAGER_CLIENT_KEY`}</span>
                          {`, `}
                          <span className="text-orange-500">{`PROJECT_KEY`}</span>
                          {`);`}
                        </code>

                        {/* Return Statement */}
                        <code>
                          <span className="text-red-500">{`return `}</span>
                          <span className="text-white">{`url;`}</span>
                        </code>

                        {/* Function Closing */}
                        <code>
                          <span className="text-white">{`}`}</span>
                        </code>
                      </div>
                    </div>
                  </div>

                  {/* step 3 */}
                  <div className="block lg:flex lg:p-5 py-5 lg:py-0 w-full justify-between ">
                    <div className="flex flex-col">
                      <div className="  border px-3 w-[35px] h-[35px] py-1 bg-gray-700 rounded-full ">
                        3
                      </div>
                      <div className="hidden lg:flex ml-4 mt-5 w-[1px] bg-gray-700 h-[190px]"></div>
                    </div>
                    <div className="ml-2 text-lg lg:w-[400px] font-sans fotn-light text-gray-100">
                      After call this function you can get url and store your
                      image on Your MyImager project .
                    </div>
                    <div className="flex mt-3 lg:mt-0 lg:ml-3 flex-col w-full lg:w-[500px]  border rounded-lg text-gray-300 h-[300px] overflow-scroll overflow-x-hidden">
                      <div className="p-5 grid gap-1 font-sans font-extralight ">
                        {/* Import Statement */}
                        <code>
                          <span className="text-red-500">{`import `}</span>
                          <span className="text-white">{`{ uploadOnMyimagerAndGetUrl }`}</span>
                          <span className="text-red-500">{` from `}</span>
                          <span className="text-cyan-500">{`"myimager";`}</span>
                          {`;`}
                        </code>

                        <code>
                          <span className="text-red-500">{`import `}</span>
                          <span className="text-white">{`{ useState }`}</span>
                          <span className="text-red-500">{` from `}</span>
                          <span className="text-cyan-500">{`"react";`}</span>
                          {`;`}
                        </code>

                        {/* Export Function Declaration */}
                        <code>
                          <span className="text-red-500">{`export `}</span>
                          <span className="text-red-500">{`function `}</span>
                          <span className="text-white">{`ImageGettingCard`}</span>
                          {`(){`}
                        </code>

                        {/* State Declaration */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          <span className="text-white">{`[url, setUrl]`}</span>
                          {` = useState(`}
                          <span className="text-orange-500">{`""`}</span>
                          {`);`}
                        </code>

                        {/* Function Declaration for getImageUrl */}
                        <code>
                          <span className="text-red-500">{`function `}</span>
                          <span className="text-white">{`getImageUrl`}</span>
                          <span className="text-white">{`(event){`}</span>
                        </code>

                        {/* Variable Declaration for getImageUrl */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          <span className="text-white">{`file = `}</span>
                          {`event.target.files[0];`}
                        </code>

                        {/* Method Call for getImageUrl */}
                        <code>
                          <span className="text-red-500">{`const `}</span>
                          {`url = `}
                          <span className="text-cyan-500">{`uploadOnMyimagerAndGetUrl`}</span>
                          {`(file, `}
                          <span className="text-orange-500">{`MYIMAGER_CLIENT_KEY`}</span>
                          {`, `}
                          <span className="text-orange-500">{`PROJECT_KEY`}</span>
                          {`);`}
                        </code>

                        {/* Calling setUrl */}
                        <code>
                          <span className="text-white">{`setUrl(url);`}</span>
                        </code>

                        {/* Function Return */}
                        <code>
                          <span className="text-white">{`}`}</span>
                        </code>

                        {/* JSX Code */}
                        <code>
                          <span className="text-red-500">{`return(`}</span>
                          <span className="text-white">{`<>`}</span>
                        </code>

                        {/* Label and Input Elements */}
                        <code>
                          <span className="text-red-500">{`<div  `}</span>
                          <span className="text-cyan-500">{`className="grid w-full max-w-sm items-center gap-1.5">`}</span>
                          <br />
                          <span className="text-red-500">{`<Label `}</span>
                          <span className="text-cyan-500">{`htmlFor="picture"`}</span>
                          <span className="text-red-500">{`>Picture</Label>`}</span>
                        </code>

                        <code>
                          <span className="text-red-500">{`<Input `}</span>
                          <span className="text-cyan-500">{`id="picture"`}</span>
                          <span className="text-cyan-500">{`type="file"`}</span>
                          <span className="text-cyan-500">{`onChange={getImageUrl(event)}`}</span>
                          <span className="text-red-500">{` />`}</span>
                        </code>

                        <code>
                          <span className="text-red-500">{`</div>`}</span>
                          <br />
                          <span className="text-white">{`</> ) }`}</span>
                        </code>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col  w-full">
                    <div className="text-md text-gray-500">
                      Now You Get on this type Url
                    </div>
                    <br />
                    <div className="text-md truncate p-3 text-base lg:text-lg w-full lg:p-4  text-blue-600 font-sans bg-gray-900 border rounded-lg font-extralight">
                      {`https://firebasestorage.googleapis.com/v0/b/******************/o/riched.jpeg?alt=media&token=0a6559e1-82a7-408d-95f1-3bdf4632c50f`}
                    </div>
                  </div>
                  <div className="w-full mt-10 border bg-gray-700"></div>
                  <div className="flex flex-col py-10 w-full">
                    <span className="font-sans text-2xl font-extralight">
                      Let's Do It With MyImager !
                    </span>
                    <div className="mt-5 grid gap-y-5 text-md text-gray-400 font-sans fotn-extralight text-wrap">
                      This is just an example of how to use and implement
                      MyImager in your project. By following these simple steps,
                      you can easily integrate image uploading and management
                      into your application. MyImager provides various functions
                      that you can utilize, just like the one shown above.{" "}
                      <br />
                      Whether it's uploading, resizing, or retrieving image
                      URLs, we've got you covered. With MyImager, you can store
                      and manage images seamlessly while focusing on building
                      amazing features for your users.
                      <br /> Enjoy the flexibility of easily integrating with
                      your front-end and back-end systems. We provide
                      simple-to-use APIs and a wide range of functionalities to
                      make image handling effortless. Start using MyImager today
                      and unlock a world of possibilities for managing and
                      enhancing your image workflows. Happy coding!
                    </div>
                    <div className="block p-5 lg:p-auto lg:flex w-full gap-3">
                      <div className=" w-full flex flex-col   item-center ">
                        <img
                          className="p-5   mt-8 rounded-lg shadow-lg "
                          width={300}
                          height={100}
                          src="/project_home_ban3.png"
                          alt="banner2"
                        />
                        <span className="bg-transperent ml-20 px-1 text-gray-500 border  w-[130px] border-gray-700 p-2 rounded-lg ">
                          Manage Images
                        </span>
                      </div>
                      <div className=" w-full flex flex-col   item-center ">
                        <img
                          className="p-5   mt-8 rounded-lg shadow-lg "
                          width={300}
                          height={100}
                          src="/project_home_ban3.png"
                          alt="banner2"
                        />
                        <span className="bg-transperent ml-20 px-2 text-gray-500 border  w-[130px] border-gray-700 p-2 rounded-lg ">
                          Manage Videos
                        </span>
                      </div>
                      <div className=" w-full flex flex-col   item-center ">
                        <img
                          className="p-5   mt-8 rounded-lg shadow-lg "
                          width={300}
                          height={100}
                          src="/project_home_ban3.png"
                          alt="banner2"
                        />
                        <span className="bg-transperent ml-20 px-2 text-gray-500 border  w-[130px] border-gray-700 p-2 rounded-lg ">
                          Implement AI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {MyContent === "storage" ? (
              <>
                <div className="flex flex-col w-full lg:p-5">
                  <div className="text-3xl p-6 border-b text-white font-sans fotn-extralight">
                    Storage
                  </div>
                  <div className="flex flex-col mt-10 border shadow-md w-full ">
                    <div className="flex w-full  gap-3">
                      <Table>
                        <TableHeader>
                          <TableRow className=" flex gap-24 p-2 lg:w-[500px] hover:bg-black">
                            <TableHead className="  ">Name</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">
                              Last Modified
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <div className="flex w-full p-0 ">
                          <TableBody className="w-auto max-h-[500px] overflow-auto   ">
                            {ar.map((invoice, i) => (
                              <TableRow
                                key={i}
                                className="  flex gap-10 hover:bg-gray-500"
                              >
                                <TableCell className="font-medium flex gap-1 hover:underline">
                                  <Image />
                                  imagrrrrrrrrrrrre1.png
                                </TableCell>
                                <TableCell>200.3 KB</TableCell>
                                <TableCell>image/png</TableCell>
                                <TableCell className="text-right">
                                  Dec 11,2024
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                          <div className=" absolute top-[600px] lg:static border px-10 w-[400px] lg:flex flex-col  max-h-[500px] overflow-auto">
                            <div className=" mt-5 flex text-2xl font-sans font-light text-gray-400">
                              imagrrrrrrrrrrrre1.png
                            </div>
                            <div className="mt-4 ">
                              <img
                                className="items-center justify-center"
                                src="/firebase.jpg"
                                width={200}
                                height={100}
                                alt="imagrrrrrrrrrrrre1.png"
                              />
                            </div>
                            <div className="mt-5 p-2 rounded-lg w-full  shadow-md">
                              <div className="space-y-2 text-gray-600">
                                <p>
                                  <strong>Url:</strong>
                                  <br />{" "}
                                  <a
                                    className="underline"
                                    href="https://firebasestorage.googleapis.com/v0/b/dataaa-82ae4.appspot.com/o/imagix%2F136d8518-d2a5-436f-afe6-97ec57e992a4?alt=media&token=fb1ab8e5-f3b0-4be9-b545-7799ee1badc3"
                                  >
                                    imagrrrrrrrrrrrre1.png
                                  </a>
                                </p>
                                <p>
                                  <strong>Size:</strong>
                                  <br /> metadata.size
                                </p>
                                <p>
                                  <strong>Type:</strong>
                                  <br /> metadata.type
                                </p>
                                <p>
                                  <strong>Created:</strong>
                                  <br /> metadata.created
                                </p>
                                <p>
                                  <strong>Updated:</strong> <br />
                                  metadata.updated
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Table>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {MyContent === "reports" ? (
              <div className="flex flex-col w-full">
                <div className="flex border-b p-6 text-3xl font-sans font-extralight ">
                  Project Reports
                </div>
                <StorageUsageChart />
                <ProjectAnalysisBarChart />
              </div>
            ) : null}
            {MyContent === "docs" ? (
              <>
                <DocsCard />
              </>
            ) : null}
            {MyContent === "setting" ? (
              <ProjectSetting setContent={setContent} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
//StorageUsagesChart Component
export const StorageUsageChart = () => {
  // Example storage data
  const totalStorage = 5; // Total storage in GB
  const usedStorage = 0.1; // Used storage in GB
  const remainingStorage = totalStorage - usedStorage;

  // Chart data
  const data = {
    labels: ["Used Storage", "Remaining Storage"],
    datasets: [
      {
        label: "Storage Usage (GB)",
        data: [usedStorage, remainingStorage],
        backgroundColor: ["#4CAF50", "#FFEB3B"], // Green for used, Yellow for remaining
        borderColor: ["#388E3C", "#FBC02D"], // Darker green for used, darker yellow for remaining
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Storage Usage From 5GB",
      },
    },
  };

  return (
    <div className="flex flex-col w-full">
      <div className="chart-container   p-2 lg:w-4/5 mx-auto">
        <h2 className="text-center lg:mb-4">Storage Usage Chart</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// ProjectAnalysisBarChart Component
const ProjectAnalysisBarChart = () => {
  // Example data for the project analysis
  const data = {
    labels: ["Storage Usage", "API Calls", "Uploads", "Downloads"], // The different metrics
    datasets: [
      {
        label: " Project Analysis", // Label for the chart
        data: [75, 120, 80, 95], // Example data points (you can replace these with real data)
        backgroundColor: "rgba(53, 162, 235, 0.6)", // Bar color
        borderColor: "rgba(53, 162, 235, 1)", // Border color
        borderWidth: 1, // Border width
      },
    ],
  };

  // Chart options to customize the chart behavior
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "",
      },
      tooltip: {
        callbacks: {
          // Optional: Format the tooltip text if needed
          label: (context) => {
            const value = context.raw;
            return `${value} units`; // Format the tooltip to show the unit
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Metrics", // Label for the x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: "Usage", // Label for the y-axis
        },
        min: 0, // Minimum value on the y-axis
        max: 150, // Maximum value on the y-axis
        ticks: {
          stepSize: 25, // Step size for ticks
        },
      },
    },
  };

  return (
    <div className="lg:p-6  w-full max-w-4xl mx-auto   rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

//Project Setting Component
export const ProjectSetting = ({ setContent }) => {
  const [btn, setBtn] = useState(false);
  return (
    <div className="w-full  flex flex-col ">
      <div className="text-3xl font-sans font-extralight  p-6 border-b ">
        Project Setting
      </div>
      <div className="w-full lg:w-4/5 mt-8 border rounded-lg bg-dark-gray bg-dark-blue-gray p-4 text-white ">
        <div className="block lg:flex p-5 justify-between">
          <p className="text-[15px] font-bold font-sans text-gray-500">
            Basic Setting
          </p>
          <div className="flex  flex-col w-full p-2 lg:p-0 lg:w-[500px]">
            <label
              htmlFor="project_name"
              className="font-sans p-1 text-gray-500"
            >
              Project Name
            </label>
            <input
              id="project_name"
              value={"Project name"}
              className="p-1 bg-transparent rounded-lg px-5 border border-gray-500"
            />
            <br />

            <label htmlFor="project_key" className="font-sans  text-gray-500">
              Project Api Key
            </label>
            <input
              id="project_key"
              value={"Project key"}
              className="p-1 mt-1 bg-transparent rounded-lg px-5 border border-gray-500"
            />
          </div>
        </div>
        <div className="w-full border-b bg-gray-900"></div>
        <div className="flex justify-end mt-3 gap-3">
          <div className="p-1 text-sm border rounded-lg font-bold text-gray-100">
            cancel
          </div>
          <Button
            className=" rounded-md px-2 hover:border hover:border-red-500 bg-gradient-to-r from-red-300 via-red-500 to-purple-700 font-normal  text-sm"
            disabled={false}
          >
            save
          </Button>
        </div>
      </div>

      <div className="p-3 mt-10 flex lg:w-[780px] rounded-lg border text-sm font-sans font-light justify-between">
        <div className="flex mt-1  gap-2 text-lg">
          <ChartBarIncreasingIcon />
          {"    "} Project data that contains images,videos .{" "}
        </div>

        <div
          className="border hover:bg-gray-300 hover:text-gray-900 font-sans p-2 rounded-lg  font-light"
          onClick={() => {
            setContent("storage");
          }}
        >
          view your storage
        </div>
      </div>

      <div className="p-3 mt-10 flex lg:w-[380px] rounded-lg border text-sm font-sans font-light justify-between">
        <div className="flex gap-2 mt-1 text-lg">
          <CalendarCog /> Project Created At 12 Jan 2025{". "}
        </div>
      </div>

      <div className="mt-10 flex flex-col w-full">
        <div className="flex text-xl font-sans font-bold">Project Analysis</div>
        <ProjectAnalysisBarChart />
      </div>

      <div className="mt-10 flex flex-col w-full ">
        <div className="flex text-xl font-sans font-bold">Delete Project </div>
        <div className="p-5 border mt-5 lg:w-[780px] rounded">
          <div className="flex flex-col p-3 border bg-red-700 rounded-lg border-rose-600">
            <div className="flex">
              <TriangleAlert /> If you delete this project then storage or
              database also Remove.
            </div>
            {/* <div
              onClick={setBtn(true)}
              className="mt-5 w-[60px] p-1 border border-red-900 rounded font-bold font-sans"
            >
              Delete
            </div> */}
            <Dialog>
              <DialogTrigger className="mt-5 w-[60px] p-1 border border-red-900 rounded font-bold font-sans">
                Delete
              </DialogTrigger>
              <DialogContent>
                <DialogDescription>
                  <div className="flex text-xl font-sans font-bold text-red-500">
                    <TriangleAlert /> If you delete this project then storage or
                    database also Remove.
                  </div>
                </DialogDescription>

                <DialogFooter>
                  <DialogClose>
                    <div className="flex gap-3">
                      <Button>No</Button>
                      <Button onClick={() => alert("deleter")}>Yes</Button>
                    </div>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};
