/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#141520",
        white: "#F5F5F5",
        lila: {
          50: "#FBFAFF",
          100: "#EAE6FE",
          200: "#E2DCFE",
          300: "#D6CEFD",
          400: "#F7F5FF",
          500: "#C8BEFD",
          600: "#B4A6FC",
          700: "#A08DFB",
          800: "#836BFA",
          900: "#5534F9",
        },
        red: {
          50: "#FEFBFB",
          100: "#FBEAED",
          200: "#F8DDE2",
          300: "#F6D0D7",
          400: "#FDF7F8",
          500: "#F3C4CD",
          600: "#EEAAB7",
          700: "#E88D9D",
          800: "#DE5E75",
          900: "#BF2743",
        },
        yellow: {
          50: "#FFFDFA",
          100: "#FFF5EB",
          200: "#FEEEDC",
          300: "#FEE9D2",
          400: "#FFFAF5",
          500: "#FEE3C6",
          600: "#FDC991",
          700: "#FCA446",
          800: "#EC7C04",
          900: "#AA5903",
        },
        green: {
          50: "#f8fbfc",
          100: "#e1edef",
          200: "#d3e5e8",
          300: "#c6dde2",
          400: "#f2f7f8",
          500: "#b7d4da",
          600: "#82b5bf",
          700: "#51919e",
          800: "#366068",
          900: "#1c3236",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        title: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
        code: ["Fira Code Variable", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addBase, theme }) {
      const md = theme("screens.md", {})

      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontWeight: "800",
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.5xl"),
          },
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: "700",
          [`@media (min-width: ${md})`]: {
            fontSize: theme("fontSize.4xl"),
          },
        },
        ".prose h2": {
          borderBottom: "2px solid " + theme("colors.stone.200"),
        },
        ".prose a": {
          color: theme("colors.lila.900"),
          textDecoration: "underline",
          "text-DecorationThickness": "2px",
        },
        time: {
          fontFamily: theme("fontFamily.code"),
          fontSize: theme("fontSize.sm"),
        },
      })
    },
  ],
}
