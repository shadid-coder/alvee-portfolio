import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a1128",
          900: "#10193a",
          800: "#17224d",
          700: "#212f63",
        },
        gold: {
          300: "#e8cd6b",
          400: "#d4af37",
          500: "#b8952c",
        },
        ivory: "#f4efe2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 0%, rgba(212,175,55,0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
