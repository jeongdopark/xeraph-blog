import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { Post, PostMatter } from "@/type/post";

const BASE_PATH = "/src/posts";
const SLICE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: "utf8" });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    return {
      ...grayMatter,
      content,
      slug: postPath.slice(postPath.indexOf(SLICE_PATH)).replace(".mdx", ""),
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;

    return [...ac, post];
  }, []);
};
