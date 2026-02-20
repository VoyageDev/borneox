// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://borneox.biz.id',
  base: '/',
  adapter: vercel(),
  integrations: [sitemap()]
});