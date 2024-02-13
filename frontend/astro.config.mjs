import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import react from "@astrojs/react";
import { sanityIntegration } from "@sanity/astro";

/** @type {import('astro-m2dx').Options} */
const m2dxOptions = {
  autoImports: true,
  styleDirectives: true
};

// https://astro.build/config
export default defineConfig({
  integrations: [mdx({
    // If you have specific MDX options, they would go here
  }), tailwind(), react(), sanityIntegration(
    {
      projectId: "1bs3a1kl",
      dataset: "production",
      useCdn: false,
    }
  )],

  markdown: {
    remarkPlugins: [[m2dx, m2dxOptions]],
    extendDefaultPlugins: true
  }
});
