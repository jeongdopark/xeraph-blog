import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";

export default function PostHeader() {
  return (
    <header className="pt-7 w-full flex justify-center flex-col items-center mb-[50px]">
      <div className="h-full w-full flex justify-between items-center">
        <div>
          <p className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500 tracking-tighter">
            <Link href="/">Xeraph</Link>
          </p>
        </div>
        <div className="flex-col justify-between">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
