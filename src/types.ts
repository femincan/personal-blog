export type Post = {
  slug: string;
  title: string;
  author: {
    name: string;
  };
  publishedAt: string;
  url: string;
  coverImage: {
    url: string;
  };
  content: {
    markdown: string;
  };
  readTimeInMinutes: number;
};
