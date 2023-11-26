/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'tlo-strony':"url('/src/photos/tlostrona.png')",
      }
    },
  },
  plugins: [],
}

