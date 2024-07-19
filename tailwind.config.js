/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      sm: { max: "767px" },
      md: { min: "768px" },
      desk: { min: "1201px" },
      },
    extend: {
      backgroundImage: {     
        "heroBgImg": "url('/img/hero/foodPackage.png')"
      },
      backgroundColor: {
        mainColor: "#fff"
      },
      colors: {
        mainTextColor: "#fbbf24"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
        width: "100vw",
        "@screen sm": {
          width: "100vw",
        },
        "@screen md": {
          width: "100vw",
        },
        "@screen desk": {
          width: "100vw",
          maxWidth: "1920px"
        },
        },
      });
      },
  ],
};
