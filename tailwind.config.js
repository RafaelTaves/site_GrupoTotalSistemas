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
        "light-blue-II": "#83abd6",
        "dark-green": "#009379",
        "mid-blue": "#38bdf8",
        "light-green-I": "#71A064"
      }
    }, 
    animation: {
      'gradient-x': 'gradient-x 8s linear infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%': { 'background-position': '0% 50%' },
        '100%': { 'background-position': '200% 50%' },
      },
    },
    backgroundSize: {
      '400%': '400% 400%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}