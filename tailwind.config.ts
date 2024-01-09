import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color": "#272b33f",
      },
      minHeight: {
        screen: "100vh",
        // 추가하려는 다른 min-height 값
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    hljs: {
      theme: "atom-one-dark",
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-highlightjs")],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
};
export default config;
