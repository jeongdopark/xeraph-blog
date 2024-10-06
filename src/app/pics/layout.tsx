import { Metadata } from "next";
import { ReactNode } from "react";
import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Jeongdo | pic",
  description: "Jeongdo | Personal Blog",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's blog",
    description: "사진 페이지",
  },
};

export default function PicLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
