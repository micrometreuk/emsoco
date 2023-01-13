module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        cursif: ["CURSIF", "cursif"],
      },
      animation: {
        'slide': 'slide 15s linear infinite',
        'linethrough': 'linethrough 4s linear forwards',
      },
      keyframes: {
        slide: {
          '0%, 100%': {
            'margin-top': '-270px',
          },
          '5%, 33%': {
            'margin-top': '-180px',
          },
          '38%, 66%': {
            'margin-top': '-90px',
          },
          '71%, 99.99%': {
            'margin-top': '0px'
          }
        },
        linethrough: {
         '100%': {
         'transform': 'translateX(0)'
          },
        },
      },
        fontFamily: {
    'newsreader': ['Newsreader', 'cursive'],
  },
  fontSize: {
    '10xl': ['12rem', { lineHeight: '1' }],
  },
  letterSpacing: {
    extra: '0.5em',
  },

    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),

  ],
};
