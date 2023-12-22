/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./projects/*.html","./index.html","./funstuff.html", "./content.js", "./portfolio/index.html", "./portfolio/index.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

