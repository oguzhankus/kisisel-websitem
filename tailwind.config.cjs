/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--app-primary) / <alpha-value>)",
        secondary: "rgb(var(--app-secondary) / <alpha-value>)",
        foreground: "rgb(var(--app-foreground) / <alpha-value>)",
        surface: "rgb(var(--app-surface) / <alpha-value>)",
        "surface-deep": "rgb(var(--app-surface-deep) / <alpha-value>)",
        tertiary: "rgb(var(--app-tertiary) / <alpha-value>)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
