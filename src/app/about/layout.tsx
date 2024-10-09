import { ReactNode } from "react";
import type { Metadata } from "next";
import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Jeongdo | about",
  description: "Jeongdo 개인 기술 블로그 소개페이지",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's ",
    description: "Jeongdo 개인 기술 블로그 소개페이지",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
