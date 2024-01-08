import PostListItem from "@/components/PostListItem";
import { getAllPosts } from "@/libs/posts";
import { Post, PostMatter } from "@/type/post";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="w-full flex justify-center ">
      <ul className="w-full">
        {posts.map((post: Post & PostMatter) => {
          return <PostListItem postInfo={post} key={post.slug} />;
        })}
      </ul>
    </div>
  );
}
