export type Author = {
  profilePicture: string;
  name: string;
  bio: {
    text: string;
  };
  socialMediaLinks: {
    twitter: string;
    github: string;
    linkedin: string;
  };
};

export type Blog = {
  title: string;
  about: {
    text: string;
  };
  favicon: string;
  themeColor: string;
  ogImageUrl: string;
  author: Author;
};

export type PostPreview = {
  slug: string;
  title: string;
  publishedAt: string;
  coverImage: null | {
    url: string;
  };
  brief: string;
};

export type Post = PostPreview & {
  url: string;
  content: {
    markdown: string;
  };
  readTimeInMinutes: number;
};

export type About = {
  url: string;
  content: {
    markdown: string;
  };
};
