/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#DFDEE0',
        violet: '#21092F',
        deepGrey: '#8F8694',
      },
    },
  },
  plugins: [],
};
