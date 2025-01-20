import { javascriptDocs } from "@/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JsInstallation() {
  return (
    <>
      <div className="min-h-screen  text-gray-800">
        {/* Header Section */}
        <header className="bg-gray-300 text-black p-5 py-6 shadow-lg">
          <div className="container mx-auto text-center">
            <h1 className="bg-gradient-to-r from-red-300 via-red-500 to-purple-600 bg-clip-text text-[30px] font-extrabold text-transparent ">
              Javascript Installation and Configuration
            </h1>
            <p className="mt-2 text-lg">
              Learn how to install and configure Javascript with MyImager.
            </p>
          </div>
        </header>

        <div className="step1 flex flex-col p-5 py-10">
          <div className="flex ">
            <div className="border px-3 py-1 bg-gray-200 rounded-full ">1</div>
            <div className="text-[16px] font-semibold ml-3 mt-1">
              Install MyImager
            </div>
          </div>
          <div className="content flex ">
            <div className="border-l w-[1px] ml-4 mt-1 h-[170px] bg-gray-200"></div>
            <div className="flex flex-col mt-3 ml-6">
              <p className="text-md font-normal ">
                Simply install myimager using npm :
              </p>
              <div className=" border mt-8 bg-black text-white rounded-md flex flex-col w-[300px]  lg:w-[600px]">
                <code className="p-5">npm i myimager</code>
              </div>
            </div>
          </div>
        </div>

        <div className="step1 flex flex-col p-5 py-0">
          <div className="flex ">
            <div className="border px-3 py-1 bg-gray-200 rounded-full ">2</div>
            <div className="text-[16px] font-semibold ml-3 mt-1">
              Declare MyImager Environment Variables
            </div>
          </div>
          <div className="content flex ">
            <div className="border-l w-[1px] ml-4 mt-1 h-[190px] bg-gray-200"></div>
            <div className="flex flex-col mt-3 ml-6">
              <p className="text-md font-normal ">
                Rename .env.example to .env.local and pass this two Variables to
                the myimager functions:
              </p>
              <div className=" border mt-8 bg-black text-white flex flex-col w-[300px] lg:w-[600px]">
                <code className="p-5">
                  MYIMAGER_CLIENT_KEY={"<Your MYIMAGER_CLIENT_KEY>"}
                  <br />
                  MYIMAGER_PROJECT_KEY={"<Your MYIMAGER_PROJECT_KEY>"}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="step1 flex flex-col p-5 py-0">
          <div className="flex ">
            <div className="border px-3 py-1 bg-gray-200 rounded-full ">3</div>
            <div className="text-[16px] font-semibold ml-3 mt-1">
              Use functions
            </div>
          </div>
          <div className="content flex ">
            <div className="border-l w-[1px] ml-4 mt-1 h-[500px] bg-gray-200"></div>
            <div className="flex flex-col mt-3 ml-6">
              <p className="text-md font-normal ">
                After complet this steps we can use all function provided by
                myimager Example of uploadOnMyimagerAndGetUrl{"()"}:
              </p>
              <div className=" border mt-8 flex flex-col w-[300px]   lg:w-[600px]">
                <code className="p-5 lg:p-10  bg-black text-white break-keep whitespace-pre-wrap overflow-scroll h-[400px]">
                  {javascriptDocs}
                </code>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mt-5">
          <Link href="/docs/vite" className="text-black">
            <ArrowLeft size={40} />
          </Link>
          <Link href="/docs/uploadimage" className="text-black">
            <ArrowRight size={40} />
          </Link>
        </div>
      </div>
    </>
  );
}
