/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm' : '320px',
      },
      width:{
        '128' : '32rem',
        '129' : '33rem',
        '132' : '34rem',
      },
      colors:{
        'warna1':'#86A789'
      }
    },
  },
  plugins: [],
}
