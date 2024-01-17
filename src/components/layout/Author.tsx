import AuthorImg from "@/assets/author.webp";
import { GITHUB_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function Author() {
  return (
    <div className="flex items-center w-full mt-5 mb-10 gap-5 ">
      <div className="w-[60px] h-[60px] rounded-full relative overflow-hidden">
        <Image
          src={AuthorImg.src}
          alt="author img"
          quality={70}
          fill
          placeholder="blur"
          blurDataURL={AuthorImg.src}
          sizes="60px"
        />
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
