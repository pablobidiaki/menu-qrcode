/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Matangi', 'sans-serif'], // substitui a fonte padrão
        },
    },
  },
  plugins: [],
}
