import { getAllPosts } from "@/libs/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    {
      url: "https://www.jeongdo.xyz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.jeongdo.xyz/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://www.jeongdo.xyz/pics",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...posts.map((post) => {
      return {
        url: `https://www.jeongdo.xyz${post.slug}`,
        lastModified: new Date(post.date),
        priority: 0.5,
      };
    }),
  ];
}
