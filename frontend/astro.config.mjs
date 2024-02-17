import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), react(), sanityIntegration({
    projectId: "1bs3a1kl",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/admin"
  })],
  adapter: netlify()
});