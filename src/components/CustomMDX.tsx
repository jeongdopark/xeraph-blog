import rehypeHighlight from "rehype-highlight";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import CodeHeader from "./CodeHeader";
import Highlight from "./Highlight";
import Blockquote from "./Blockquote";
import CustomImage from "./CustomImage";

const components = {
  h1: (props: any) => (
    <div className="pt-10 pb-2">
      <h1 {...props} className="text-4xl font-bold">
        {props.children}
      </h1>
    </div>
  ),

  h2: (props: any) => (
    <div className="mt-[85px] pb-[20px]">
      <h2 {...props} className="text-3xl font-bold">
        {props.children}
      </h2>
    </div>
  ),
  h3: (props: any) => (
    <div className="pt-5 pb-2">
      <h3 {...props} className="text-2xl font-bold">
        {props.children}
      </h3>
    </div>
  ),
  h4: (props: any) => (
    <div className="pt-3 pb-2">
      <h4 {...props} className="text-xl font-bold">
        {props.children}
      </h4>
    </div>
  ),
  li: (props: any) => (
    <li className="list-disc" {...props}>
      {props.children}
    </li>
  ),
  a: (props: any) => (
    <a className="text-blue-400 underline text-[12px] sm:text-[16px]" target="_blank" {...props}>
      {props.children}
    </a>
  ),
  hr: (props: any) => (
    <hr className="mt-7" {...props}>
      {props.children}
    </hr>
  ),
  img: (props: any) => <CustomImage imgInfo={props} />,
  blockquote: (props: any) => <Blockquote text={props.children} />,
  CodeHeader,
  Highlight,
};

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
};

export function CustomMDX(props: any) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} options={options} />;
}
