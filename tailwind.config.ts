import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        empire: {
          50: "#fff8fa",
          100: "#ffeaf1",
          600: "#d63384",
          700: "#b72570",
          900: "#5d1038",
        },
        accent: {
          500: "#f59e0b",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
