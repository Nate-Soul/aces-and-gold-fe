/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      IBMPlexSans: ["IBM Plex Sans", 'sans-serif']
    },
    screens: {
      'xxs': '300px',
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'main': '#082d25',
        'main-100': '#26d4ae',
        'main-500': '#1a9177',
        'main-600': '#178069',
        'main-700': '#14705c',
        'main-800': '#115f4e',
        // 'main-100': '#17745f',
        'secondary': '#d2ab8a',
        'light': '#f2cfcb',
      },
    },
  },
  plugins: [],
}
