import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://headless-personal-blog.netlify.app',
  image: {
    domains: ['cdn.hashnode.com'],
  },
  integrations: [
    sitemap(),
    robotsTxt(),
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
});
