import { getAllPosts } from "@/libs/posts";
import { CustomMDX } from "@/components/CustomMDX";
export default async function PostPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const _slug = "/posts/" + [...slug].join("/");
  const post = getAllPosts().find((v) => v.slug === _slug);

  if (post === undefined) {
    return <div>Not Found</div>;
  }

  return <CustomMDX source={post.content} />;
}
