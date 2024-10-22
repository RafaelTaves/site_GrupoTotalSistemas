/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'HDxl': '1780px',
      '2HDxl': '1880px',
      '4HDxl': '2400px',
      // outros breakpoints padrão podem ser mantidos ou removidos
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}