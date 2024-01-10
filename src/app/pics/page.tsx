import Image from "next/image";
import IMAGES from "@/assets/inedx";

function Pics() {
  const outer_map = Array(5).fill(0);
  const inner_map = Array(3).fill(0);

  let count = 1;

  return (
    <div className="flex-col gap-3 flex w-full">
      {outer_map.map((_, outerIndex) => (
        <div key={`row_${outerIndex}`} className="flex gap-3">
          {inner_map.map((_, innerIndex) => {
            // 타입 단언
            const imageKey = `IMG_${count++}` as keyof typeof IMAGES;

            return (
              <div key={`img_${outerIndex}_${innerIndex}`}>
                <Image
                  src={IMAGES[imageKey]}
                  alt={`Image_${count}`}
                  width={200}
                  height={200}
                  className="rounded-sm"
                  priority={true}
                  placeholder="blur"
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Pics;
