/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgb(0 0 0 / 8%) 0 -1px',
      },
      boxShadow: {
        '4xl': 'rgb(0 0 0 / 8%) 0 1px',
      }
    },
  },
  plugins: [],
}