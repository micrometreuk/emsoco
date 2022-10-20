/** @type {import('tailowindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')



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
        sans: ['Oxygen', ...defaultTheme.fontFamily.sans]

      },

    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),

  ],

  corePlugins: {
    fontFamily: true,
  },

}
