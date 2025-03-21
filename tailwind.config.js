/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./**/*.html",          // This targets all HTML files
    "!./node_modules/**/*"  // This excludes files in node_modules
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

