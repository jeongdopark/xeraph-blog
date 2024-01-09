import Author from "@/components/layout/Author";
import PostHeader from "@/components/layout/PostHeader";
import { ReactNode } from "react";

export default function PostLayout({ children, params }: { children: ReactNode; params: any }) {
  return (
    <div>
      <PostHeader />
      {children}
    </div>
  );
}
