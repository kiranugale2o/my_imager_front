"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../../button";

export default function OrgainizationLayout() {
  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="text-3xl border-b p-5 lg:w-[900px] font-sans font-extralight">
          Kiran's Orgainization Setting
        </div>

        <div className="w-full p-5 mt-10 lg:border rounded-lg">
          <p className="text-lg font-sans font-extralight p-2 border-b">
            General settings
          </p>

          <div className="flex mt-10 lg:ml-10 gap-4 flex-col">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name" className="text-gray-400">
                Orgainization Name
              </Label>
              <Input type="name" id="email" value="Kiran's Org" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="api" className="text-gray-400">
                Orgainization Api Key
              </Label>
              <Input
                type="text"
                id="api"
                disabled
                placeholder="Email"
                value="SXDDDDDDDD$F$#@####"
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
                placeholder="Email"
                value="kiranugale129@gmail.com"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name" className="text-gray-400">
                Organizer Name
              </Label>
              <Input type="text" id="name" disabled value="Kiran ugale" />
            </div>
          </div>
          <div className="flex mt-5 item-end justify-end gap-5">
            <Button>cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}
