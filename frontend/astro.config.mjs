import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind(), react(), sanityIntegration({
    projectId: "1bs3a1kl",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin"
  })],
  adapter: vercel()
});