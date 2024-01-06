/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg1": "#F4FBFE",
        "bg2": "#98BCD6",
        "bg3": "#DAE8F24D",
        "bg4": "#E9F0F5",
        "bg5": "#374857",
        "bg6": "#88ADC8",
        "bg7": "#B2DFFF",
        "text1": "#98BCD6",
        "text2": "#3C4959",
        "text3": "#CFCFCF",
        "text4": "#9C9C9C",
        "darktext1": "#000000",
      }
    },
  },
  plugins: [],
}