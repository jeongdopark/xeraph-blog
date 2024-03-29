import Image from "next/image";
import IMAGES from "@/assets/inedx";

function Pics() {
  const outer = Array(5).fill(0);
  const inner = Array(3).fill(0);

  let counter = 0;

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[5px]">
        {outer.map((col) => {
          return (
            <div className="flex justify-center sm:gap-[7px] gap-[5px]" key={counter}>
              {inner.map((row) => {
                counter += 1;
                const imageKey = `IMG_${counter}` as keyof typeof IMAGES;
                return (
                  <div
                    className="relative md:w-[192px] md:h-[192px] sm:w-[150px] sm:h-[150px] w-[112px] h-[112px] overflow-hidden"
                    key={imageKey}
                  >
                    <Image
                      src={IMAGES[imageKey]}
                      alt={`Image_${counter}`}
                      className="rounded-sm"
                      priority={true}
                      placeholder="blur"
                      key={imageKey}
                      fill
                      sizes="(max-width:640px)200px, 120px"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pics;
