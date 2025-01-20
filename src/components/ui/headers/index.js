import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Header({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle mobile menu visibility
  const router = useRouter();
  const navItem = [
    {
      path: "/",
      name: "Home",
    },

    {
      path: "/docs",
      name: "Docs",
    },
    {
      path: "/developers",
      name: "Developers",
    },
    {
      path: "/blog",
      name: "Blogs",
    },
    {
      path: "/contact",
      name: "Contact us",
    },
  ];

  return (
    <header className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <div className="flex absolute top-1 left-[-2px] lg:left-[2px]">
                <img
                  src="/logonew.png"
                  className=""
                  width={65}
                  height={20}
                  alt="logo"
                />
              </div>
              <div className="flex gap-0 ">
                <img src="/name.png" width={200} height={60} alt="logo" />
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItem.map((d, i) => {
                  return (
                    <li key={i}>
                      <a
                        className="text-gray-500 text-white transition hover:text-red-500/75"
                        href={d.path}
                      >
                        {" "}
                        {d.name}{" "}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="rounded-md border hover:bg-white hover:text-black px-5 py-2.5 text-sm font-medium text-white shadow"
                    >
                      Dashboard
                    </Link>
                  </>
                ) : (
                  <LoginLink className="rounded-md border hover:bg-white hover:text-black px-5 py-2.5 text-sm font-medium text-white shadow">
                    Sign in
                  </LoginLink>
                )}
              </div>

              <Sheet className="w-[700px]">
                <SheetTrigger className={`flex mt-0  ml-2  lg:hidden`}>
                  <MenuIcon className="rounded bg-gray-100 p-2 size-9 text-gray-600 transition hover:text-gray-600/75" />
                </SheetTrigger>

                <SheetContent className="py-24">
                  <div className=" flex flex-col lg:hidden justify-start  mt-1 gap-5   ">
                    {navItem.map((d, i) => {
                      return (
                        <div key={d.name} className="text-start">
                          <nav aria-label="Global" className="">
                            <ul className="flex items-center gap-6 text-sm">
                              <SheetClose asChild className="">
                                {/* <Link
                              href={d.path}
                              className="font-semibold  uppercase flex min-w-[84px] max-w-[480px] cursor-pointer items-start  overflow-hidden  p-2 h-10 hover:text-red-600 border-b text-black font-bold leading-normal tracking-[0.015em] "
                            >
                              {d.name}
                            </Link> */}
                                <li key={i} className="">
                                  <a
                                    className="text-gray-500 text-lg transition hover:text-gray-500/75"
                                    href={d.path}
                                  >
                                    {" "}
                                    {d.name}{" "}
                                  </a>
                                </li>
                              </SheetClose>
                            </ul>
                          </nav>
                        </div>
                      );
                    })}
                  </div>
                  <div className="footer"></div>
                  {/* <div className="hidden lg:flexmt-6 ml-10"></div> */}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
