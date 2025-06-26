// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://docs-experimental.redotengine.org",

  integrations: [
    starlight({
      title: "Redot Experimental Documentation",
      favicon: "/favicon.ico",
      editLink: {
        baseUrl:
          "https://github.com/Redot-Experimental/redot-experimental-docs/edit/master/src/content/docs/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Redot-Experimental/ReX",
        },
        { icon: "discord", label: "Discord", href: "https://discord.gg/redot" },
        { icon: "x.com", label: "X", href: "https://x.com/Redot_Engine" },
      ],
      logo: {
        light: "@/assets/dark-logo.svg",
        dark: "@/assets/light-logo.svg",
        replacesTitle: true,
      },
      customCss: [
        "@/styles/inter.css",
        "@/styles/starlight.css",
        "@/styles/global.css",
      ],
      plugins: [],
      sidebar: [
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
        },
        {
          label: "Roadmap",
          autogenerate: { directory: "roadmap" },
        },
      ],
    }),
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
