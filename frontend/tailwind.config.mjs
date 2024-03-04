/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'curly-div-teal-300': "url('/line-twTeal300.png')",
        'pawPadSingle': "url('/pawPad.svg')",
        'missionBannerImage': "url('/skyBannerBackground.png')",

      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
