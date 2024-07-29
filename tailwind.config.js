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
      deskXL: {min: "1440px"},
      desk2XL: {min: "1920px"}
      },
    extend: {
      backgroundImage: {     
        "heroBgImg": "url('/img/hero/foodPackage.png')"
      },
      backgroundColor: {
        mainColor: "#fff",
        headerMenuBgColor: "#f0fdf4",
        btmBg: "#22c55e"
      },
      colors: {
        mainTextColor: "#fbbf24",
        linksTextColor: "#22c55e", 
        inputHoverColor: "#38bdf8",
        basketActiveBorder: "#ef4444"    
      },     
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
        },
        "@screen deskXL": {
          width: "100vw",
        },
        "@screen desk2XL": {
          width: "100vw",
        },
        },
      });
      },
  ],
};
