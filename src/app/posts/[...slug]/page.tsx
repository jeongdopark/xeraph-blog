import { getAllPosts } from "@/libs/posts";
import { CustomMDX } from "@/components/CustomMDX";
import CalendarIcon from "@/components/Icons/CalendarIcon";

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const _slug = "/posts/" + [...slug].join("/");
  const post = getAllPosts().find((v) => v.slug === _slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => {
    {
      slug: post.slug;
    }
  });
}

export default async function PostPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  const _slug = "/posts/" + [...slug].join("/");
  let post = getAllPosts().find((v) => v.slug === _slug);

  if (post === undefined) {
    return <div>Not Found</div>;
  }

  return (
    <article className="flex-col">
      <div className="flex flex-col gap-1 mb-[80px]">
        <div className="sm:text-5xl font-semibold text-2xl">{post.title}</div>
        <div className="text-medium text-gray-500 dark:text-gray-300">{post.description}</div>
        <div className="flex gap-1">
          <CalendarIcon width={14} height={14} />
          <div className="text-xs font-light text-gray-600 dark:text-gray-300">{post.date}</div>
        </div>
      </div>
      <CustomMDX source={post.content} />
    </article>
  );
}
