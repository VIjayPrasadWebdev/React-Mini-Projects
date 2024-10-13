import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purepink: "#FF007F",
        brown: "#964B00",
      },
      animation: {
        bounce: "bounce 2s linear infinite",
      },
      height: {
        menucardheight: "420px",
        tabcardheight: "350px",
        loadmenucardheight: "430px",
        carouselheight: "450px",
      },
      width: {
        paginationcontentwidth: "550px",
        tabcardwidth: "1250px",
        accordionwidth: "1400px",
      },
      gridTemplateColumns: {
        tabcontentcoloumn: "auto 2fr",
      },
      fontSize: {
        artistfont: ".9rem",
        colorstextfont: "1.1rem",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  darkMode: ["class", '[data-theme="night"]'],
};
export default config;
