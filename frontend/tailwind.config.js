/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Fixed missing closing bracket for `jsx`
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"], // Capitalized "Poppins" for consistency
    },
    extend: {
      screens: {
        "1000px": "1000px", // Fixed "1000px" key value (was 1050px, likely a typo)
        "1100px": "1100px", // Matched key to value for consistency
        "800px": "800px", // Matched key to value for consistency
        "400px": "400px",
      },
    },
  },
  plugins: [],
};