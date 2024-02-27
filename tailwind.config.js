/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#334155",
        "color-secondary": "#7c3aed",
        "color-text": "#CBD5E1",
        "color-dark-primary":"#1E293B",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}

