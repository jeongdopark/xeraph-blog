import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-[60px] text-sm flex justify-center items-center">
      <Link className="cursor-pointer" href={"https://github.com/jeongdopark"}>
        © 2024 Jeongdo Park.
      </Link>
    </footer>
  );
}

export default Footer;
