/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // colors: {
    //   manatee: '#969CAEff',
    //   'black-shadows': '#CFB5BFff',
    //   'rich-black-fogra-29': '#030A16ff',
    //   'raisin-black': '#202132ff',
    //   independence: '#3A3E53ff',
    // },
    extend: {
      fontFamily: {
        burtons: 'burtons',
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
