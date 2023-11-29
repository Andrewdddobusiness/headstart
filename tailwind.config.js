import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white: "#FFFFFF",
        black: "#000000",

        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FEFEFA",
            foreground: "#11181C",
            primary: {
              foreground: "#FFFFFF",
              DEFAULT: "#F5A524",
            },
          },
        },
        dark: {
          colors: {
            background: "#0A0A0A",
            foreground: "#ECEDEE",
            primary: {
              50: "#FEFCE8",
              100: "#FDEDD3",
              200: "#FBDBA7",
              300: "#F9C97C",
              400: "#F7B750",
              500: "#F5A524",
              600: "#C4841D",
              700: "#936316",
              800: "#62420E",
              900: "#312107",
              foreground: "#FFFFFF",
              DEFAULT: "#F5A524",
            },
            secondary: {
              50: "#FAFAFA",
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              400: "#A1A1AA",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              800: "#27272A",
              900: "#18181B",
              DEFAULT: "#71717A",
            },
          },
        },
      },
    }),
  ],
};
