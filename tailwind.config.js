/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e0ecff',
          400: '#5b8def',
          500: '#3866d6',
          600: '#2b4fb0',
        },
        accent: {
          400: '#f5a35b',
          500: '#e8823a',
        },
      },
    },
  },
  plugins: [],
}
