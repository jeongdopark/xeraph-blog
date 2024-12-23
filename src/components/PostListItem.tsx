import Link from "next/link";
import CalendarIcon from "./Icons/CalendarIcon";
import { Post, PostMatter } from "@/type/post";

interface IProp {
  postInfo: Post & PostMatter;
}

export default function PostListItem({ postInfo }: IProp) {
  console.log(postInfo.slug)
  return (
    <li className="flex w-full h-[70px]  mt-5 mb-5 justify-between items-center ">
      <div className="flex flex-col gap-1">
        <Link href={postInfo.slug} className="text-xl sm:text-2xl font-normal hover:underline cursor-pointer">
          {postInfo.title}
        </Link>
        <span className="text-xs font-thin text-gray-700  dark:text-white">{postInfo.subtitle}</span>
      </div>
      <div className="flex gap-5">
        <CalendarIcon width={14} height={14} />
        <div className="text-xs font-light text-gray-600  dark:text-white">{postInfo.date}</div>
      </div>
    </li>
  );
}
