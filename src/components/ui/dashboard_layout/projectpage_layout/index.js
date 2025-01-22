import { ArrowRightFromLineIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import Link from "next/link";

export default function ProjectPageLayout() {
  const maps = [1, 2, 2, 3, 3, 3];
  return (
    <>
      <div className="flex lg:p-5 lg:px-10 flex-col w-full gap-5">
        <div className="flex">
          <button className="p-1 rounded-md px-2 hover:border hover:border-red-500 bg-gradient-to-r from-red-300 via-red-500 to-purple-700 font-normal  text-sm">
            New Project
          </button>
        </div>
        <div className="text-lg text-white font-semibold font-mono antialiased">
          Dear Kiran Your Projects
        </div>

        <div className="block lg:flex lg:flex-wrap w-full  gap-3 grid  gap-y-6 lg:gap-3 ">
          {maps.map((d, i) => {
            return (
              <Link href="/dashboard/122">
                <Card
                  key={i}
                  className=" w-[330px] lg:w-[250px] bg-slate-300 text-black border-gray-200 hover:bg-slate-50"
                >
                  <CardHeader className="">
                    <CardTitle className="flex justify-between">
                      <span className="text-sm">Project Name</span>
                      <ArrowRightFromLineIcon className="hover:size-7" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-md">size:45GB</div>
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm font-normal ">
                      Created At.12 jan 2025
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
