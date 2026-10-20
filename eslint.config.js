import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

export default [
  { ignores: ["build", "build-ssr"] },
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    ...react.configs.flat.recommended,
    ...react.configs.flat["jsx-runtime"],
    ...jsxA11y.flatConfigs.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": "off",
    },
  },
  {
    files: ["scripts/**/*.js", "*.config.js"],
    languageOptions: { globals: globals.node },
  },
  prettier,
];
