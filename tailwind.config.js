/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.css',
  ],
  theme: {
    extend: {
      fontSize: {
        '44px': '44px',
      },


    },
  },
  plugins: [],
}