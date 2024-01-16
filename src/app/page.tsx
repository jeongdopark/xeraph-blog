import PostListItem from "@/components/PostListItem";
import { getAllPosts } from "@/libs/posts";
import { Post, PostMatter } from "@/type/post";

export default function Home() {
  let posts = getAllPosts();
  posts = posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
  return (
    <>
      <div className="w-full flex justify-center flex-col">
        <ul className="w-full">
          {posts.map((post: Post & PostMatter) => {
            return <PostListItem postInfo={post} key={post.slug} />;
          })}
        </ul>
      </div>
    </>
  );
}
