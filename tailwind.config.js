/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
  theme: {
    extend: {

      fontFamily: {
        cursif: ['Cursif'],
        Cursif: ['Cursif', 'Cursif-BLKG.'],
      },

    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],

  corePlugins: {
    fontFamily: true,
  },

}
