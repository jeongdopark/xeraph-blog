import { Metadata } from "next";
import { ReactNode } from "react";
import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Jeongdo | pic",
  description: "Jeongdo 개인 기술 블로그 사진페이지",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's blog",
    description: "Jeongdo 개인 기술 블로그 사진페이지",
  },
};

export default function PicLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
