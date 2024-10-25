/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00B251",
        primaryGray: "#CED1D4",
        black: '#383838'
      },
    },
  },
  plugins: [],
};
