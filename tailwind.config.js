/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        burtons: 'burtons',
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
