import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E1251B",
          50: "#fdeceb",
          100: "#fbd6d2",
          200: "#f5a9a0",
          300: "#ee7a6c",
          400: "#E1251B",
          500: "#c11f16",
          600: "#9c1912",
          700: "#7a130e",
          800: "#5c0f0a",
          900: "#3d0a07",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          100: "#1a1a1a",
          200: "#2a2a2a",
          300: "#3a3a3a",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
