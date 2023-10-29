import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  image: { domains: ['cdn.hashnode.com'] },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ],
});
