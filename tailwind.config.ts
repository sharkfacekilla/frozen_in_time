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
        black: "#333333",
        white: "#e6e8e6",
        blue: "#2374AB",
        red: "#E84855",
      },
    },
  },
  plugins: [],
};
export default config;
