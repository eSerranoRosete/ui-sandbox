const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#0f172a",
        success: "#16a34a",
        muted: "#78716c",
        danger: "#e11d48",
        accent: "#D9F368",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

module.exports = config;
