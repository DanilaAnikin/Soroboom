/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
    },
    screens: {
      'mobile': '380px',
      'xs': '550px',
      'sm': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
}