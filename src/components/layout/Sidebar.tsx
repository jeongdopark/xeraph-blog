import React from "react";
import { PAGE } from "@/constants";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";
import XIcon from "../Icons/XIcon";

export default function Sidebar({
  isActive,
  activeNav,
  setIsSidebarActive,
}: {
  isActive: boolean;
  activeNav: 0 | 1 | 2 | null;
  setIsSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleCloseSideBar = () => {
    setIsSidebarActive(false);
  };
  return (
    <div
      className={`fixed justify-center -right-[280px] top-0 flex flex-col w-[280px] h-full transition-transform ${
        isActive ? "-translate-x-[280px]" : "translate-x-0"
      } duration-1000 z-50 dark:bg-dark md:hidden`}
    >
      <div className="h-full border-t-gray-200 border-b-gray-200 border-l-gray-200 dark:border-t-gray-600 dark:border-b-gray-600 dark:border-l-gray-600 dark:border-r-transparent   border-[1px] p-5 dark:bg-dark-color bg-white">
        <div className="w-full justify-between flex items-center">
          <button onClick={handleCloseSideBar}>
            <XIcon />
          </button>
          <ThemeSwitcher />
        </div>
        <div className="h-[1px] w-full bg-gray-200 mt-5 dark:bg-gray-600"></div>
        <div className="flex-col mt-5 mb-5">
          {PAGE.map((page_name, index) => {
            return (
              <div className="mt-5 hover:text-gray-400 transition-colors duration-1000 ease-in-out" key={page_name}>
                <Link
                  onClick={handleCloseSideBar}
                  href={`/${page_name === "posts" ? "" : page_name}`}
                  className={`sm:text-3xl text-xl font-extrabold m-5 ${index === activeNav && "underline"} `}
                >
                  {page_name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="h-[1px] w-full bg-gray-200 mt-5 dark:bg-gray-600"></div>

        <div className="text-lg font-extrabold m-5 hover:text-gray-400 transition-colors duration-1000 ease-in-out  cursor-pointer">
          <Link href={"https://github.com/jeongdopark"} target="_blank">
            GitHub
          </Link>
        </div>
        <div className="text-lg font-extrabold m-5 hover:text-gray-400 transition-colors duration-1000 ease-in-out cursor-pointer">
          <a href="mailto:jeogndo@gmail.com" target="_blank">
            E-mail
          </a>
        </div>
      </div>
    </div>
  );
}
