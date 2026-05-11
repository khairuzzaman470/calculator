import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://card.khairuzzaman.site',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
