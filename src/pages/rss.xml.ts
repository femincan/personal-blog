import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import getBlogData from '@src/utils/getBlogData';
import getAllPosts from '@src/utils/getAllPosts';

export const GET: APIRoute = async ({ site }) => {
  const blogData = await getBlogData();
  const allBlogPosts = await getAllPosts(true);

  return rss({
    title: blogData.title,
    description: blogData.about.text,
    site: site!,
    items: allBlogPosts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.publishedAt),
      description: post.brief,
      link: `/blog/${post.slug}`,
    })),
  });
};
