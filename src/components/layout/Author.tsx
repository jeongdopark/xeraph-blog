import AuthorImg from "../../assets/author.png";
import { GITHUB_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Author() {
  return (
    <div className="flex items-center w-full mt-5 mb-10 gap-5 ">
      <div className="w-[55px] h-[55px] overflow-hidden rounded-full relative">
        <div className="w-[100px] h-[100px] absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <Image src={AuthorImg} alt="author img" quality={50} objectFit="contain" placeholder="blur" sizes="120px" />
        </div>
      </div>
      <div className="flex-col">
        <div>Jeongdo Park</div>
        <h3 className="text-xs text-gray-600 underline dark:text-gray-200">
          <Link href={GITHUB_URL}>GitHub</Link>
        </h3>
      </div>
    </div>
  );
}

export default Author;
