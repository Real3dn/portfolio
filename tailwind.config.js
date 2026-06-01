/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s infinite ease-in-out',
        'float-delayed': 'float 25s infinite ease-in-out reverse',
        'float-slow': 'float 30s infinite ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-30px) rotate(5deg)' },
          '66%': { transform: 'translateY(20px) rotate(-5deg)' },
        }
      }
    },
  },
  plugins: [],
}