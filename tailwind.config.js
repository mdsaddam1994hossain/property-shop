/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./module/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        x: ["7px"],
        m: ["10px"],
      },
      fontFamily: {
        sans: ["'DM Sans'", ...defaultTheme.fontFamily.sans],
        serif: ["'DM Serif Display'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#003B33",
        secondary: "#00A991",
        greenLight: "#DDF3F0",
        light: "#F6FFFE",
      },
    },
  },
  plugins: [],
};
