import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import compress from "astro-compress"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://maax.dev",
  integrations: [tailwind(), sitemap(), compress()],
  output: "server",
  adapter: vercel(),
})
