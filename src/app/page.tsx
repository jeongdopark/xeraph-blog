import PostListItem from "@/components/PostListItem";

export default function Home() {
  return (
    <div className="w-full flex justify-center ">
      <ul className="w-full">
        <PostListItem />
      </ul>
    </div>
  );
}
