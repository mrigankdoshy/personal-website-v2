import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      textColor: {
        primary: 'var(--gray-12)',
        secondary: 'var(--gray-11)',
        tertiary: 'var(--gray-9)',
        link: 'var(--blue-11)',
      },
      backgroundColor: {
        contrast: 'var(--contrast-color)',
        primary: 'var(--gray-1)',
        secondary: 'var(--gray-2)',
        tertiary: 'var(--gray-3)',
      },
      borderColor: {
        primary: 'var(--gray-6)',
        secondary: 'var(--gray-3)',
      },
      divideColor: {
        primary: 'var(--gray-6)',
        secondary: 'var(--gray-3)',
      },
      ringOffsetColor: {
        primary: 'var(--gray-12)',
      },
      boxShadow: {
        soft: '0 15px 30px 0 rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        in: {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'in-reverse': {
          '0%': { transform: 'translateY(-18px)', opacity: '0' },
          '100%': { transform: 'translateY(0px)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        in: 'in .6s both',
        'in-reverse': 'in-reverse .6s both',
        'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
        'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
