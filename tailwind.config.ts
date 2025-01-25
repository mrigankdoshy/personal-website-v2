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
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))',
        badge: 'hsl(var(--badge))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(-18px)',
          },
          to: {
            opacity: '1',
            transform: 'none',
          },
        },
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(36px)',
          },
          to: {
            opacity: '1',
            transform: 'none',
          },
        },
        rainbow: {
          '0%': {
            'background-position': '0%',
          },
          '100%': {
            'background-position': '200%',
          },
        },
        equalizer: {
          '0%': { transform: 'translateY(90%)' },
          '4%': { transform: 'translateY(77%)' },
          '8%': { transform: 'translateY(73%)' },
          '12%': { transform: 'translateY(52%)' },
          '16%': { transform: 'translateY(38%)' },
          '20%': { transform: 'translateY(52%)' },
          '24%': { transform: 'translateY(73%)' },
          '28%': { transform: 'translateY(13%)' },
          '32%': { transform: 'translateY(73%)' },
          '36%': { transform: 'translateY(90%)' },
          '40%': { transform: 'translateY(38%)' },
          '44%': { transform: 'translateY(73%)' },
          '48%': { transform: 'translateY(90%)' },
          '52%': { transform: 'translateY(52%)' },
          '56%': { transform: 'translateY(20%)' },
          '60%': { transform: 'translateY(52%)' },
          '64%': { transform: 'translateY(90%)' },
          '68%': { transform: 'translateY(52%)' },
          '72%': { transform: 'translateY(90%)' },
          '76%': { transform: 'translateY(38%)' },
          '80%': { transform: 'translateY(90%)' },
          '84%': { transform: 'translateY(69%)' },
          '88%': { transform: 'translateY(90%)' },
          '92%': { transform: 'translateY(38%)' },
          '96%': { transform: 'translateY(90%)' },
          '100%': { transform: 'translateY(90%)' },
        },
        progress: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s both',
        'fade-up': 'fade-up 0.6s both',
        rainbow: 'rainbow var(--speed, 2s) infinite linear',
        equalizer: 'equalizer 4s linear infinite',
        progress: 'progress linear',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} satisfies Config;
