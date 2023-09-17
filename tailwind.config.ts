/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "320px", max: "393px" },
      // => @media (min-width: 320px and max-width: 393px) { ... }

      mobileBig: { min: "412px", max: "428px" },
      // => @media (min-width: 412px and max-width: 428px) { ... }

      desktop: { min: "768px", max: "1920px" },
      // => @media (min-width: 768px and max-width: 1920px) { ... }
    },
    colors: {
      Tomato: "#ff6257",
      DarkSlateGray: "#242742",
      CharcoalGray: "#36384e",
      Gray: "#9294a0",
      White: "#ffffff",
      Peach: "#ff527b",
      Orange: "#ff6545",
    },
    extend: {},
  },
  plugins: [],
};
