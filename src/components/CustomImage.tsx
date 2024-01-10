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

export default async function CustomImage({ imgInfo: { src } }: { imgInfo: { src: string } }) {
  const url = src.replace(/^%22|%22$/g, "");
  const { base64, img } = await getImage(url);
  return (
    <div className="w-full flex justify-center">
      <Image {...img} blurDataURL={base64} loading="lazy" alt="Post Img" placeholder="blur" />
    </div>
  );
}
