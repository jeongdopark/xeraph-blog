import { getAllPosts } from "@/libs/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts();

  return [
    {
      url: "https://www.jeongdo.xyz",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://www.jeongdo.xyz/about",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://www.jeongdo.xyz/pics",
      lastModified: new Date().toISOString().split("T")[0],
    },
    ...posts.map((post) => {
      return {
        url: `https://www.jeongdo.xyz${post.slug}`,
        lastModified: new Date(post.date).toISOString().split("T")[0],
        priority: 0.5,
      };
    }),
  ];
}
