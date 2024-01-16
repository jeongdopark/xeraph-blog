"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";
import PostHeader from "./PostHeader";
import { useEffect, useState } from "react";

export type ActiveType = 0 | 1 | 2 | null;

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const target = parts[1];
  const [activeNav, setActiveNav] = useState<ActiveType>(null);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveNav(0);
        break;
      case "/posts":
        setActiveNav(0);
        break;
      case "/about":
        setActiveNav(1);
        break;
      case "/pics":
        setActiveNav(2);
        break;
    }
  }, [pathname]);

  return (
    <>
      {target === "posts" ? <PostHeader /> : <Header activeNav={activeNav} setActiveNav={setActiveNav} />}
      {children}
      <Footer />
    </>
  );
}
