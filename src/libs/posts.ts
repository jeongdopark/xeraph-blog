import { sync } from "glob";
import path from "path";

const BASE_PATH = "/src/posts";
const SLICE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.map((path) => {
    return {
      slug: path.slice(path.indexOf(SLICE_PATH)).replace(".mdx", ""),
    };
  });
};
