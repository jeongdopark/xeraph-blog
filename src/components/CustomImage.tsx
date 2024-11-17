import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default async function CustomImage({ src, width, height, alt }: { src: string; width: number; height: number; alt:string; }) {
  const url = src.replace(/^%22|%22$/g, "");
  const { base64, img } = await getImage(url);
  return (
    <div className={`flex justify-center mt-5 mb-5 relative w-full`}>
      <Image src={img.src} blurDataURL={base64} alt={alt} className="rounded-lg" width={width} height={height} />
    </div>
  );
}
