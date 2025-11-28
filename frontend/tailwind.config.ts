import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeadb',
          200: '#fad2b5',
          300: '#f6b385',
          400: '#f08a53',
          500: '#eb6b2d',
          600: '#dd5122',
          700: '#b73d1d',
          800: '#93321f',
          900: '#772c1c',
          950: '#40140c',
        },
        secondary: {
          50: '#f6f5f0',
          100: '#e9e6d9',
          200: '#d5cfb6',
          300: '#bdb18c',
          400: '#a9976c',
          500: '#9a865d',
          600: '#846e4f',
          700: '#6b5742',
          800: '#5b4a3b',
          900: '#504136',
          950: '#2d231c',
        },
        gold: {
          50: '#fbf8eb',
          100: '#f6efc9',
          200: '#efdd96',
          300: '#e6c55a',
          400: '#dfb033',
          500: '#cf9820',
          600: '#b27619',
          700: '#8e5618',
          800: '#77451b',
          900: '#653a1c',
          950: '#3b1d0c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
