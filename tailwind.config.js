/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      customBlue: '#29285A',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}