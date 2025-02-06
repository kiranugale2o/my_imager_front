"use client";
import { UserCheck2 } from "lucide-react";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Input } from "../input";
import { Label } from "../label";
import { useState } from "react";
import { userInitialData } from "@/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function OnboardPage({ user }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    userId: user?.id,
    email: user?.email,
    first_name: user?.given_name,
    last_name: user?.family_name,
    organization_name: "",
    profile_picture: user?.picture,
  });

  const router = useRouter();
  const { toast } = useToast();
  const handleOnboard = async (event) => {
    event.preventDefault(); // Prevent form from submitting normally
    setLoading(true);
    fetch("/api/onboard", {
      method: "POST",
      body: JSON.stringify({ currentUser }),
    })
      .then((res) => {
        res.json().then((res) => {
          if (res.success) {
            toast({
              title: res.message,
            });
            Cookies.set("myimager_user_access", res?.token);
            setLoading(false);
            router.push("/dashboard");
          } else {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
            });
            setLoading(false);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
      .finally(() => {});
  };

  return (
    <>
      <div className="flex p-5 lg:p-0 py-[70px] justify-center">
        <div className="flex flex-col p-10 item-center mx-auto w-[500px] bg-gray-100 text-black border rounded-lg justify-center">
          <div className="text-2xl font-sans font-extralight">
            Create Organization
          </div>

          {/* Use onSubmit instead of action */}
          <form onSubmit={handleOnboard}>
            <div className="flex mt-5 flex-col gap-5">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="organization_name" className="text-gray-700">
                  Enter Organization Name
                </Label>
                <Input
                  type="text"
                  id="organization_name"
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      organization_name: e.target.value,
                    })
                  }
                  placeholder="Enter Organization Name"
                  value={currentUser.organization_name}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox className="border border-gray-700" id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm underline font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mx-auto bg-white text-black py-2 px-10 rounded-lg flex items-center ${
                  loading ? " bg-gray-500 opacity-25" : ""
                }`}
              >
                <svg
                  className={`animate-spin h-5 ${loading ? "" : "hidden"}`}
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
                {loading ? (
                  <div className="ml-[0px]">Processing...</div>
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
