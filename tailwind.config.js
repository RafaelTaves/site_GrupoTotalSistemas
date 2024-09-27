/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-red": "#921004",
        "light-blue": "#009790",
        "dark-blue": "#00A4EE",
        "light-blue-II": "#bfd6ef",
        "dark-green": "#009379",
        "mid-blue": "#38bdf8"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}