/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fef7ed',
          100: '#fdecd4',
          200: '#fbd5a8',
          300: '#f8b871',
          400: '#f49238',
          500: '#f17316',
          600: '#e2580c',
          700: '#bb420c',
          800: '#953511',
          900: '#782d12',
        },
        temple: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [],
}