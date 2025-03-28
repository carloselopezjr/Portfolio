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
        Purp: "#1e102e",
        creamy: "#f7f6c5",
        background: "var(--background)",
        foreground: "var(--foreground)",
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

