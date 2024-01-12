import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-[80px] text-sm flex justify-center items-center absolute left-0 bottom-0">
      <Link className="cursor-pointer text-xs" href={"https://github.com/jeongdopark"}>
        Copyright © 2024 Jeongdo Park All rights reserved.
      </Link>
    </footer>
  );
}

export default Footer;
