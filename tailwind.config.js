/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

const pallets = {
  background: withOpacity('--color-background'),
  overlay: withOpacity('--color-overlay'),
  title: withOpacity('--color-title'),
  subtitle: withOpacity('--color-subtitle'),
  regular: withOpacity('--color-regular'),
  hightlight: withOpacity('--color-hightlight'),
  secondary: withOpacity('--color-secondary'),
  separate: withOpacity('--color-separate'),
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...pallets,
      },
      fontFamily: {
        app: ['sans-serif'],
      },
    },
  },
  plugins: [],
};
