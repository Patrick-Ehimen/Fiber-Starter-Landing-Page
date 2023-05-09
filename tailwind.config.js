/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      display: ["Inter", "cursive"],
    },
    extend: {
      colors: {
        blueishPurple: "#4D13D1",
        grayishBrown: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
