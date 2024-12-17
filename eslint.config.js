import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        browser: "readonly",
        es2021: "readonly",
        node: "readonly",
      },
    },
    plugins: {
      astro: eslintPluginAstro,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "no-debugger": "error",
      "prettier/prettier": "error",
      ...eslintPluginAstro.configs.recommended.rules,
    },
    ignores: [
      "dist",
      "node_modules",
      "build",
      "public",
      "**/public/**",
      "./public/**",
    ],
  },
];
