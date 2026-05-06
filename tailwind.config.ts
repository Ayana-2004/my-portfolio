import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/(frontend)/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#FFD700',
          500: '#FFC200',
          600: '#FFB300',
        },
        navy: {
          800: '#0a1628',
          900: '#060d1a',
          950: '#030812',
        },
      },
    },
  },
  plugins: [],
}

export default config
