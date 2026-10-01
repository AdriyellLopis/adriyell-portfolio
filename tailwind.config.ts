import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2340", muted: "#4d5275", cream: "#fff9f0",
        sky: { DEFAULT: "#cfe3ff", deep: "#5b7fd6" },
        lavender: { DEFAULT: "#e0d7ff", deep: "#7a63d1" },
        blush: "#ffd9ec", mint: "#d3f5e6",
      },
      fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      boxShadow: { soft: "0 10px 40px -12px rgba(122,99,209,.25)" },
    },
  },
  plugins: [],
};
export default config;
