import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";
import Author from "./Author";

function Header() {
  return (
    <header className="pt-7 w-full flex flex-col">
      <div className="h-full w-full flex justify-between items-start">
        <div>
          <p className="text-5xl font-extrabold text-transparent sm:text-8xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400 tracking-tighter dark:from-gray-400 dark:to-gray-800">
            <Link href="/">Xeraph</Link>
          </p>
        </div>
        <div className="flex-col justify-between gap-1">
          <div>
            <div className="gap-3 flex sm:gap-5 text-1xl h-10 text-sm sm:text-xl">
              <Link href="/">posts</Link>
              <Link href="/about">about</Link>
              <Link href="/pics">pic</Link>
            </div>
          </div>
          <div className="flex justify-end">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <Author />
    </header>
  );
}

export default Header;
