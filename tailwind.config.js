/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          darkblue: '#070f2b',
          purple: '#1b1a55',
          gray: '#535c91',
          lightgray: '#9290c3',
          green: '#27391c',
          red: '#88304e'
        },
      },
    },
  },
  plugins: [],
}