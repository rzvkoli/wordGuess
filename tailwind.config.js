/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Chilanka': ['Chilanka' , 'sans'] ,
        'Fredoka': ['Fredoka' , 'sans'] ,
      },
    },
  },
  plugins: [],
}

