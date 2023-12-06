import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-satoshi)', 'sans-serif'],
        display: ['var(--font-general-sans)', 'sans-serif']
      },
      colors: {
        "background-dark": "#010101",
        "background-light": "#fefefe",
        "text-dark": "#eee"
      }
    },
  },
  plugins: [],
}
export default config
