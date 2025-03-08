/** @type {import('tailwindcss').Config} */

const darkPallets = {
  background: '#272727',
  overlay: '#04080F',
  title: '#FFFFFF',
  subtitle: '#DEDEDE',
  regular: '#D4D4D4',
  hightlight: '#2ca0e7',
  secondary: '#2EB62C',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: darkPallets,
      },
      fontFamily: {
        app: ['sans-serif'],
      },
    },
  },
  plugins: [],
};
