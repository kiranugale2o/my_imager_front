"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
  Clipboard,
  Copy,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NextInstallation = () => {
  return (
    <div className="min-h-screen text-gray-800 ">
      {/* Header Section */}
      <header className="text-white py-6 shadow-lg border-b">
        <div className="p-2 container mx-auto text-center">
          <h1 className="bg-gradient-to-r from-red-300 via-red-500 to-purple-600 bg-clip-text text-[30px] font-extrabold text-transparent ">
            Next.js Installation and Configuration
          </h1>
          <p className="mt-2 text-lg">
            Learn how to install and configure Next.js with MyImager.
          </p>
        </div>
      </header>

      <div className="step1 flex flex-col p-5 py-10">
        <div className="flex text-white ">
          <div className="border px-3 py-1 rounded-full ">1</div>
          <div className="text-[16px] font-semibold ml-3 mt-1">
            Create project
          </div>
        </div>
        <div className="content flex ">
          <div className="border-l w-[1px] ml-4 mt-5 h-[250px] text-white"></div>
          <div className="flex flex-col mt-3 ml-6">
            <p className="text-md font-normal text-gray-200">
              Simple Start by creating a new React project using vite:
            </p>
            <div className=" border mt-8 flex flex-col w-[300px] rounded-lg bg-white text-black  lg:w-[600px]">
              <Tabs
                defaultValue="pnpm"
                className="p-2  w text-black rounded-md"
              >
                <TabsList className="bg-black text-white w-full justify-between border-b ">
                  <div className="flex">
                    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                    <TabsTrigger value="npm">npm</TabsTrigger>
                    <TabsTrigger value="yarn">yarn</TabsTrigger>
                    <TabsTrigger value="bun">bun</TabsTrigger>
                  </div>
                </TabsList>

                <TabsContent className="ml-3 p-3 text-black" value="pnpm">
                  <code>
                    pnpm create next-app@latest my-next-app <br />
                    cd my-next-app <br />
                    pnpm install
                  </code>
                </TabsContent>
                <TabsContent className="ml-3 p-3 text-black" value="npm">
                  <code>
                    npx create-next-app@latest my-next-app <br /> cd my-next-app{" "}
                    <br /> npm install
                  </code>
                </TabsContent>
                <TabsContent className="ml-3 p-3 text-black" value="yarn">
                  <code>
                    yarn create next-app my-next-app <br /> cd my-next-app{" "}
                    <br /> yarn
                  </code>
                </TabsContent>
                <TabsContent className="ml-3 p-3 text-black" value="bun">
                  <code>
                    bun create next my-next-app <br /> cd my-next-app <br /> bun
                    install
                  </code>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* step2 */}
      <div className="step1 flex flex-col p-5 py-0">
        <div className="flex ">
          <div className="border px-3 py-1 text-white rounded-full ">2</div>
          <div className="text-[16px] text-white font-semibold ml-3 mt-1">
            Install myimager in your project
          </div>
        </div>
        <div className="content flex ">
          <div className="border-l w-[1px] ml-4 mt-1 h-[190px] text-white"></div>
          <div className="flex flex-col mt-3 ml-6">
            <p className="text-md font-normal text-gray-300 ">
              install myimager package :
            </p>
            <div className=" border mt-8 flex flex-col rounded-lg w-[300px] bg-white text-white lg:w-[600px]">
              <Tabs defaultValue="pnpm" className="p-2  rounded-md">
                <TabsList className="bg-black text-white w-full justify-between border-b ">
                  <div className="flex">
                    <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                    <TabsTrigger value="npm">npm</TabsTrigger>
                    <TabsTrigger value="yarn">yarn</TabsTrigger>
                    <TabsTrigger value="bun">bun</TabsTrigger>
                  </div>
                </TabsList>

                <TabsContent className="ml-3 p-3 text-black" value="pnpm">
                  <code>pnpm add myimager</code>
                </TabsContent>
                <TabsContent className="ml-3 p-3 text-black" value="npm">
                  <code>npm i myimager</code>
                </TabsContent>
                <TabsContent className="ml-3 p-3 text-black" value="yarn">
                  <code> yarn add myimager</code>
                </TabsContent>
                <TabsContent className="ml-3 p-3 text-black" value="bun">
                  <code>bun add myimager</code>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* step 3 */}
      <div className="step1 flex flex-col p-5 py-0">
        <div className="flex ">
          <div className="border px-3 py-1 text-white rounded-full ">3</div>
          <div className="text-[16px]  text-white font-semibold ml-3 mt-1">
            Declare MyImager Environment Variables
          </div>
        </div>
        <div className="content flex ">
          <div className="border-l w-[1px] ml-4 mt-1 h-[190px] text-white"></div>
          <div className="flex flex-col mt-3 ml-6">
            <p className="text-md font-normal text-gray-300 ">
              Rename .env.example to .env.local and pass this two Variables to
              the myimager functions:
            </p>
            <div className=" border mt-8 bg-white text-black rounded-lg flex flex-col w-[300px] lg:w-[600px]">
              <code className="p-5">
                MYIMAGER_CLIENT_KEY={"<Your MYIMAGER_CLIENT_KEY>"}
                <br />
                MYIMAGER_PROJECT_KEY={"<Your MYIMAGER_PROJECT_KEY>"}
              </code>
            </div>
          </div>
        </div>
      </div>
      {/* step 4 */}

      <div className="step1 flex flex-col p-5 py-0">
        <div className="flex ">
          <div className="border px-3 py-1 text-white rounded-full ">4</div>
          <div className="text-[16px] font-semibold ml-3 mt-1 text-white">
            Final Steps
          </div>
        </div>
        <div className="content flex ">
          <div className="border-l w-[1px] ml-4 mt-1 h-[300px] text-white"></div>
          <div className="flex flex-col mt-3 ml-6">
            <p className="text-md font-normal text-gray-300 ">
              After complet this two steps we can use all function provided by
              myimager:
            </p>
            <div className=" border mt-8 rounded-lg flex flex-col w-[300px] bg-white  lg:w-[600px]">
              <code className="p-5 lg:p-10 rounded-lg bg-white text-black break-keep whitespace-pre-wrap overflow-scroll h-[400px]">
                {` import {sendOnMyimager} from "myimager";
 import { useState } from "react";

 export default function FileUpload() {
 // State to store the uploaded file
 const [file, setFile] = useState(null);
 const[url,setUrl]=useState("");
 // Handler to update state when file is selected
 const handleFileChange = (event) => {
 const fileInput = event.target.files[0];
    if (fileInput) {
      setFile(fileInput); // Set the selected file in the state
      sendOnMyimager(file,MyImager_Client_Key,Project_Key)
    }
  };

// Optionally, display the file name or other file properties
 return (
  <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">File Upload</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {file && (
        <div className="mt-4">
          <p className="text-lg">
            <strong>File Selected:</strong> {file.name}
          </p>
          <p className="text-sm text-gray-500">
            Size: {Math.round(file.size / 1024)} KB
          </p>
        </div>
      )}
    </div>
  );
}
`}
              </code>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between mt-5">
        <Link href="/docs" className="text-white">
          <ArrowLeft size={40} />
        </Link>
        <Link href="/docs/vite" className="text-white">
          <ArrowRight size={40} />
        </Link>
      </div>
    </div>
  );
};

export default NextInstallation;
