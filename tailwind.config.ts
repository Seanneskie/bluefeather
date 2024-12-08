import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'indigo-dye': '#195076ff',
        'red-ncs': '#b7132bff',
        'pacific-cyan': '#1da5cfff',
        'orchid-pink': '#eab2bcff',
        'white': '#ffffffff',
      
        indigo: {
          700: '#01205f', // Override the indigo-100 color
        },
        // Semantic colors using provided base colors
        primary: {
          DEFAULT: '#195076ff', // Indigo Dye as primary
          light: '#2a688fff', // Slightly lighter shade
          dark: '#123a55ff', // Slightly darker shade
        },
        secondary: {
          DEFAULT: '#eab2bcff', // Orchid Pink as secondary
          light: '#f2c9d0ff', // Slightly lighter shade
          dark: '#b1838eff', // Slightly darker shade
        },
        danger: {
          DEFAULT: '#b7132bff', // Red NCS for danger
          light: '#cf3244ff',
          dark: '#910e21ff',
        },
        info: {
          DEFAULT: '#1da5cfff', // Pacific Cyan for info
          light: '#33b7e5ff',
          dark: '#147891ff',
        },
        background: {
          DEFAULT: '#ffffffff', // White for background
          light: '#f9f9f9ff',
          dark: '#eaeaeaff',
        },
        text: {
          DEFAULT: '#195076ff', // Indigo Dye for primary text
          light: '#2a688fff',
          dark: '#123a55ff',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInDelayed: 'fadeIn 1.5s ease-out',
        scaleUp: 'scaleUp 1s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
