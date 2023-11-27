import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#131316",
        },
        secondary: {
          100: "#56616B",
        },
        tertiary: {
          100: "#F0F1F6",
        },
      },
    },
  },
  plugins: [],
};
export default config;
