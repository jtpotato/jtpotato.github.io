import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-satoshi)', 'sans-serif'],
        display: ['var(--font-general-sans)', 'sans-serif']
      },
      colors: {
        "text-secondary": "var(--color-text-secondary)",
        "text-primary": "var(--color-text-primary)",
        "background-a": "var(--color-background-a)",
        "background-b": "var(--color-background-b)",
        "background-c": "var(--color-background-c)",
      }
    },
  },
  plugins: [],
}
export default config
