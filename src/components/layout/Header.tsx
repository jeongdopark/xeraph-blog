import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";
import Author from "./Author";

function Header() {
  return (
    <header className="pt-7 w-full flex justify-center flex-col items-center">
      <div className="h-full w-full flex justify-between items-center">
        <div>
          <p className="font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500 tracking-tighter">
            <Link href="/">Xeraph</Link>
          </p>
        </div>
        <div className="flex-col justify-between">
          <div>
            <ul className="flex gap-5 text-1xl h-10">
              <Link href="/about">about</Link>
              <Link href="/pics">pic</Link>
            </ul>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <Author />
    </header>
  );
}

export default Header;
