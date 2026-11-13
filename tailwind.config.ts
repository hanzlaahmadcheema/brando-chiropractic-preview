import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#eef6f2",
          100: "#d7e9e0",
          200: "#b0d3c4",
          300: "#7fb9a5",
          400: "#4d9c85",
          500: "#2f8269",
          600: "#1a6b5d",
          700: "#155047",
          800: "#103832",
          900: "#0b2b26",
          950: "#071f1c",
        },
        leaf: {
          300: "#a5dd85",
          400: "#7cc242",
          500: "#58b368",
          600: "#3f9e4d",
          700: "#2f7d3d",
        },
        paper: "#f6f4ec",
        cream: "#faf5ec",
        honey: "#d9a441",
        ivory: "#fdf9f3",
        sand: "#f6ecdd",
        blush: "#f3d9d7",
        amberstar: "#e8a33d",
        ink: "#221a14",
        muted: "#6b5a54",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
