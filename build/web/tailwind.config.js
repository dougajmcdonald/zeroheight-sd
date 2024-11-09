/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colours: {
        blue: "#1fb6ff",
        green: "#41b753",
        pink: "#ff49db",
        purple: "#7e5bef",
        primary: "#1fb6ff"
      },
      fontFamily: {
        sans: "['Graphik', 'sans-serif']"
      }
    },
  },
}