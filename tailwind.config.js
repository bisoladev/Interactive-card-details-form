/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#DFDEE0',
        violet: '#21092F',
        deepGrey: '#C8C2CB',
      },
    },
  },
  plugins: [],
};
