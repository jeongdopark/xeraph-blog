import Image from "next/image";
import AuthorImg from "@/assets/author.png";

function Author() {
  return (
    <div className="flex items-center w-[600px] m-5 gap-5">
      <Image
        src={AuthorImg}
        width={70}
        height={70}
        alt="author img"
        style={{ borderRadius: "50%", objectFit: "contain" }}
      />
      <div className="flex-col">
        <div>Personal blog by jeongdo park.</div>
        <div>-</div>
      </div>
    </div>
  );
}

export default Author;
