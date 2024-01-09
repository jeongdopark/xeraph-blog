import Image from "next/image";
import AuthorImg from "@/assets/author.png";

function Author() {
  return (
    <div className="flex items-center w-full mt-5 mb-5 gap-5 ">
      <div className="rounded-full overflow-hidden w-[60px] h-[60px]">
        <Image src={AuthorImg} alt="author img" />
      </div>
      <div className="flex-col">
        <div>Jeongdo Park</div>
        <h3 className="text-xs text-gray-600">-</h3>
      </div>
    </div>
  );
}

export default Author;
