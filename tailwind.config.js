/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#E50914",
        "netflix-black": "#403C3D",
      },
    },
  },
  plugins: [],
};
