import { ReactNode } from "react";
import type { Metadata } from "next";
import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Jeongdo | about",
  description: "Jeongdo | Personal Blog",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's ",
    description: "소개 페이지",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
