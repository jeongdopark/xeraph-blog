export type PostMatter = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
};

export type Post = PostMatter & {
  slug: string;
  content: string;
};
