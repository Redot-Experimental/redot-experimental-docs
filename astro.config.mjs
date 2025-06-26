// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightOpenAPI, { openAPISidebarGroups } from "starlight-openapi";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
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
        light: "./src/assets/dark-logo.svg",
        dark: "./src/assets/light-logo.svg",
        replacesTitle: true,
      },
      customCss: [
        "./src/styles/inter.css",
        "./src/styles/redot.css",
        "./src/styles/global.css",
      ],
      plugins: [
        starlightOpenAPI([
          {
            base: "api",
            label: "Redot API",
            schema: "./public/openapi.yaml",
          },
        ]),
      ],
      sidebar: [
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
        },
        {
          label: "Roadmap",
          autogenerate: { directory: "roadmap" },
        },
        ...openAPISidebarGroups,
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
