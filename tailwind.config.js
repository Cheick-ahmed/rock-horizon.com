const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
      '8xl': ['5rem', { lineHeight: '5.5rem' }], 
      '9xl': ['6rem', { lineHeight: '6.5rem' }],
    },

    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      colors : {
        sand: {
          DEFAULT: '#D4AF37', 
          dark: '#C49A2C',   
        },
      },
    },
    fontFamily: {
      sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
      base : ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}



