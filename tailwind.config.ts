import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        'rock-salt': ['"Rock Salt"', ...defaultTheme.fontFamily.sans],
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-gray': '#7d7d7d',
      },
      transitionProperty: {
        'max-height': 'max-height',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'pulse-subtle':
          'pulse-subtle 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        blob: 'blob 8s infinite',
        levitate: 'levitate infinite',
        'levitate-reverse': 'levitate-reverse infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '.5' },
          '50%': { opacity: '0' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '20%': {
            transform: 'translate(150px, -150px) scale(1.2)',
          },
          '40%': {
            transform: 'translate(250px, -250px, 0) scale(1.5)',
          },
          '60%': {
            transform: 'translate(150px, -150px) scale(1.2)',
          },
          '80%': {
            transform: 'translate(100px, -100px) scale(1.2)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        levitate: {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '50%': {
            transform: 'translate(0px, -15px)',
          },
          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
        'levitate-reverse': {
          '0%': {
            transform: 'translate(0px, 0px)',
          },
          '50%': {
            transform: 'translate(0px, 15px)',
          },
          '100%': {
            transform: 'translate(0px, 0px)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
  'editor.quickSuggestions': {
    strings: 'on',
  },
  safelist: [
    {
      pattern:
        /from-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(400|500|600|700|800|900)/,
    },
    {
      pattern:
        /to-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(400|500|600|700|800|900)/,
    },
    {
      pattern:
        /text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(400|500|600|700|800|900)/,
    },
  ],
}
export default config
