import Image from "next/image";
import IMAGES from "@/assets/inedx";

function Pics() {
  const outer_map = Array(15).fill(0);

  return (
    <div className="flex gap-[7px] w-full flex-wrap sm:gap-[12px]">
      {outer_map.map((_, index) => {
        // 타입 단언
        const imageKey = `IMG_${index + 1}` as keyof typeof IMAGES;
        return (
          <div className="relative sm:w-[192px] sm:h-[192px] w-[112px] h-[112px]" key={imageKey}>
            <Image
              src={IMAGES[imageKey]}
              alt={`Image_${index + 1}`}
              layout="fill"
              className="rounded-sm"
              priority={true}
              placeholder="blur"
              key={imageKey}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Pics;
