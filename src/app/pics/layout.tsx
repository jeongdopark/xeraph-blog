import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Xeraph | Pics",
  description: "Xeraph | Personal Blog",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's blog",
    description: "jeongdo's blog",
  },
};

export default function PicLayout({ children, params }: { children: ReactNode; params: any }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
