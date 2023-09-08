/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        veryDark: "hsl(207, 26%, 17%)",
        veryDarkBlue: "hsl(200, 15%, 8%)",
        darkGray: "hsl(0, 0%, 52%)",
        veryLightGray: "hsl(0, 0 %, 98 %)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};
