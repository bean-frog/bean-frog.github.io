/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./index.html","./funstuff.html", "./content.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

