/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aktiv-grotesk': ['Aktiv Grotesk', 'sans-serif'],
        'domaine-display': ['Domaine Display', 'sans-serif'],
        'haikus-script': ['Haikus Script', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

