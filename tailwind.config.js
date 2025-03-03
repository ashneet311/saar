/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom-inner': 'inset 10px 2px 40px rgba(0, 0, 0, 0.6)',
      },
      screens: {
        'xsm': { 'min': '320px', 'max': '480px' },
      },
    },
  },
  plugins: [],
}