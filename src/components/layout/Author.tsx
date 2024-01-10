import AuthorImg from "@/assets/author.png";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

function Author() {
  return (
    <div className="flex items-center w-full mt-5 mb-10 gap-5 ">
      <Avatar src={AuthorImg.src} alt="author img" size="lg" />

      <div className="flex-col">
        <div>Jeongdo Park</div>
        <h3 className="text-xs text-gray-600 underline dark:text-gray-200">
          <Link href={"https://github.com/jeongdopark"}>GitHub</Link>
        </h3>
      </div>
    </div>
  );
}

export default Author;
