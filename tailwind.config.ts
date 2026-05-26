import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f3ec",
        graphite: "#2e2a27",
        tobacco: "#8b6a4a"
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Inter'", "Arial", "sans-serif"]
      },
      letterSpacing: {
        editorial: "0.08em"
      }
    }
  },
  plugins: []
} satisfies Config;
