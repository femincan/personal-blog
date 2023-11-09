import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://headless-personal-blog.netlify.app',
  image: {
    domains: ['cdn.hashnode.com'],
  },
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
      sitemap: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
});
