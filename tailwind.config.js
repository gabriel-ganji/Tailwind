/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgba(18, 18, 18)',
          200: 'rgba(51, 51, 51)'
        },
        alura: {
          100: '#167BF7',
          200: '#051933'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

