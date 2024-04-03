/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        didot: ["GFS Didot", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        brandGreen: "#45919E",
        brandRed: "#C46E56",
        brandYellow: "#EEAE53",
        brandRedHover: "#995444",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
