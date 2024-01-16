"use client";

import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";
import Author from "./Author";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuButton from "../MenuButton";
import Sidebar from "./Sidebar";
import { PAGE } from "@/constants";

function Header() {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState<0 | 1 | 2 | null>(null);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useLayoutEffect(() => {
    switch (pathname) {
      case "/":
        setActiveNav(0);
        break;
      case "/posts":
        setActiveNav(0);
        break;
      case "/about":
        setActiveNav(1);
        break;
      case "/pics":
        setActiveNav(2);
        break;
    }
  }, []);

  return (
    <header className="pt-7 w-full flex flex-col ">
      <div className="h-full w-full flex justify-between items-center">
        <div>
          <p className="text-5xl font-extrabold text-transparent sm:text-8xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400 tracking-tighter dark:from-gray-400 dark:to-gray-800">
            <Link href="/">Xeraph</Link>
          </p>
        </div>
        <div className="flex-col justify-between gap-3 sm:block hidden">
          <div>
            <div className="gap-3 flex sm:gap-5 text-1xl h-10 text-sm sm:text-xl ">
              {PAGE.map((page_name, index) => {
                return (
                  <div className="hover:text-gray-400 transition-colors duration-1000 ease-in-out" key={page_name}>
                    <Link
                      href={`/${page_name === "posts" ? "" : page_name}`}
                      className={`${activeNav === index && "underline"} `}
                    >
                      {page_name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end">
            <ThemeSwitcher />
          </div>
        </div>
        <MenuButton setIsSidebarActive={setIsSidebarActive} />
        <Sidebar isActive={isSidebarActive} activeNav={activeNav} setIsSidebarActive={setIsSidebarActive} />
        {isSidebarActive && <div className="fixed top-0 right-0 left-0 bottom-0 backdrop-blur-sm z-40 md:hidden"></div>}
      </div>
      <Author />
    </header>
  );
}

export default Header;
