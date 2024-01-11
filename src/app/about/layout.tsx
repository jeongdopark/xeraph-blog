import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { openGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: "Xeraph | about",
  description: "Xeraph | Personal Blog",
  openGraph: {
    ...openGraphImage,
    title: "jeongdo's blog",
    description: "jeongdo's blog",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
