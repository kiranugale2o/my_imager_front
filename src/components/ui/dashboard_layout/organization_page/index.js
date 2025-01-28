"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../button";

export default function OrganizationLayout({ user }) {
  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="text-3xl border-b p-5 lg:w-[900px] font-sans font-extralight">
          Kiran's Organization Setting
        </div>

        <div className="w-full p-5 mt-10 lg:border rounded-lg">
          <p className="text-lg font-sans font-extralight p-2 border-b">
            General settings
          </p>

          <div className="flex mt-10 lg:ml-10 gap-4 flex-col">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name" className="text-gray-400">
                Organization Name
              </Label>
              <Input
                type="name"
                id="email"
                disabled
                className="text-gray-400"
                value={user?.organization_name}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="api" className="text-gray-400">
                Organization Api Key
              </Label>
              <Input
                type="text"
                id="api"
                disabled
                className="text-gray-400"
                value={user?._id}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email" className="text-gray-400">
                Email
              </Label>
              <Input
                type="text"
                id="email"
                disabled
                className="text-gray-400"
                value={user?.email}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name" className="text-gray-400">
                organizer Name
              </Label>
              <Input
                type="text"
                id="name"
                disabled
                className="text-gray-400"
                value={user?.first_name + " " + user?.last_name}
              />
            </div>
          </div>
          <div className="hidden flex mt-5 item-end justify-end gap-5">
            <Button>cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}
