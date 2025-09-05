/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        farmerGreen: "#2e7d32",
        farmerYellow: "#fbc02d",
      },
    },
  },
  plugins: [],
};
