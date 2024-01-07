import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";

function Header() {
  return (
    <header className="pt-10 w-full h-[200px] flex justify-center bg-blue-50">
      <div className="h-full w-[600px] flex justify-between items-center">
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
    </header>
  );
}

export default Header;
