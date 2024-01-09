import { ReactNode } from "react";
import Header from "@/components/layout/Header";

export default function AboutLayout({ children, params }: { children: ReactNode; params: any }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
