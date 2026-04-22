
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a', // slate-900
          light: '#fefce8', // warm off-white
          accent: '#f59e0b', // amber-500
          accentHover: '#fbbf24', // amber-400
        }
      }
    },
  },
  plugins: [],
}
