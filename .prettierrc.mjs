/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
        semi: true,
        trailingComma: "es5",
        singleQuote: false,
        tabWidth: 2,
      },
    },
  ],
};
