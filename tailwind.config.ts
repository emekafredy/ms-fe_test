import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
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
      screen: {},
    },
  },
  plugins: [],
};
export default config;
