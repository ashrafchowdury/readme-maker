/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { min: "1400px" },
        // => @media (min-width: 1279px) { ... }
        lg: { min: "1023px" },
        md: { min: "767px" },
        sm: { min: "550px" },
      },
    },
    colors: {
      primary: "#2962ff",
      lightBg: "#fafbff",
      darkBg: "#0f172a",
      light: "#e2e8f0",
      dark: "#1e293b",
    },
  },
  plugins: [],
};
