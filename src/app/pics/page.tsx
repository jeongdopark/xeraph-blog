import Image from "next/image";
import IMAGES from "@/assets/inedx";

function Pics() {
  const outer_map = Array(15).fill(0);
  const inner_map = Array(3).fill(0);

  return (
    <div className="flex gap-3 w-full flex-wrap justify-center">
      {outer_map.map((_, index) => {
        // 타입 단언
        const imageKey = `IMG_${index + 1}` as keyof typeof IMAGES;
        return (
          <div className="relative sm:w-[190px] sm:h-[190px] w-[100px] h-[100px]">
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
