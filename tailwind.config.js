/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      xs: "320px",
      sm: "550px",
      md: "749px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        // Background Color
        "main-bg": "black",
        "secondary-bg": "blue",
        "main-button-bg": "blue",
        "secondary-button-bg": "red",

        "half-transparent": "rgba(0, 0, 0, 0.3)",

        // Dark Background Color
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",

        // Text Color
        "main-text": "white",
        "secondary-text": "#20232A",
      },
    },
  },
  plugins: [],
};
