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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Header({ user }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to toggle mobile menu visibility
  const router = useRouter();
  const pathname = usePathname();
  const components = [
    {
      title: "Github Contribution",
      href: "https://github.com/kiranugale2o/my_imager_front",
    },
    {
      title: "Functions",
      href: "/docs/sendOnMyimager",
    },
    {
      title: "AI Integration",
      href: "/docs/askMyimager",
    },
    {
      title: "Project Integration",
      href: "/docs",
    },
  ];

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
      path: "/blog",
      name: "Blogs",
    },
    {
      path: "/join",
      name: "Join us",
    },
    {
      path: "/developers",
      name: "Developers",
    },
  ];

  return (
    <header
      className={`w-full bg-[url('/bg.jpg')]  text-white border-b border-gray-700    ${
        pathname.includes("/dashboard") ? "hidden" : ""
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center ">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <div className="flex gap-5 ml-[-10px] lg:ml-[0px] lg:gap-0">
                <div className="flex absolute top-1  lg:left-[2px]">
                  <img
                    src="/logonew.png"
                    className=""
                    width={65}
                    height={20}
                    alt="logo"
                  />
                </div>
                <div className="flex gap-0  ml-[30px] lg:ml-[0px] ">
                  <img src="/name.png" width={200} height={60} alt="logo" />
                </div>
              </div>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navItem.map((d, i) => {
                  return (
                    <li key={i}>
                      {d.path === "/developers" ? (
                        <>
                          <NavigationMenu>
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-white bg-black">
                                  {d.name}
                                </NavigationMenuTrigger>

                                <NavigationMenuContent>
                                  <ul className="grid w-[400px] gap-y-2  gap-3 p-6 md:w-[400px] md:grid-cols-2 lg:w-[250px] ">
                                    {components.map((component) => (
                                      <li
                                        key={component.title}
                                        className="grid gap-4"
                                      >
                                        <a
                                          className="text-white bg-black  p-2 rounded-lg border  transition hover:text-red-500/75"
                                          href={component.href}
                                        >
                                          {" "}
                                          {component.title}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </NavigationMenuContent>
                              </NavigationMenuItem>
                            </NavigationMenuList>
                          </NavigationMenu>
                        </>
                      ) : (
                        <a
                          className="text-gray-500 text-white transition hover:text-red-500/75"
                          href={d.path}
                        >
                          {" "}
                          {d.name}{" "}
                        </a>
                      )}
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
                  <LoginLink
                    postLoginRedirectURL="/onboard"
                    className="rounded-md border hover:bg-black hover:text-white px-5 py-2.5 text-sm font-medium text-white shadow"
                  >
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
                              className="font-semibold  uppercase flex min-w-[84px] max-w-[480px] cursor-pointer items-start  overflow-hidden  p-2 h-10 hover:text-red-600 border-b text-white font-bold leading-normal tracking-[0.015em] "
                            >
                              {d.name}
                            </Link> */}
                                {d.path === "/developers" ? (
                                  <>
                                    <NavigationMenu>
                                      <NavigationMenuList>
                                        <NavigationMenuItem>
                                          <NavigationMenuTrigger className="text-white bg-black">
                                            {d.name}
                                          </NavigationMenuTrigger>

                                          <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-y-2  gap-3 p-6  w-[160px] md:grid-cols-2  ">
                                              {components.map((component) => (
                                                <li
                                                  key={component.title}
                                                  className="grid gap-4"
                                                >
                                                  <a
                                                    className="text-white bg-black  p-2 rounded-lg border  transition hover:text-red-500/75"
                                                    href={component.href}
                                                  >
                                                    {" "}
                                                    {component.title}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </NavigationMenuContent>
                                        </NavigationMenuItem>
                                      </NavigationMenuList>
                                    </NavigationMenu>
                                  </>
                                ) : (
                                  <li key={i} className="">
                                    <a
                                      className="text-gray-500 text-lg transition hover:text-gray-500/75"
                                      href={d.path}
                                    >
                                      {" "}
                                      {d.name}{" "}
                                    </a>
                                  </li>
                                )}
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
