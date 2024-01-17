import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) => Buffer.from(await res.arrayBuffer()));

  const { ...plaiceholder } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src },
  };
};

export default async function CustomImage({ imgInfo: { src } }: { imgInfo: { src: string } }) {
  const url = src.replace(/^%22|%22$/g, "");
  const { base64, img } = await getImage(url);
  return (
    <div className="w-full flex justify-center mt-5 mb-5">
      <div className="sm:w-[500px] w-[350px] h-[300px] relative">
        <Image src={img.src} blurDataURL={base64} alt="Post Img" className="rounded-lg" fill sizes="500px" />
      </div>
    </div>
  );
}
