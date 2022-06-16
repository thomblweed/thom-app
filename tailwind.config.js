/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D68FBC',
        secondary: '#53A0C4',
        alternate: '#935D7E',
        grey: '#AFD7FA'
      },
      boxShadow: {
        DEFAULT: `0 0 0 1.5px ${'#935D7E'}`,
        fs: `0 0 0 1.5px ${'#D68FBC'}`
      }
    }
  },
  plugins: []
};
