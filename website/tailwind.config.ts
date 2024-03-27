import { FadeDown } from "./src/lib/animations/FadeDown";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "secondary": "#808080"
      },
      keyframes: {
        'fadein-down': FadeDown
      },
      animation: {
        'fadein-down': 'fadein-down 0.5s ease-out var(--fadein-delay, 0ms) backwards'
      }
    },
  },
  plugins: [],
};
export default config;
