import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import path from 'path';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },

  adapter: vercel(),
});