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
          DEFAULT: "#669DFD",
          50: "#f0f5ff",
          100: "#dce8ff",
          200: "#b8d1ff",
          300: "#85b0ff",
          400: "#669DFD",
          500: "#3d7af5",
          600: "#2558e0",
          700: "#1e45be",
          800: "#1f3b98",
          900: "#1e3378",
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
