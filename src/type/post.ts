export type PostMatter = {
  title: string;
  description: string;
  date: string;
};

export type Post = PostMatter & {
  slug: string;
  content: string;
};
