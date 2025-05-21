import type { Config } from "tailwindcss";

// tailwind.config.js

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pblue: "#1c345b",
        ablue: "#2e1f47",
        ice: "#dfe6f4",
        coolblue: "#8eb6d8",
        royalblue: "#3d5caa",
        cyan: "#aee7ff",
        eindigo: "#5f59a3",
        frost: "#a2c0da",
        purp: "#1e102e",
        creamy: "#f7f6c5",
        lpurp: "#332a5a",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        garamond: ["var(--font-garamond)"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
