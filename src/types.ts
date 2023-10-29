export type Author = {
  profilePicture: string;
  name: string;
  bio: {
    markdown: string;
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
