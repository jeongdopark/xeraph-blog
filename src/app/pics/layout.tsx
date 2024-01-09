import Header from "@/components/layout/Header";
import { ReactNode } from "react";

export default function PicLayout({ children, params }: { children: ReactNode; params: any }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
