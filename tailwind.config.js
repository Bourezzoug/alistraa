/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color' : '#4E6BFF',
        'p-color' : '#79808A',
        'header-color' : '#181C31',
        'secondary' : '#f4f7fa'
      },
      boxShadow:{
        '9xl' : '10px 10px 80px rgba(0, 0, 0, 0.07)'
      },
    },
  },
  plugins: [],
}