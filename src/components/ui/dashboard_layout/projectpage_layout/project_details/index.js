"use client";
import { docsItems } from "@/utils";
import {
  ChartNoAxesCombined,
  ClipboardEditIcon,
  Code2Icon,
  Codesandbox,
  FolderClosedIcon,
  Home,
  LucideStepBack,
  MenuIcon,
  NotepadText,
  Settings,
  Tv2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProjectDetailsPage() {
  const [MyContent, setContent] = useState("home");
  const [nav, setNav] = useState(false);
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
          className={` leftbar w-[250px]  lg:flex flex-col border border-gray-700  min-h-screen ${
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
            <div className="flex gap-0 mt-[-56px] ml-[30px] ">
              <img src="/name.png" width={200} height={60} alt="logo" />
            </div>
          </div>

          <ul className="flex flex-col grid gap-y-3 p-2 mt-[-40px] ">
            <li className="grid-col-4">
              <span
                onClick={() => {
                  setContent("home");
                  setNav(false);
                }}
                className="block flex gap-2 rounded-lg  px-4 py-2 text-md font-medium text-white bg-gray-800"
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
                  hover:text-black px-4 py-2 text-md font-medium text-gray-400 ${
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
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-black px-4 py-2 text-md font-medium text-gray-400 ${
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
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-black px-4 py-2 text-md font-medium text-gray-400 ${
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
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-black px-4 py-2 text-md font-medium text-gray-400 ${
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
                className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-black px-4 py-2 text-md font-medium text-gray-400 ${
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
                  className={`block flex gap-2 rounded-lg  hover:bg-white hover:text-black px-4 py-2 text-md font-medium text-gray-400 `}
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
          <div className="topbar w-full border flex lg:gap-5 border-gray-700 h-[50px]">
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
                  <div className="block lg:flex w-full justify-between">
                    <div className="text-3xl  font-bold font-normal font-extralight ">
                      Project Name{" "}
                    </div>
                    <div className="text-md border p-1 rounded-md border-gray-800 font-bold font-normal text-gray-600 ">
                      12 jan 2025
                    </div>
                  </div>

                  <div className="block lg:flex w-full mt-5 justify-between">
                    <div className="flex flex-col">
                      <div className="text-2xl py-10  font-bold font-normal font-light text-gray-600">
                        Welcome back, [User Name]! Ready to organize your latest
                        Project? .
                      </div>

                      <span className="text-[16px]  text-gray-500 font-sans font-extralight font-normal  ">
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
                  <div className="text-2xl font-sans fotn-extralight ">
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
            {MyContent === "storage" ? <>storage</> : null}
            {MyContent === "reports" ? <>Reports</> : null}
            {MyContent === "docs" ? <>Docs</> : null}
            {MyContent === "setting" ? <>Setting</> : null}
          </div>
        </div>
      </div>
    </>
  );
}
