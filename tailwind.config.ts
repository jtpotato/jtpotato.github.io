import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e0e0e0',
        'background': '#090909',
        'accent': '#f9f9f9',
        'text-secondary': '#707070',
        'lines': '#505050'
       },       
      fontFamily: {
        sans: ['sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
