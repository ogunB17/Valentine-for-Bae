/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f42547",
        "background-light": "#f8f5f6",
        "background-dark": "#221013",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "handwritten": ["Caveat", "cursive"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
