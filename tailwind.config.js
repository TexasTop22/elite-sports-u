/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#E10600",     // Elite red (energetic)
        navy: "#002B5B",    // Deep navy (trust & strength)
        white: "#FFFFFF",   // Clean base
        graylight: "#F5F5F5",
      },
      backgroundImage: {
        hero: "url('/images/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
