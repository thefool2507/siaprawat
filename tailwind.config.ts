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
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Nunito', 'sans-serif'],
      },
      colors: {
        sky: {
          50: '#E0F7FF',
          100: '#B3EEFF',
          200: '#80E2FF',
          300: '#4DD6FF',
          400: '#00BFFF',
          500: '#00BFFF',
          600: '#0099CC',
          700: '#007AA3',
          800: '#005C7A',
          900: '#003D52',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'sky-sm': '0 2px 8px rgba(0, 191, 255, 0.15)',
        'sky-md': '0 4px 20px rgba(0, 191, 255, 0.25)',
        'sky-lg': '0 8px 40px rgba(0, 191, 255, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
