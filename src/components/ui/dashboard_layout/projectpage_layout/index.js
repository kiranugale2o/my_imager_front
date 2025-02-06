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
import { formatDate } from "@/utils";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function ProjectPageLayout({ user, project }) {
  const [currentOrganizationData, setOrganizationData] = useState({
    ownerId: user?._id,
    project_name: "",
    date: formatDate(),
  });

  const [error, setError] = useState(null);
  const [name, setName] = useState("create");
  const [btn, setBtn] = useState(false);
  const [isPending, setPending] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleProject = async (event) => {
    console.log(currentOrganizationData);
    event.preventDefault(); // Prevent form from submitting normally
    setName("loading..");
    setPending(true);
    await fetch("/api/createproject", {
      method: "POST",
      body: JSON.stringify({ data: currentOrganizationData }),
    }).then((res) =>
      res.json().then((res) => {
        if (res.success) {
          toast({
            title: res.message,
          });
          setBtn(false);
          setName("create");
          setPending(false);
          router.refresh("/dashboard");
        } else {
          alert(res.message);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
          });
          setPending(false);
          setBtn(false);
          setName("create");
        }
      })
    );
  };

  return (
    <>
      <div className="flex lg:p-5 lg:px-10 flex-col w-full gap-5">
        <div className="flex">
          <Dialog open={btn} onOpenChange={setBtn} className="text-black">
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
                <form onSubmit={handleProject} method="post">
                  <div className="grid grid-cols-4 items-center gap-6">
                    <Label htmlFor="api" className="w-full text-right">
                      Your Organization
                    </Label>
                    <Input
                      type="text"
                      id="api"
                      disabled
                      placeholder="Email"
                      value={user?.organization_name}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Project Name
                    </Label>
                    <Input
                      id="name"
                      required
                      value={currentOrganizationData.project_name}
                      className="col-span-3"
                      onChange={(e) => {
                        setOrganizationData({
                          ...currentOrganizationData,
                          project_name: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    class=" mt-10 bg-black text-white py-2 px-4 rounded-lg flex items-center"
                  >
                    <svg
                      className={`animate-spin h-5 w-5 mr-3 ${
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
                  <DialogTrigger className="flex gap-5">
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
          Dear {user?.organization_name} Your Projects
        </div>

        <div className="block lg:flex lg:flex-wrap w-full  gap-3 grid  gap-y-6 lg:gap-3 ">
          {project &&
            project.map((d, i) => {
              return (
                <Link key={i} href={`/dashboard/${d?._id}`}>
                  <Card className=" w-[330px] lg:w-[250px] bg-transparant  text-white border-gray-200 hover:bg-white hover:text-black">
                    <CardHeader className="">
                      <CardTitle className="flex justify-between">
                        <span className="text-sm">{d?.project_name}</span>
                        <ArrowRightFromLineIcon className="hover:size-7" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-md">size:5GB</div>
                    </CardContent>
                    <CardFooter>
                      <div className="text-sm font-normal ">
                        Created At.{d?.date}
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
