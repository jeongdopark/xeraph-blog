import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitch";

export default function PostHeader() {
  return (
    <header className="pt-7 w-full font-extrabold flex justify-center flex-col items-center mb-[50px]">
      <div className="h-full w-full flex justify-between items-center">
        <div>
          <p className="font-bold text-2xl text-black">
            <Link href="/">Jeongdo</Link>
          </p>
        </div>
        <div className="flex-col justify-between">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
