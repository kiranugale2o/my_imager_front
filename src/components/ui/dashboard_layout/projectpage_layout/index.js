"use client";
import { ArrowRightFromLineIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../../label";
import { Input } from "../../input";
import { Button } from "../../button";
import { useState, useTransition } from "react";

export const projectInitialData = {
  organizationName: "",
  projectName: "",
  date: "",
};
export default function ProjectPageLayout() {
  const [currentOrganizationData, setOrganizationData] = useState(
    projectInitialData
  );

  const [error, setError] = useState(null);
  const [name, setName] = useState("create");
  const [isPending, setPending] = useState(false);

  const handleProject = () => {
    console.log(currentOrganizationData);
    setPending(true);
    setName("loading..");
  };

  const maps = [1, 2, 2, 3, 3, 3];
  return (
    <>
      <div className="flex lg:p-5 lg:px-10 flex-col w-full gap-5">
        <div className="flex">
          <Dialog className="text-black">
            <DialogTrigger className="text-black">
              <div className=" p-1 rounded-md px-2 hover:border hover:border-red-500 bg-gradient-to-r from-red-300 via-red-500 to-purple-700 font-normal  text-sm">
                New Project
              </div>
            </DialogTrigger>

            <DialogContent>
              <DialogTitle>{""}</DialogTitle>
              <div className="text-black text-2xl font-sans font-extalight">
                New Project
              </div>
              <div className="text-black text-sm ">
                Your project will have its own dedicated instance and full
                MongoDB database. An API will be set up so you can easily
                interact with your new database.
              </div>
              <div className=" text-black grid gap-4 py-4">
                <form action={handleProject}>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="api" className="text-right">
                      Organization
                    </Label>
                    <Input
                      type="text"
                      id="api"
                      disabled
                      placeholder="Email"
                      value="SXDDDDDDDD$F$#@####"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Project Name
                    </Label>
                    <Input
                      id="name"
                      required
                      value={currentOrganizationData.projectName}
                      className="col-span-3"
                      onChange={(e) => {
                        setOrganizationData({
                          ...currentOrganizationData,
                          projectName: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <DialogTrigger className="flex gap-5">
                    <button
                      type="submit"
                      disabled={isPending}
                      class=" mt-10 bg-black text-white py-2 px-4 rounded-lg flex items-center"
                    >
                      <svg
                        class={`animate-spin h-5 w-5 mr-3 ${
                          isPending ? "" : "hidden"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeOpacity="0.3"
                        />
                        <path
                          fill="currentColor"
                          d="M12 2a10 10 0 0 1 10 10H2A10 10 0 0 1 12 2z"
                        />
                      </svg>
                      {isPending ? "Processing..." : "Create"}
                    </button>

                    <Button
                      type="button"
                      className="mt-10 bg-black text-white py-2 px-4 rounded-lg flex items-center"
                    >
                      cancel
                    </Button>
                  </DialogTrigger>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="text-lg text-white font-semibold font-sans  font-extralight">
          Dear Kiran Your Projects
        </div>

        <div className="block lg:flex lg:flex-wrap w-full  gap-3 grid  gap-y-6 lg:gap-3 ">
          {maps.map((d, i) => {
            return (
              <Link href="/dashboard/122">
                <Card
                  key={i}
                  className=" w-[330px] lg:w-[250px] bg-transparant  text-white border-gray-200 hover:bg-white hover:text-black"
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
