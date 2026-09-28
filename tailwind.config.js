/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emeraldNeon: {
          DEFAULT: '#00df81',
          hover: '#05c774',
          light: '#34d399',
          glow: 'rgba(0, 223, 129, 0.25)',
        },
        forest: {
          bg: '#040d09',
          surface: '#081a14',
          card: 'rgba(8, 26, 20, 0.78)',
          border: 'rgba(0, 223, 129, 0.2)',
          borderHover: 'rgba(0, 223, 129, 0.55)',
          muted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
