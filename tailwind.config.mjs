/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bbcBlack: "#000000",
        bbcWhite: "#ffffff",
        bbcGray: "#e6e6e6",
      },
    },
  },
  plugins: [],
};
