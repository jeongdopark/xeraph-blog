import PostListItem from "@/components/PostListItem";
import Header from "@/components/layout/Header";
import { getAllPosts } from "@/libs/posts";
import { Post, PostMatter } from "@/type/post";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <div className="w-full flex justify-center flex-col dark:bg-dark-color">
        <Header />
        <ul className="w-full">
          {posts.map((post: Post & PostMatter) => {
            return <PostListItem postInfo={post} key={post.slug} />;
          })}
        </ul>
      </div>
    </>
  );
}
