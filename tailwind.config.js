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
      },
      screens:{
        '3xl':'1920px',
      }
    },

    // screens:{
    //   '4xl': '1920px',
    // }
  },
  plugins: [],
}

